import React, { useState } from 'react';
import Dado from './dado';

/*
Utilizar el componente anterior para crear un juego de 2 a 4 jugadores. Al inicio pedirá el
número de participantes, el nombre de cada uno y posteriormente realizará las tiradas por
turnos, hasta un total de 5. Irá mostrando la puntuación parcial junto con la media y al
acabar mostrará la clasificación fina
*/

import React, { useState } from 'react';

const DiceGame = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);

  const startGame = () => {
    setGameStarted(true);
    // Initialize players with empty scores
    const newPlayers = [];
    for (let i = 0; i < numPlayers; i++) {
      newPlayers.push({
        name: `Player ${i + 1}`,
        score: 0,
      });
    }
    setPlayers(newPlayers);
  };

  const rollDice = () => {
    // Generate random number between 1 and 6
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newDiceValue);
    // Update score for current player
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayer].score += newDiceValue;
    setPlayers(updatedPlayers);
    // Change to next player
    setCurrentPlayer((currentPlayer + 1) % numPlayers);
  };

  return (
    <div>
      {gameStarted ? (
        <div>
          <h2>Current Player: {players[currentPlayer].name}</h2>
          <button onClick={() => rollDice()}>Roll Dice</button>
          <p>Dice Value: {diceValue}</p>
          {players.map((player, index) => (
            <p key={index}>
              {player.name}: {player.score}
              Average: {player.score / 5}
            </p>
          ))}
          {players.every((player) => player.score >= 5) && (
            <div>
              <h2>Final Results:</h2>
              {const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
              sortedPlayers.map((player, index) => (
                <p key={index}>
                  {index + 1}. {player.name}: {player.score}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Enter number of players:</h2>
          <input type="number" onChange={(e) => setNumPlayers(e.target.value)} />
          <button onClick={() => startGame()}>Start Game</button>
        </div>
      )}
    </div>
  );
};

export default DiceGame;
