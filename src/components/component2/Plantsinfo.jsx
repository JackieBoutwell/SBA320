const Plantsinfo = (props, handleDelete) => { 
    // Adding props and delete button here
    const plants = props.plants;
 
    return(
        <div className="Plants-info">
            {plants.map((data) => (
                <div className="plant-preview" key={data.id}>
                    <h2> {data.common_name} </h2>
                    <h2> {data.scientific_name[0]}</h2>
                 {/* Shows Sunlight Guide if it has info if not will not show the user. */}
                    {data.sunlight.length > 0 && <p>Sunlight Guide  </p>}
                    
                    <p>Water Guide {data.watering}</p>

                    <img src={data.default_image.small_url}></img>
                    {/* Creating a Delete button */}
                    <button onClick={() => handleDelete(plants.id)}> Delete plant</button>
                </div>
            ))}
        </div>
    )
}

export default Plantsinfo;
