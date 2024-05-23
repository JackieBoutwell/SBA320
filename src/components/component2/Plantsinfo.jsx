const Plantsinfo = (props) => {
    const plants = props.plants;

    console.log(props, plants);

    return (
        <div className="Plants-info">
            {plants.map((data) => (
                <div className="plant-preview" key={data.id}>
                    <h2> {data.common_name} </h2>
                    <h2> {data.scientific_name[0]}</h2>

                    {data.sunlight.length > 0 && <p>Sunlight Guide  </p>}
                    
                    <p>Water Guide {data.watering}</p>

                    <img src={data.default_image.small_url}></img>
                </div>
            ))}
        </div>
    );
}

export default Plantsinfo;
