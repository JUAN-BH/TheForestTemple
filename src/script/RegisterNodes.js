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
const confirmPasswordLabel = $(".confirmPasswordLabel");
const userFail = $(".userFail");
const passFail = $(".passFail");
const allUserInfoInputs = $$(".userInfoInput");

const checkUserName = $(".checkUser");
const wrongUserName = $(".wrongUser");
const checkPasswordEl = $(".checkPass");
const wrongPassword = $(".wrongPass");
const checkPasswordC = $(".checkPassC");
const wrongPasswordC = $(".wrongPassC");
const checkAge = $(".checkAge");
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
//MODAL EVENTS
const modalLoading = $(".modalContainer");
