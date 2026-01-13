import { useState } from "react";
import { addGalleryImage } from "../services/supabase";

const AddImageForm = () => {
  const [title, setTitle] = useState("");
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
    if (!imageFile) return alert("Please upload an image");

    setLoading(true);
    try {
      await addGalleryImage(imageFile, title);
      alert("Image uploaded successfully!");
      setTitle("");
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-3xl mx-auto min-h-[500px]">
      <h2 className="text-xl font-semibold mb-6">Add Gallery Image</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Image</label>
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
          <label className="block text-sm font-medium mb-1">
            Title (optional)
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Bar Entrance"
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className={`bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 text-sm font-medium transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </section>
  );
};

export default AddImageForm;
