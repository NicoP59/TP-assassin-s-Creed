//  let tab = [ 'Ezio', 'Shay', 'Altaïr', 'Connor', 'Edward', 'Alexios', 'Cassandra', 'Bayek', 'Arno', 'Aveline', 'Eivor', 'Evie', 'Jacob'];
//   tab.sort();

//   console.log(tab);

// const gameList = [

//     {
//         name: "Assassin's Creed 1",
//         date: "2013",
//         score: "19"
//     },
//     {
//         name: "Assassin's Creed 2",
//         date: "2014",
//         score: "15"
//     },
//     {
//         name: "Assassin's Creed 3",
//         date: "2014",
//         score: "13"
//     },
//     {
//         name: "Assassin's Creed 4",
//         date: "2014",
//         score: "16"
//     },
//     {
//         name: "Assassin's Creed 5",
//         date: "2014",
//         score: "14"
//     },
//     {
//         name: "Assassin's Creed 6",
//         date: "2014",
//         score: "17"
//     },

// ];

// function addGame(game){
//     const newGame = document.createElement('div');
//     newGame.classList.add('game');

//     const newGameName = document.createElement('p');
//     newGameName.classList.add('gameName');
//     newGameName.innerHTML =
//     newGame.appendChild(newGameName);

//     const newGameDate = document.createElement('p');
//     newGameName.classList.add('gameDate');
//     newGameName.innerHTML =
//     newGame.appendChild(newGameDate);

//     const newGameScore = document.createElement('p')
//     newGameScore.classList.add('gameScore');
//     newGameScore.innerHTML =
//     newGame.appendChild(newGameScore);

//     for(let i = 0; i < gameList.length; i++) {
//         addGame(gameList[i]);
//     }

// }

let classement = [
  " Assassin's Creed",
  "Assassin's Creed II",
  "Assassin's Creed Brotherhood",
  "Assassin's Creed Revelations",
  "Assassin's Creed III",
  "Assassin's Creed III Liberation",
  "Assassin's Creed IV Black Flag",
  "Assassin's Creed Rogue",
  "Assassin's Creed Unity",
  "Assassin's Creed Syndicate",
  "Assassin's Creed Origins",
  "Assassin's Creed Odyssey",
  "Assassin's Creed Valhalla",
];

console.log(classement);

function addUserInfo() {
  let userAdd = document.getElementById("userInput").value;
  if (userAdd != "") {
    classement.push(userAdd);
    showUserInfo();
  }
}

function showUserInfo() {
  let showInfo = "";
  let counter = 0;
  // A modifié voir avec jessy
  for (let i = 0; i < classement.length; i++) {
    showInfo += `
            <li class="list-group">
                <p class="display">${
                  classement[i]
                }<span class="float-right"><button value="${counter++}" onClick="removeName(this)"  class="btn-danger">X</button></span></p>
            </li> `;
  }
  document.getElementById("display").innerHTML = showInfo;
  document.getElementById("userInput").value = null;
}

//fonction bouton de suppression du tableau.
function removeName(e) {
  classement.splice(parseInt(e.value), 1);
  showUserInfo();
}
