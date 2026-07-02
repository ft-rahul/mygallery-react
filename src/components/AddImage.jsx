function AddImage() {
    return (
        <>
            {/* parent add new image  */}
            <div className="-right-full">
                <h2 className="text-2xl font-bold mb-5"> Add New Image </h2>

                <form className="mb-2 sm:grid grid-cols-3 gap-3">

                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Image URL</label>

                        <input
                            type="text"
                            placeholder="Paste image URL..."
                            className="w-auto border rounded-md p-2 border-slate-400"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">
                            Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter title..."
                            className="w-auto border rounded-md p-2 border-slate-400"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">
                            Description
                        </label>

                        <input
                            rows="4"
                            placeholder="Write description..."
                            className="w-auto border rounded-md p-2 border-slate-400"
                        ></input>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Add Image
                        </button>

                        <button
                            type="reset"
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                        >
                            Clear
                        </button>

                    </div>

                </form>
            </div>
        </>
    )
}

export default AddImage