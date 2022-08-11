export const idGenerator = () => {
  return Math.floor(Math.random() * 1000);
};
class MatchResults {
  constructor({ cleanRooms = "0", powerUps = "0", energies = "0" } = {}) {
    this.match = {
      cleanRooms: cleanRooms,
      powerUps: powerUps,
      energies: energies,
    };
  }
}
const match1 = new MatchResults({
  cleanRooms: "10",
  powerUps: "15",
  energies: "20",
});
const match2 = new MatchResults({
  cleanRooms: "5",
  powerUps: "10",
  energies: "15",
});
const match3 = new MatchResults({
  cleanRooms: "2",
  powerUps: "1",
  energies: "3",
});
const match4 = new MatchResults({
  cleanRooms: "5",
  powerUps: "2",
  energies: "7",
});
const match5 = new MatchResults({
  cleanRooms: "4",
  powerUps: "4",
  energies: "5",
});
const match6 = new MatchResults({
  cleanRooms: "5",
  powerUps: "6",
  energies: "6",
});
const match7 = new MatchResults({
  cleanRooms: "6",
  powerUps: "6",
  energies: "10",
});
const match8 = new MatchResults({
  cleanRooms: "7",
  powerUps: "5",
  energies: "8",
});
const match9 = new MatchResults({
  cleanRooms: "2",
  powerUps: "6",
  energies: "5",
});
const match10 = new MatchResults({
  cleanRooms: "5",
  powerUps: "5",
  energies: "10",
});
export class UserClass {
  constructor({
    id = idGenerator(),
    userName,
    userPassword,
    userAge,
    userCountry,
    userState,
    userCity,
    matches = [],
  } = {}) {
    this.id = id;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userAge = userAge;
    this.userLocation = {
      userCountry,
      userState,
      userCity,
    };
    this.matches = matches;
  }
}
const jhon = new UserClass({
  id: 721,
  userName: "Jhon",
  userPassword: "852",
  userAge: "21",
  userCountry: "Colombia",
  userState: "Cundinamarca",
  userCity: "Bogota",
  matches: [match1, match2, match3, match4, match5, match6, match7, match8],
});
const juan = new UserClass({
  id: 338,
  userName: "Juan",
  userPassword: "elmejorXD",
  userAge: "21",
  userCountry: "Colombia",
  userState: "Valle del Cauca",
  userCity: "Cali",
  matches: [match9, match10],
});
const david = new UserClass({
  id: 689,
  userName: "David",
  userPassword: "123",
  userAge: "17",
  userCountry: "Argentina",
  userState: "Buenos Aires",
  userCity: "Cordoba",
  matches: [
    match3,
    match2,
    match6,
    match4,
    match7,
    match1,
    match1,
    match8,
    match9,
  ],
});
const tenchi = new UserClass({
  id: 613,
  userName: "TenchiX",
  userPassword: "852123",
  userAge: "18",
  userCountry: "Japan",
  userState: "Tokyo",
  userCity: "Tokyo",
  matches: [
    match1,
    match2,
    match3,
    match4,
    match5,
    match6,
    match7,
    match8,
    match9,
    match10,
  ],
});
const julis = new UserClass({
  id: 420,
  userName: "Julis",
  userPassword: "852123",
  userAge: "13",
  userCountry: "Ecuador",
  userState: "Guayas",
  userCity: "Guayaquil",
  matches: [match6, match7, match8, match9, match10],
});
//LOCALSTORAGE
const initialState = [jhon, juan, david, tenchi, julis];
export const readLocalStorage = (key) => {
  return localStorage.getItem(key);
};
export const writeLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const loadInitalState = () => {
  writeLocalStorage("users", JSON.stringify(initialState));
};
function savedUsers() {
  const savedUsers = JSON.parse(readLocalStorage("newUsers"));
  let users;
  let initialStateSession = [];
  if (savedUsers) {
    users = savedUsers;
  } else {
    users = initialStateSession;
  }
  return users;
}
export const saveUser = (newUser) => {
  const users = savedUsers();
  // newUser = JSON.parse(readSessionStorage("newUser"));
  users.push(newUser);
  writeLocalStorage("newUsers", JSON.stringify(users));
};
//isLOGGED? && LOGOUT
export function isLogged() {
  const userIN = JSON.parse(readLocalStorage("userIN"));
  if (userIN) {
    return true;
  } else {
    // logout();
    return false;
  }
}
export function logout() {
  localStorage.removeItem("userIN");
  window.location.href = "../index.html";
}
