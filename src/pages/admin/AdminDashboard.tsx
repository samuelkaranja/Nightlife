import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { fetchDrinks, fetchGalleryImages } from "../../services/supabase";

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-xl border border-emerald-400 bg-white p-6 shadow-sm">
    <p className="text-md text-neutral-500">{label}</p>
    <h2 className="mt-2 text-3xl font-bold">{value}</h2>
  </div>
);

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState("");
  const [drinkCount, setDrinkCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setAdminName(user?.user_metadata?.name || "Admin");

      const drinks = await fetchDrinks();
      const gallery = await fetchGalleryImages();

      setDrinkCount(drinks.length);
      setGalleryCount(gallery.length);
      setLoading(false);
    };

    loadDashboardData();
  }, []);

  return (
    <section className="space-y-10">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-3">Admin Dashboard</h1>
        <p className="text-[#333] text-xl">
          Welcome back, <span className="font-medium">{adminName}</span>
        </p>
      </div>

      {/* Stats */}
      {loading ? (
        <p className="text-neutral-500">Loading dashboard...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard label="Total Drinks" value={drinkCount} />
          <StatCard label="Gallery Images" value={galleryCount} />
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
