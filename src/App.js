import {useEffect} from "react";

//api key
//51f6e886

const API_URL = 'http://www.omdbapi.com?apikey=51f6e886';


const App = () => {


    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();
        

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman');
    }, []);


    return (
        <h1>App</h1>
    );
}

export default App;

