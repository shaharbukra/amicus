import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.co/api/'
});

// people/?format=json
/*
    "people": "https://swapi.co/api/people/", 
    "planets": "https://swapi.co/api/planets/", 
    "films": "https://swapi.co/api/films/", 
    "species": "https://swapi.co/api/species/", 
    "vehicles": "https://swapi.co/api/vehicles/", 
    "starships": "https://swapi.co/api/starships/"
 */
export default instance;