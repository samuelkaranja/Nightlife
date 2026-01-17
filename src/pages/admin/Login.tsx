import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      //Login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      const user = data.user;

      //Safety check
      if (!user) {
        throw new Error("User not found");
      }

      //Read metadata
      const { role, name } = user.user_metadata || {};

      //Admin-only access
      if (role !== "admin") {
        await supabase.auth.signOut();
        throw new Error("Access denied. Admins only.");
      }

      // Optional: log admin name
      console.log(`Welcome admin: ${name}`);

      //Redirect to dashboard
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101622]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div>
          <label className="block text-md font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          <label className="block text-md font-medium mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
            placeholder="**********"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium transition"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
