import { loadInitalState, writeLocalStorage, isLogged } from "./Global.js";
loadInitalState();
function login() {
  const users = JSON.parse(localStorage.getItem("users"));
  const newUsers = JSON.parse(localStorage.getItem("newUsers"));
  const userName = inputUserName.value;
  const userPassword = inputUserPassword.value;
  const userQuery = users.find((e) => {
    return e.userName === userName && e.userPassword === userPassword;
  });
  const newUserQuery = newUsers.find((e) => {
    return e.userName === userName && e.userPassword === userPassword;
  });
  if (userQuery) {
    // console.log("SE ECONTRO", userQuery);
    writeLocalStorage("userIN", JSON.stringify(userQuery.id));
    window.location.href = "/src/pages/gameUser.html";
  } else if (newUserQuery) {
    // console.log("SE ECONTRO", newUserQuery);
    writeLocalStorage("userIN", JSON.stringify(newUserQuery.id));
    window.location.href = "/src/pages/gameUser.html";
  } else {
    alert("NO SE ECONTRO");
  }
}
btnLogin.addEventListener("click", login);
if (isLogged()) {
  window.location.href = "/src/pages/gameUser.html";
}
