const initialState = [
  {
    id: 1,
    userName: "Jhon",
    userPasword: "852",
    userAge: "21",
    userLocation: {
      country: "Colombia",
      state: "Cundinamarca",
      city: "Bogota",
    },
    userResults: {
      cleanRooms: "10",
      powerUps: "15",
      energies: "20",
    },
  },
  {
    id: 2,
    userName: "Juan",
    userPasword: "elmejorXD",
    userAge: "21",
    userLocation: {
      country: "Colombia",
      state: "Cundinamarca",
      city: "Bogota",
    },
    userResults: {
      cleanRooms: "15",
      powerUps: "10",
      energies: "25",
    },
  },
  {
    id: 3,
    userName: "David",
    userPasword: "741963",
    userAge: "17",
    userLocation: {
      country: "Argentina",
      state: "Buenos Aires",
      city: "Cordoba",
    },
    userResults: {
      cleanRooms: "20",
      powerUps: "25",
      energies: "30",
    },
  },
  {
    id: 4,
    userName: "TenchiX",
    userPasword: "852123",
    userAge: "18",
    userLocation: {
      country: "Japan",
      state: "Tokyo",
      city: "Shinjuku",
    },
    userResults: {
      cleanRooms: "30",
      powerUps: "25",
      energies: "38",
    },
  },
  {
    id: 5,
    userName: "Carlos",
    userPasword: "963321",
    userAge: "16",
    userLocation: {
      country: "Bolvia",
      state: "La paz",
      city: "Achacachi",
    },
    userResults: {
      cleanRooms: "10",
      powerUps: "10",
      energies: "20",
    },
  },
];
const initialStateSession = [];
const readLocalStorage = (key) => {
  return localStorage.getItem(key);
};
const writeLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const idGenerator = () => {
  return Math.floor(Math.random() * 1000);
};
export const saveUser = (user) => {
  const users = JSON.parse(readLocalStorage("users"));
  users.push(user);
  writeLocalStorage("users", JSON.stringify(users));
};
export const loadInitalState = () => {
  writeLocalStorage("users", JSON.stringify(initialState));
};
