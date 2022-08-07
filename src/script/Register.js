import { idGenerator, saveUser, loadInitalState, UserClass } from "./Global.js";
loadInitalState();
const api = axios.create({
  baseURL: "https://api.countrystatecity.in/v1/",
  headers: {
    "X-CSCAPI-KEY": "cElxVFJvNkJRemdtTEVTZEVUR1F0MEU4V01jd0tiamlKalZrcXZZdQ==",
  },
});
function inputUserInfoValidator() {
  const userName = userNameInput.value;
  const userPassword = userPasswordInput.value;
  const userConfirmPassword = userConfirmPasswordInput.value;
  const userAge = userAgeInput.value;
  if (
    userName === "" ||
    userPassword === "" ||
    userConfirmPassword === "" ||
    userAge === ""
  ) {
  } else {
    // alert("Todos los campos son obligatorios");
    localidad.classList.toggle("local-active");
    userInfoContainer.style.display = "none";
    userLocationContainer.style.display = "block";
    localidad.addEventListener("click", () => {
      localidad.classList.toggle("local-active");
      userInfoContainer.style.display = "none";
      userLocationContainer.style.display = "block";
    });
  }
}
function checkPassword() {
  if (userPasswordInput.value !== userConfirmPasswordInput.value) {
    passFail.classList.add("visible");
    userNameInput.disabled = true;
    userAgeInput.disabled = true;
  } else {
    passFail.classList.remove("visible");
    userNameInput.disabled = false;
    userAgeInput.disabled = false;
    inputUserInfoValidator();
  }
}
userConfirmPasswordInput.addEventListener("change", checkPassword);
userAgeInput.addEventListener("change", inputUserInfoValidator);
userNameInput.addEventListener("change", function (e) {
  const userName = e.target.value;
  const userNameNoSpaces = userName.replace(/\s/g, "").toLowerCase();
  const usersNames = JSON.parse(localStorage.getItem("users")).map((e) => {
    return e.userName.replace(/\s/g, "").toLowerCase();
  });
  console.log(usersNames);
  if (usersNames.includes(userNameNoSpaces)) {
    userFail.style.display = "block";
    userPasswordInput.disabled = true;
    userConfirmPasswordInput.disabled = true;
    userAgeInput.disabled = true;
  } else {
    userFail.style.display = "none";
    userPasswordInput.disabled = false;
    userConfirmPasswordInput.disabled = false;
    userAgeInput.disabled = false;
    inputUserInfoValidator();
  }
});
perfil.addEventListener("click", () => {
  localidad.classList.toggle("local-active");
  userInfoContainer.style.display = "block";
  userLocationContainer.style.display = "none";
});
btnRegister.addEventListener("click", () => {
  const userName = userNameInput.value;
  const userPassword = userPasswordInput.value;
  const userConfirmPassword = userConfirmPasswordInput.value;
  const userAge = userAgeInput.value;
  const userCountry = selectedCountry.innerHTML;
  const userState = selectedState.innerHTML;
  const userCity = selectedCity.innerHTML;
  if (
    userName === "" ||
    userPassword === "" ||
    userConfirmPassword === "" ||
    userAge === "" ||
    userCountry === "" ||
    userState === "" ||
    userCity === ""
  ) {
    alert("Todos los campos son obligatorios");
  } else if (userPassword === userConfirmPassword) {
    // const user = {
    //   id: idGenerator(),
    //   name: userName,
    //   password: userPassword,
    //   age: userAge,
    //   userLocation: {
    //     country: userCountry,
    //     state: userState,
    //     city: userCity,
    //   },
    //   userResults: {
    //     cleanRooms: "0",
    //     powerUps: "0",
    //     energies: "0",
    //   },
    // };
    const user = new UserClass({
      userName: userName,
      userPasword: userPassword,
      userAge: userAge,
      userCountry: userCountry,
      userState: userState,
      userCity: userCity,
    });
    saveUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    // alert("Registro exitoso");
    window.location.href = "/src/index.html";
  }
});
//COUNTRIES
selectedCountry.addEventListener("click", () => {
  optionsContainerCountries.classList.toggle("active");
  searchBoxCountries.classList.toggle("visible");
  searchBoxCountries.value = "";
  if (optionsContainerCountries.classList.contains("active")) {
    document.querySelector(".inputSearch").focus();
  }
});
function renderItems(data, optionsContainer, selectedItem, searchBox, method) {
  const items = data
    .map((e) => {
      return `<div class="option" id="${e.iso2}">
                 <input type="radio" class="radio" />
                 <label for="film">${e.name}</label>
            </div>`;
    })
    .join("");
  optionsContainer.innerHTML = items;
  const optionsList = document.querySelectorAll(".option");
  if (selectedItem.innerHTML === "") {
    location.hash = "";
  }
  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      searchBox.classList.toggle("visible");
      selectedItem.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");

      location.hash = o.getAttribute("id");
      method();
    });
  });
  searchBox.addEventListener("keyup", function (e) {
    const searchItem = e.target.value;
    const searchCountry = searchItem.toLowerCase();
    optionsList.forEach((option) => {
      let label =
        option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchCountry) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });
}
async function getCountries() {
  const { data, status } = await api("countries");
  // console.log("api", data);
  renderItems(
    data,
    optionsContainerCountries,
    selectedCountry,
    searchBoxCountries,
    getStates
  );
}
getCountries();
//STATES
selectedState.addEventListener("click", () => {
  optionsContainerStates.classList.toggle("active");
  searchBoxStates.classList.toggle("visible");
  searchBoxStates.value = "";
  if (optionsContainerStates.classList.contains("active")) {
    document.querySelector(".inputSearchStates").focus();
  }
});
async function getStates() {
  if (location.hash.length > 2) {
    modalLoading.style.display = "block";
    selectedCity.innerHTML = "";
    const { data, stauts } = await api(
      `countries/${location.hash.slice(1)}/states`
    );
    modalLoading.style.display = "none";
    if (data.length === 0) {
      selectedState.innerHTML = "No se encontro ningun departamento";
    } else {
      selectedState.innerHTML = "";
    }

    const states = data
      .map((e) => {
        return `<div class="option opState" id="${e.iso2}">
                 <input type="radio" class="radio" />
                 <label for="film">${e.name}</label>
            </div>`;
      })
      .join("");
    optionsContainerStates.innerHTML = states;
    const optionsList = document.querySelectorAll(".opState");

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        searchBoxStates.classList.toggle("visible");
        selectedState.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerStates.classList.remove("active");

        location.hash = `${location.hash}-${o.getAttribute("id")}`;
        getCities();
      });
    });
    searchBoxStates.addEventListener("keyup", function (e) {
      const searchItem = e.target.value;
      const searchCountry = searchItem.toLowerCase();
      optionsList.forEach((option) => {
        let label =
          option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchCountry) != -1) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      });
    });
  }
}
//CITIES
selectedCity.addEventListener("click", () => {
  optionsContainerCities.classList.toggle("active");
  searchBoxCities.classList.toggle("visible");
  searchBoxCities.value = "";
  if (optionsContainerCities.classList.contains("active")) {
    document.querySelector(".inputSearchCities").focus();
  }
});
async function getCities() {
  if (location.hash.length > 2) {
    const [country, state] = location.hash.slice(1).split("-");
    modalLoading.style.display = "block";
    const { data, stauts } = await api(
      `countries/${country}/states/${state}/cities`
    );
    modalLoading.style.display = "none";
    if (data.length === 0) {
      selectedCity.innerHTML = "No se encontro ningun municipio";
    } else {
      selectedCity.innerHTML = "";
    }

    const states = data
      .map((e) => {
        return `<div class="option opCity" id="${e.iso2}">
                 <input type="radio" class="radio" />
                 <label for="film">${e.name}</label>
            </div>`;
      })
      .join("");
    optionsContainerCities.innerHTML = states;
    const optionsList = document.querySelectorAll(".opCity");

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        searchBoxCities.classList.toggle("visible");
        selectedCity.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerCities.classList.remove("active");

        location.hash = `${location.hash}-${o.getAttribute("id")}`;
        // method();
      });
    });
    searchBoxCities.addEventListener("keyup", function (e) {
      const searchItem = e.target.value;
      const searchCountry = searchItem.toLowerCase();
      optionsList.forEach((option) => {
        let label =
          option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchCountry) != -1) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      });
    });
  }
}
