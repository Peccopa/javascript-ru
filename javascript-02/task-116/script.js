const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Kroos'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};
// Let's get on with our soccer betting app ⚽💰!
// Continue using the previously used game variable.
// 1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
game.scored.map((value, index) => console.log(`Goal ${index + 1} - ${value}`));
// 2. Use a loop to calculate the average odd and print it to the console
const oddsValues = Object.values(game.odds);
console.log(oddsValues.reduce((acc, value) => acc + value) / oddsValues.length);
// 3. Print 3 odds to the console, but formatted, exactly like this:
// Rate for REAL MADRID victory: 1.48
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25
// Get team names directly from the game object, don't hardcode them
console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
console.log(`Rate for draw: ${game.odds.draw}`);
console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);
// 4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//       {
//         Kroos: 1,
//         Benzema: 1,
//         Mingueza: 1
// }

// const goalScorers = game.scored.reduce((acc, value) => {
//   acc[value] = game.scored.filter((v) => value === v).length;
//   return acc;
// }, {});

const goalScorers = game.scored.reduce((acc, value) => {
  !acc[value] ? (acc[value] = 1) : (acc[value] += 1);
  return acc;
}, {});

console.log(goalScorers);
