import Pictures from "../data/Images"
function Header() {
    return (
        <>
            <div className="grid grid-row-2 justify-between">
                <div className="py-6 ">
                    <h1 className="font-bold text-4xl text-red-500">Image Gallery</h1>
                    <p className="px-3 font-mono"><span className="text-xl font-bold">{Pictures.length}</span> Photos are Listed it out !</p>
                </div>
            </div>
        </>

    )
}

export default Header