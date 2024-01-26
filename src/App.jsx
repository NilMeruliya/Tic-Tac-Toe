import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Header from "./component/Header";
import Player from "./component/Player";
import Log from "./component/Log";
import WINNING_COMBINATIONS from "./component/winning_combinations"
import GameOver from "./component/GameOver";


function App() {
  const [activePlayer, setActivePlayer] = useState("X"); // it is used in Player and GAMEBOARD component.

  const [gameTurns, setGameTurns] = useState([]); // it is used in GAMEBOARD and LOG component.

  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = initialGameBoard;
  //  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {rowIndex, rowElementIndex} = square;
    gameBoard[rowIndex][rowElementIndex] = player;
  }
  
  let winner;

  for (const combination of WINNING_COMBINATIONS) { 
    const firstSquarePlayer = gameBoard[combination[0].rowIndex][combination[0].rowElementIndex]
    const secondSquarePlayer = gameBoard[combination[1].rowIndex][combination[1].rowElementIndex]
    const thirdSquarePlayer = gameBoard[combination[2].rowIndex][combination[2].rowElementIndex]

    if (firstSquarePlayer && (firstSquarePlayer === secondSquarePlayer) && (thirdSquarePlayer === secondSquarePlayer)) {
       winner = firstSquarePlayer;
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, rowElementIndex) => {
    setActivePlayer(activePlayer === "X" ? "0" : "X");
    // setActivePlayer((preVal) => preVal === "X" ? "0" : "X");

    // it creates a new array, its called immutable. rather than changing the original array, we are creating a new array, in which we can update the original array.

    // const tempArray = gameBoard;
    // tempArray[rowIndex][rowElementIndex] = activePlayer
    // setGameBoard(tempArray);

    setGameTurns((prevTurns) => {
      console.log("prev turns");
      console.log(prevTurns);
      // let currentPlayer = "X";

      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "0";
      // }

      const updatedTurns = [
        {
          square: {
            rowIndex: rowIndex,
            rowElementIndex: rowElementIndex,
          },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const restartBtn = () => {
    setGameTurns([]);
  }


  return (
    <>
      <Header />

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={player1Name}
              symbol="X"
              activePlayer={activePlayer === "X"}
              setPlayerName={setPlayer1Name}
            />
            <Player
              name={player2Name}
              symbol="0"
              activePlayer={activePlayer === "0"}
              setPlayerName={setPlayer2Name}
            />
          </ol>

          {(winner || hasDraw) &&  <GameOver winner={winner} restartBtn={restartBtn} player1Name={player1Name} player2Name={player2Name}/>}

          <GameBoard
            handleSelectSquare={handleSelectSquare}
            gameTurns={gameTurns}
            gameBoard={gameBoard}
          />
        </div>
        <Log gameTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
