import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDrinkById, updateDrink } from "../../services/supabase";
import { toast } from "react-toastify";

const EditDrink = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: 0,
    status: "In Stock",
  });

  const [existingImageUrl, setExistingImageUrl] = useState<string>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;

    const loadDrink = async () => {
      try {
        const drink = await fetchDrinkById(id);

        setFormData({
          name: drink.name,
          type: drink.type,
          price: drink.price,
          status: drink.status,
        });

        setExistingImageUrl(drink.image_url);
      } catch (error) {
        console.error("Failed to load drink:", error);
        alert("Failed to load drink");
        navigate("/admin/drinks");
      }
    };

    loadDrink();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    try {
      setIsSubmitting(true);

      await updateDrink(id, {
        ...formData,
        imageFile: imageFile || undefined,
        existingImageUrl,
      });

      // Show success message
      setSuccessMessage("Drink updated successfully!");

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/admin/drinklist");
      }, 10000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update drink");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-3xl mx-auto min-h-[500px]">
      <h2 className="text-2xl font-semibold mb-6">Edit Drink</h2>

      {successMessage && (
        <div className="mb-4 rounded-lg bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3">
          {successMessage} Redirecting in 10 seconds...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {existingImageUrl && (
            <img
              src={existingImageUrl}
              className="h-32 rounded-lg object-cover"
            />
          )}
          <label className="block text-md font-medium mb-1">Drink Image</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full border border-emerald-500 rounded-lg p-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-md font-medium mb-1">Drink Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-md font-medium mb-1">
            Type of Drink
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          >
            <option value="">Select Type</option>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Rum">Rum</option>
            <option value="Tequila">Tequila</option>
            <option value="Brandy">Brandy</option>
          </select>
        </div>

        <div>
          <label className="block text-md font-medium mb-1">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
            placeholder="Price"
          />
        </div>

        <div>
          <label className="block text-md font-medium mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option>In Stock</option>
            <option>Out Of Stock</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 text-sm font-medium transition
    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Updating..." : "Update Drink"}
        </button>
      </form>
    </div>
  );
};

export default EditDrink;
