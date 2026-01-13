const AddDrinkForm = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 w-full min-h-[500px]">
      <h2 className="text-xl font-semibold mb-6">Add New Drink</h2>

      <form className="space-y-5">
        {/* Image */}
        <div>
          <label className="block text-sm font-medium mb-1">Drink Image</label>
          <input
            type="file"
            className="w-full border border-emerald-500 rounded-lg p-2 text-sm"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Drink Title</label>
          <input
            type="text"
            placeholder="e.g. Mojito"
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            placeholder="e.g. 700"
            className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select className="w-full border border-emerald-500 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emerald-400 outline-none">
            <option>In Stock</option>
            <option>Out Of Stock</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 text-sm font-medium transition"
        >
          Save Drink
        </button>
      </form>
    </section>
  );
};

export default AddDrinkForm;
