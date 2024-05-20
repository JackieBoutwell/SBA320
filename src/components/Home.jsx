import { useState } from 'react';

const Home = () => {
    // let name ='jackie';
    const [name, setName] = useState('my name is ');

    const handleClick = () => {
        setName('jackie');
    }
    // const handClickAgain = (name) => {
    // console.log('hello' + name);
    // }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} </p>
            <button onClick={handleClick}> ClickMe</button>

            {/* <button onClick={() => {
                console.log ('test two')
            }}> ClickMeAgain</button> */}
        </div>
     );
}
 
export default Home;