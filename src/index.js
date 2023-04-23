// !-----------------------------------!

// import './css/styles.css';
// import CountriesApiService from './js/fetchCountries'; 
// import Notiflix from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css";
// import debounce from 'lodash.debounce';

// window.onload = () => document.querySelector('#search-box').focus();

// const DEBOUNCE_DELAY = 300;
// const searchBox = document.querySelector("#search-box");
// const countryList = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");
// let markup ="";

// const countriesApiService = new CountriesApiService();
// searchBox.addEventListener("input", debounce(getRequestedCountry, DEBOUNCE_DELAY));

// function getRequestedCountry(e){
//     countriesApiService.countryName = e.target.value.trim();
//     console.log(countriesApiService.countryName);
//     if(countriesApiService.countryName===""){
//     clearCountries();
//         return;
//     }
//     countriesApiService.fetchCountries().then(renderCountriesList);
// }

// function clearCountries(){
//     countryList.innerHTML="";
//     countryInfo.innerHTML="";
// }
// function renderCountriesList(countries){
//     if (countries===undefined){
//         clearCountries();
//     return;
//     }
//     else if (countries.length>10){
//         clearCountries();
//         Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//         return;
//     }else if(countries.length===1){
//         markup = countries.map(({capital, flags: {png, svg, alt}, languages, name: {official}, population})=>{
//             return  `<li ><img src=${svg} width="40" alt=${alt}></img><h1>${official}</h1><h3>Capital: <span>${capital}</span></h3><h3>Population: <span>${population}</span></h3><h3>languages: <span>${Object.values(languages).join(", ")}</span></h3></li>`;
//         }).join("");
//         countryInfo.innerHTML=markup;
//         countryList.innerHTML="";
//     }else{
//     markup = countries.map(({capital, flags: {png, svg, alt}, languages, name: {official}, population})=>{
//     return `<li class="country-element"><img src=${svg} width="40" alt=${alt}></img><h2>${official}</h2></li>`;
// }).join("");
// countryList.innerHTML=markup;
// countryInfo.innerHTML="";}
// }

// !-----------------------------------!1111111111111

// !-----------------------------------!2222222222222

import './css/styles.css';
import debounce from 'lodash.debounce';
import {ApiRestCountries} from './js/fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
let markup='';

const apiRestCountries = new ApiRestCountries;

searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  apiRestCountries.query = e.target.value.trim();
  console.log(apiRestCountries.query);
  apiRestCountries.fetchCountries().then(renderMarkup);

  if(apiRestCountries.query === '') {
    clearCountries();
    return;
  }
}

function clearCountries() {
  countryList.innerHTML='';
  countryInfo.innerHTML='';
}

function renderMarkup(countries) {
    if(countries === undefined) {
    clearCountries();
    return;
    } else if(countries.length>10) {
    clearCountries();
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  } else if(countries.length === 1) {
    markup = countries.map((country) => {return `
    <li>
      <img src=${country.flags.svg} alt=${country.flags.alt} width = '30'><h1>${country.name.official}</h1>
      <p><span>Capital:</span>${country.capital}</p>
      <p><span>Population:</span>${country.population}</p>
      <p><span>Languages:</span>${country.languages}</p>
    </li>
    `}).join('');
    countryList.innerHTML = '';
    countryInfo.innerHTML = markup;
  } else {
    markup = countries.map((country) => {return `
    <li>
      <img src=${country.flags.svg} alt=${country.flags.alt} width = '30'><p>${country.name.official}</p>
    </li>
    `}).join('');
    countryList.innerHTML = markup;
    countryInfo.innerHTML = '';
  }
  } 

// !-----------------------------------!22222222222222












