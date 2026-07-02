import Pictures from "../data/Images"
function Header() {
    return (
        <>
            <div className="flex justify-between">
                <div className="py-6 ">
                    <h1 className="font-bold text-4xl text-red-500">Image Gallery</h1>
                    <p className="px-3 font-mono"><span className="text-xl font-bold">{Pictures.length}</span> Photos are Listed it out !</p>
                </div>

                <div className="font-semibold text-sm my-9 p-2 border border-black rounded-xl">
                    <button>+ Add Image</button>
                </div>
            </div>
        </>

    )
}

export default Header