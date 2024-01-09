import React, { useState } from "react";

const GameBoard = () => {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // here we are using nested arrays
  // so in order to get the access of array which is inside the array,, we need to use 2 map method.

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleClick = (rowIndex, rowElementindex) => {
    
    setGameBoard((preVal) => {
           const updatedBoard = [...preVal.map((innerArray) => [...innerArray])]  // it creates a new array, its called immutable. rather than changing the original array, we are creating a new array, in which we can update the original array.
           updatedBoard[rowIndex][rowElementindex] = "X"
           return updatedBoard;
        }
    );
  }
//   gameBoard[rowIndex][rowElementindex] = "X"
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        // first map to have an access of the row
        return (
          
            <li key={rowIndex}>
              <ol>
                {row.map((rowElement, rowElementindex) => {
                  // second map to have an access to the three elements which are inside the row
                  return (
                  
                      <li key={rowElementindex}>
                        <button onClick={() => handleClick(rowIndex, rowElementindex)}>{rowElement}</button>
                      </li>
                 
                  );
                })}
              </ol>
            </li>
          
        );
      })}
    </ol>
  );
};

export default GameBoard;
