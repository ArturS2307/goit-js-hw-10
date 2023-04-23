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












