import { useState, useContext } from "react";
import wordleStore from "../context/context";
import Word from "./Word";

const Board = () => {
  const [active, setActive] = useState([true, false, false, false, false]);
  const { word } = useContext(wordleStore);
  console.log(word);
  return (
    <div className="board">
      {active.map((ac, i) => (
        <Word key={i} isActive={ac} />
      ))}
    </div>
  );
};

export default Board;
