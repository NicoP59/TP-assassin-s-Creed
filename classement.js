 
//  let tab = [ 'Ezio', 'Shay', 'Altaïr', 'Connor', 'Edward', 'Alexios', 'Cassandra', 'Bayek', 'Arno', 'Aveline', 'Eivor', 'Evie', 'Jacob'];
//   tab.sort();

//   console.log(tab);


const gameList = [

    {
        name: "Assassin's Creed 1",
        date: "2013",
        score: "19"
    },
    {
        name: "Assassin's Creed 2",
        date: "2014",
        score: "15"
    },
    {
        name: "Assassin's Creed 3",
        date: "2014",
        score: "13"
    },
    {
        name: "Assassin's Creed 4",
        date: "2014",
        score: "16"
    },
    {
        name: "Assassin's Creed 5",
        date: "2014",
        score: "14"
    },
    {
        name: "Assassin's Creed 6",
        date: "2014",
        score: "17"
    },
   
];

function addGame(game){
    const newGame = document.createElement('div');
    newGame.classList.add('game');

    const newGameName = document.createElement('p');
    newGameName.classList.add('gameName');
    newGameName.innerHTML = 
    newGame.appendChild(newGameName);

    const newGameDate = document.createElement('p');
    newGameName.classList.add('gameDate');
    newGameName.innerHTML = 
    newGame.appendChild(newGameDate);

    const newGameScore = document.createElement('p')
    newGameScore.classList.add('gameScore');
    newGameScore.innerHTML =
    newGame.appendChild(newGameScore);

    for(let i = 0; i < gameList.length; i++) {
        addGame(gameList[i]);
    }


}


 






