import Pictures from "../data/Images"
function Header ()
{
    return(
        <div className="py-6">
          <h1 className="font-bold text-4xl text-red-500">Image Gallery</h1>
          <p className="px-3 font-mono">{Pictures.length} Photos are Listed it out !</p>
        </div>
    )
}

export default Header