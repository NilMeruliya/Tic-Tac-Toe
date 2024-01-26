import React from "react";

const GameOver = ({ winner, restartBtn }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a Draw</p>}
      <button onClick={restartBtn}>Rematch!</button>
    </div>
  );
};

export default GameOver;
