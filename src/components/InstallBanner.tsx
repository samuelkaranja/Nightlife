import { useState, useEffect } from "react";

// Declare BeforeInstallPromptEvent manually
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const event = e as BeforeInstallPromptEvent;
      e.preventDefault();
      setDeferredPrompt(event);
      setShowBanner(true);
      console.log("PWA is installable!");

      // Auto-hide after 10s
      setTimeout(() => setShowBanner(false), 20000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show native install prompt
    deferredPrompt.userChoice.then(
      (choiceResult: {
        outcome: "accepted" | "dismissed";
        platform: string;
      }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setShowBanner(false);
        setDeferredPrompt(null);
      }
    );
  };

  const handleDismiss = () => {
    setShowBanner(false);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        showBanner ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-4 min-w-[280px]">
        <span>Install Belawinski Cocktail Bar for quick access!</span>
        <button
          onClick={handleInstall}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold transition-colors"
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          className="text-gray-300 hover:text-white font-bold px-2"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default InstallBanner;
