import { logout, isLogged } from "./Global.js";
const $ = (element) => document.querySelector(element);
const btnPlay = $(".btn--play");
const btnStats = $(".btn--stats");
const btnLogout = $(".btn--logOut");
const modalLogOut = $(".modalLogOut");
const modalContentLogOut = $(".modalContainer__LogOut");
const btnConfirmLogOut = $(".btn--confirmLogOut");
const btnCancelLogOut = $(".btn--cancelLogOut");
console.log(btnLogout);
btnLogout.addEventListener("click", () => {
  console.log("click");
  modalLogOut.style.display = "block";
});
btnConfirmLogOut.addEventListener("click", logout);
btnCancelLogOut.addEventListener("click", () => {
  modalLogOut.style.display = "none";
});
btnStats.addEventListener("click", () => {
  window.location.href = "/src/pages/estadisticas.html";
});

if (!isLogged()) {
  window.location.href = "/src/index.html";
}
