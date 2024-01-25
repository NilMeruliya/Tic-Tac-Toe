import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Header from "./component/Header";
import Player from "./component/Player";
import Log from "./component/Log";

function App() {

  const [activePlayer, setActivePlayer] = useState("X"); // it is used in Player and GAMEBOARD component.

  const [gameTurns, setGameTurns] = useState([]); // it is used in GAMEBOARD and LOG component.

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, rowElementIndex) => {
    setActivePlayer(activePlayer === "X" ? "0" : "X");
    // setActivePlayer((preVal) => preVal === "X" ? "0" : "X");

    // it creates a new array, its called immutable. rather than changing the original array, we are creating a new array, in which we can update the original array.
    
    // const tempArray = gameBoard;
    // tempArray[rowIndex][rowElementIndex] = activePlayer
    // setGameBoard(tempArray);

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "0";
      }

      const updatedTurns = [
        {
          square: {
            rowIndex: rowIndex,
            rowElementIndex: rowElementIndex },
            player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }


 
  return (
    <>
      <Header />

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              activePlayer={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="0"
              activePlayer={activePlayer === "0"}
            />
          </ol>
          <GameBoard handleSelectSquare={handleSelectSquare} gameTurns={gameTurns} initialGameBoard={initialGameBoard}/>
          <Log />
        </div>
      </main>
    </>
  );
}

export default App;