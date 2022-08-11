import { loadInitalState, writeLocalStorage, isLogged } from "./Global.js";
loadInitalState();
const users = JSON.parse(localStorage.getItem("users"));
const newUsers = JSON.parse(localStorage.getItem("newUsers"));
const allUsers = [...users, ...newUsers];
function login() {
  const userName = inputUserName.value;
  const userPassword = inputUserPassword.value;
  const userQuery = allUsers.find((e) => {
    return e.userName === userName && e.userPassword === userPassword;
  });
  console.log(userQuery);
  console.log(allUsers.map((e) => e.userName).includes(userName));
  if (allUsers.map((e) => e.userName).includes(userName)) {
    if (userQuery) {
      writeLocalStorage("userIN", JSON.stringify(userQuery.id));
      userFail.style.display = "none";
      passFail.style.display = "none";
      labelUser.style.border = "none";
      labelPass.style.border = "none";
      window.location.href = "../pages/gameUser.html";
    } else {
      passFail.innerHTML = "Contraseña incorrecta";
      // userFail.style.display = "block";
      passFail.style.display = "block";
      labelPass.style.border = "1px solid red";
    }
  } else if (userName === "" && userPassword === "") {
    userFail.innerHTML = "Introduce tu usuario";
    userFail.style.display = "block";
    labelUser.style.border = "1px solid red";
    passFail.innerHTML = "Introduce tu contraseña";
    passFail.style.display = "block";
    labelPass.style.border = "1px solid red";
  } else if (userName === "") {
    userFail.innerHTML = "Introduce tu usuario";
    userFail.style.display = "block";
    labelUser.style.border = "1px solid red";
  } else {
    userFail.innerHTML = "Usuario no registrado";
    userFail.style.display = "block";
    labelUser.style.border = "1px solid red";
    labelPass.style.border = "none";
  }
}
inputUserName.addEventListener("change", (e) => {
  if (allUsers.map((e) => e.userName).includes(e.target.value)) {
    console.log("si");
    userFail.style.display = "none";
    labelUser.style.border = "none";
  } else {
    console.log("valor", e.target.value);
    userFail.innerHTML = "Usuario no registrado";
    userFail.style.display = "block";
    labelUser.style.border = "1px solid red";
  }
});
eyePass.addEventListener("click", () => {
  if (inputUserPassword.type == "password") {
    inputUserPassword.type = "text";
    eyePass.classList.toggle("fa-eye-slash");
  } else {
    inputUserPassword.type = "password";
    eyePass.classList.toggle("fa-eye-slash");
  }
});
inputUserPassword.addEventListener("keyup", (e) => {
  // console.log("keyup", e.keyCode);
  if (e.keyCode === 13) {
    login();
  }
}),
  btnLogin.addEventListener("click", login);

if (isLogged()) {
  window.location.href = "../pages/gameUser.html";
}
