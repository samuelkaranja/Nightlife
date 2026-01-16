import { useState } from "react";
import { addDrink } from "../services/supabase";
import { toast } from "react-toastify";

const AddDrinkForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [status, setStatus] = useState("In Stock");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !name || !type || !price) {
      return toast.error("Please fill all fields and upload an image.");
    }

    setLoading(true);
    try {
      await addDrink({ name, type, price: Number(price), status, imageFile });
      toast.success("Drink added successfully!");
      setName("");
      setType("");
      setPrice("");
      setStatus("In Stock");
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      toast.error("Error adding drink");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-3xl mx-auto min-h-[500px]">
      <h2 className="text-xl font-semibold mb-6">Add New Drink</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Drink Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-emerald-500 rounded-lg p-2 text-sm"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg border"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Drink Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Mojito"
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Type of Drink
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          >
            <option value="">Select Type</option>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Rum">Rum</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="e.g. 700"
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          >
            <option>In Stock</option>
            <option>Out Of Stock</option>
          </select>
        </div>

        <button
          type="submit"
          className={`bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 text-sm font-medium transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Drink"}
        </button>
      </form>
    </section>
  );
};

export default AddDrinkForm;
