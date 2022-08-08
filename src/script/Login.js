const users = JSON.parse(localStorage.getItem("users"));
btnLogin.addEventListener("click", () => {
  const userName = inputUserName.value;
  const userPassword = inputUserPassword.value;
  const userQuery = users.find((e) => {
    return e.userName === userName && e.userPassword === userPassword;
  });
  if (userQuery) {
    console.log("SE ECONTRO", userQuery);
    location.hash = `${userQuery.id}`;
    sessionStorage.setItem("userIN", JSON.stringify(userQuery.id));
    window.location.href = "/src/pages/gameUser.html";
  } else {
    console.log("NO SE ECONTRO");
  }
});
