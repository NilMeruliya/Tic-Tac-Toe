const GameBoard = ({handleSelectSquare, gameTurns, initialGameBoard}) => {

  let gameBoard = initialGameBoard;

  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {rowIndex, rowElementIndex} = square;
    gameBoard[rowIndex][rowElementIndex] = player;
  }

  //  here we are using nested arrays
  //  so in order to get the access of array which is inside the array,, we need to use 2 map method.

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        // first map to have an access of the row
        return (
          
            <li key={rowIndex}>
              <ol>
                {row.map((rowElement, rowElementIndex) => {
                  // second map to have an access to the three elements which are inside the row
                  return (
                  
                      <li key={rowElementIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, rowElementIndex)}>{rowElement}</button>
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
