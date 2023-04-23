// !-----------------------------------!

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

export default class CountriesApiService {
    constructor(){
        this.searchCountry = "";
    }
    
    fetchCountries(){
        const url = `https://restcountries.com/v3.1/name/${this.searchCountry}?fields=name,capital,population,flags,languages`;

       return fetch(url)
        .then(response =>{
                if (!response.ok){
                    throw new Error(response.status);
                    return;
                }
                return response.json();
            })
            .then(data=>{
                console.log(data);
                return data
            })
            .catch((error)=>Notiflix.Notify.failure("Oops, there is no country with that name"));
        }

    get countryName(){
        return this.searchCountry;
    }

    set countryName(newCountryName){
        this.searchCountry = newCountryName;
    }
    }

// !-----------------------------------!111111111111111

// !-----------------------------------!222222222222222


// import Notiflix from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css";

// class ApiRestCountries {
//     constructor() {
//         this.searchQuery = '';
//     }

//     fetchCountries() {
//         const url = 'https://restcountries.com/v3.1/name/';
//         return fetch(`${url}${this.searchQuery}?fields=name,capital,population,flags,languages`)
//         .then(response => {
//             if(!response.ok) {throw new Error(response.status);
//             return}
//             return response.json()})
//         .then(data => {console.log(data); return data})
//         .catch((error) => Notiflix.Notify.failure('Oops, there is no country with that name'))
//     };

//     get query() {
//         return this.searchQuery='';
//     }

//     set query(newQuery) {
//         this.searchQuery=newQuery;
//     }
// }

// export {ApiRestCountries};

// !-----------------------------------!2222222222222222