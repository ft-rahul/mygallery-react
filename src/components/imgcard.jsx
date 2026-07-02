function ImageCard({ image }){

    return(

        <div className="card">

            <img
                src={image.url}
                alt={image.title}
            />

            <div className="overlay">

                <h3 className="text-xl font-semibold">{image.title}</h3>

                <p className="text-xs font-thin">{image.description}</p>
                

            </div>

        </div>

    )

}

export default ImageCard;