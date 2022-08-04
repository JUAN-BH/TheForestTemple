const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);
//NAV MENU
const perfil = $(".perfil");
const localidad = $(".localidad");
//FORM USER INFO
const userInfoContainer = $(".userInfo__info");
const userNameInput = $("#userName");
const userPasswordInput = $("#userPassword");
const userConfirmPasswordInput = $("#confirmPassword");
const userAgeInput = $("#userAge");
//FORM USER LOCATION
const userLocationContainer = $(".userInfo__location");
const btnRegister = $(".btn--registrar");
//COUNTRIES
const selectedCountry = $(".selectedCountry");
const optionsContainerCountries = $(".optionsCountries");
const searchBoxCountries = $(".searchCountry");
//States
const selectedState = $(".selectedState");
const optionsContainerStates = $(".optionsStates");
const searchBoxStates = $(".searchState");
//cities
const selectedCity = $(".selectedCity");
const optionsContainerCities = $(".optionsCities");
const searchBoxCities = $(".searchCity");
