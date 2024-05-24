import { useState, useEffect, useReducer } from 'react';
import Plantsinfo from './component2/Plantsinfo';

const Home = () => {
    // // let name ='jackie';

    //BLOCKER - did not need UseState

    //const [apiData, setData] = useState({});
    
    //const [plants, setPlants] = useState([]);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'delete_plant':
                return { plants: state.plants.filter(plant => plant.id !== action.id) };
            case 'add_plants':
                return { plants: action.plants }
        }
    }

    const [state, dispatch] = useReducer(reducer, {});

    const getPlants = async () => {
        // Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
        const response = await fetch(
            `https://perenual.com/api/species-list?key=sk-wgYH664bba6e628725587`
            //`https://perenual.com/api/species/details/${searchTerm}?key=sk-wgYH664bba6e628725587`
        );
        const data = await response.json();

        // BLOCKER - BELOW I HAD TO HARD CODED MY DATA B/C I ONLY HAD A CURTAIN AMOUNT OF REQUESTS THAT I COULD TAKE FROM THE API I WAS USING

        //console.log(data.data.default_image.small_url);
        // const data = {
        //     "data": [
        //         {
        //             "id": 1,
        //             "common_name": "European Silver Fir",
        //             "scientific_name": [
        //                 "Abies alba"
        //             ],
        //             "other_name": [
        //                 "Common Silver Fir"
        //             ],
        //             "cycle": "Perennial",
        //             "watering": "Frequent",
        //             "sunlight": [],
        //             "default_image": {
        //                 "image_id": 9,
        //                 "license": 5,
        //                 "license_name": "Attribution-ShareAlike License",
        //                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
        //                 "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
        //                 "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
        //                 "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
        //                 "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
        //                 "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        //             }
        //         },
        //         {
        //             "id": 2,
        //             "common_name": "Pyramidalis Silver Fir",
        //             "scientific_name": [
        //                 "Abies alba 'Pyramidalis'"
        //             ],
        //             "cycle": "Perennial",
        //             "watering": "Frequent",
        //             "sunlight": [],
        //             "other_name": null,
        //             "default_image": {
        //                 "image_id": 9,
        //                 "license": 5,
        //                 "license_name": "Attribution-ShareAlike License",
        //                 "license_url": "https://creativecommons.org/licenses/by-sa/2.0/",
        //                 "original_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/og/49255769768_df55596553_b.jpg",
        //                 "regular_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
        //                 "medium_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/medium/49255769768_df55596553_b.jpg",
        //                 "small_url": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg",
        //                 "thumbnail": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/thumbnail/49255769768_df55596553_b.jpg"
        //             }
        //         }
        //     ],
        //     "to": 30,
        //     "per_page": 30,
        //     "current_page": 1,
        //     "from": 1,
        //     "last_page": 405,
        //     "total": 10104
        // };
        dispatch({
            type: 'add_plants',
            plants: data.data
        })
        //setPlants(data.data);
    };

    useEffect(() => {
        getPlants();
    }, []);

    const handleDelete = (id) => {
        dispatch({
            type: 'delete_plant',
            id: id
        })
        //DID NOT NEED
        // const newPlants = plants.filter(plant => plant.id !== id);
        // setPlants(newPlants);
    }
    //DID NOT NEED
    // const handClickAgain = (name) => {
    // console.log('hello' + name);
    // }
    
    return ( 
        <div className="home">
            <Plantsinfo plants={state.plants} handleDelete={handleDelete} />
            {/* <button onClick={() => {
                console.log ('test two')
            }}> ClickMeAgain</button> */}
        </div>
     );
}
 
export default Home;