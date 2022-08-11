import { isLogged } from "./Global.js";
const $ = (element) => document.querySelector(element);
const btnBack = $(".arrowback");
const select = $(".select");
if (!isLogged()) {
  window.location.href = "../index.html";
}
btnBack.addEventListener("click", () => {
  window.location.href = "../pages/gameUser.html";
});
const idUserIn = JSON.parse(localStorage.getItem("userIN"));
const localUsers = JSON.parse(localStorage.getItem("users"));
const NewUsers = JSON.parse(localStorage.getItem("newUsers"));
const allUsers = [...localUsers, ...NewUsers];
function getData() {
  console.log("allUsers", allUsers);
  const user = allUsers.find((e) => {
    return e.id === idUserIn;
  });
  console.log("user", user);
  return user.matches.map((e) => e.match);
}
console.log("data extraida", getData());
//----------------------------------------------------------------------------------------------//
// const data = [
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 5,
//     powerUpsRecogidos: 25,
//     fecha: "Sat Aug 06 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 1,
//     powerUpsRecogidos: 5,
//     fecha: "Sat Aug 07 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 20,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
//   {
//     energiasRecogidas: 23,
//     salasLimpiadas: 12,
//     powerUpsRecogidos: 35,
//     fecha: "Sat Aug 08 2022 11:55:09 GMT-0500",
//   },
// ];
const data = getData();
const dataSet = {
  cleanRooms: {
    backgroundColor: "#0983AF",
    label: "Salas Limpiadas",
    data: [],
    hidden: false,
  },
  powerUps: {
    backgroundColor: "#46BC8B",
    label: "Power Ups recogidos",
    data: [],
    hidden: false,
  },
  energies: {
    backgroundColor: "#951F5F",
    label: "Energias recogidas",
    data: [],
    hidden: false,
  },
};

const chartElement = document.getElementById("myChart");
const myChart = new Chart(chartElement, {
  type: "bar",
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    borderRadius: 3,
  },
});

const getDataSet = (show) => {
  console.log("show", show);
  console.log("KEYS DATASET", Object.keys(dataSet));
  let games = [];
  data.map((game, i) => {
    dataSet.energies.data.push(game.energies);
    dataSet.powerUps.data.push(game.powerUps);
    dataSet.cleanRooms.data.push(game.cleanRooms);
    games.push((i + 1).toString());
  });
  myChart.data.datasets = Object.values(dataSet);
  myChart.data.labels = games;
  myChart.update();
  if (show === "indicadores") {
    dataSet.powerUps.hidden = false;
    dataSet.cleanRooms.hidden = false;
    dataSet.energies.hidden = false;
    myChart.update();
  } else if (show === "salasLimpiadas") {
    dataSet.powerUps.hidden = true;
    dataSet.cleanRooms.hidden = false;
    dataSet.energies.hidden = true;
    myChart.update();
  } else if (show === "powerUpsRecogidos") {
    dataSet.powerUps.hidden = false;
    dataSet.cleanRooms.hidden = true;
    dataSet.energies.hidden = true;
    myChart.update();
  } else if (show === "energiasRecogidas") {
    dataSet.powerUps.hidden = true;
    dataSet.cleanRooms.hidden = true;
    dataSet.energies.hidden = false;
    myChart.update();
  }
};

getDataSet();

// const handleInputChange = (e) => {
//   return getDataSet(e.value);
// };
select.addEventListener("change", (e) => {
  getDataSet(e.target.value);
  //   getDataSet(e.value);
});

const getBestScore = () => {
  let maxRoomsCleans = data
    .map((e) => parseInt(e.cleanRooms))
    .reduce((a, b) => (a > b ? a : b));

  let maxPowerUps = data
    .map((e) => parseInt(e.powerUps))
    .reduce((a, b) => (a > b ? a : b));
  let maxEnergy = data
    .map((e) => parseInt(e.energies))
    .reduce((a, b) => (a > b ? a : b));
  //   data.map((s, index) => {
  //     if (s.cleanRooms > maxRoomsCleans) {
  //       maxRoomsCleans = s.cleanRooms;
  //     }

  //     maxPowerUps = s.powerUps > maxPowerUps ? s.powerUps : maxPowerUps;
  //     maxEnergy = s.energies > maxEnergy ? s.energies : maxEnergy;
  //   });

  //   console.log("maxRoomsCleans", maxRoomsCleans);
  //   console.log("maxPowerUps", maxPowerUps);
  //   console.log("maxEnergy", maxEnergy);

  const roomElement = document.getElementById("roomsClean");
  roomElement.innerHTML = maxRoomsCleans;
  const powerElement = document.getElementById("powerUps");
  powerElement.innerHTML = maxPowerUps;
  const energyElement = document.getElementById("energy");
  energyElement.innerHTML = maxEnergy;
};
getBestScore();
