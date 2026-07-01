import Pictures from "../data/Images"

function Gallery() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gallery_parent gap-4">
                {
                    Pictures.map(function (item) {
                        return (
                            <div className="card" key={item.id}>
                                <img className="Gallery_image" src={item.url} alt={`Img ${item.id}`} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery