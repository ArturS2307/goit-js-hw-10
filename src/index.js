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
    markup = countries.map(({flags, name, capital, population, languages}) => {return `
    <li>
      <div class='flex'>
      <img src=${flags.svg} alt=${flags.alt} width = '40' height = '30'>
      <h1>${name.official}</h1></div>
      <p><span class='bold'>Capital: </span>${capital}</p>
      <p><span class='bold'>Population: </span>${population}</p>
      <p><span class='bold'>Languages: </span>${Object.values(languages).join(", ")}</p>
    </li>`;
  }).join('');
    countryList.innerHTML = '';
    countryInfo.innerHTML = markup;
  } else {
    markup = countries.map(({flags, name}) => {return `
    <li>
    <div class='flex'>
      <img src=${flags.svg} alt=${flags.alt} width = '40' height = '30'><p>${name.official}</p>
    </div>
    </li>
    `}).join('');
    countryList.innerHTML = markup;
    countryInfo.innerHTML = '';
  }
  } 

// !-----------------------------------!22222222222222












