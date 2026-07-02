import Pictures from "../data/Images"
import ImageCard from "./imgcard"

function Gallery() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gallery_parent gap-3">
                {
                    Pictures.map((item) => (
                        <ImageCard
                            key={item.id}
                            image={item}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Gallery