const AddImageForm = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 w-full min-h-[500px]">
      <h2 className="text-xl font-semibold mb-6">Add Gallery Image</h2>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Image</label>
          <input
            type="file"
            className="w-full border border-emerald-500 rounded-lg p-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 text-sm font-medium transition"
        >
          Upload Image
        </button>
      </form>
    </section>
  );
};

export default AddImageForm;
