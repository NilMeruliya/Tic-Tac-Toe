import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer, setPlayerName}) => {
  const [toggleEditButton, setToggleEditButton] = useState(false); // works for both the toggle button and the input as well 
  const [editInput, setEditInput] = useState(name);

  const handleEditButton = () => {
    setToggleEditButton(!toggleEditButton);
    setPlayerName(editInput)
  };

  const handleInput = (e) => {
    e.preventDefault();
    setEditInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <li className={activePlayer ? "active" : undefined}>
      <span className="player">
        {toggleEditButton ? (
          <input type="text" placeholder={editInput} value={editInput} onChange={handleInput} /> // its called a two way binding. we are editing the existing value of the input and getting it saved as well. 
          // in above inpuy if we don't write input, we have to manually write new value, but if you write value in the code above, we will get the previous value of input and we can than edit that value.
        ) : (
          <span className="player-name">{editInput}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>
        {toggleEditButton ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
