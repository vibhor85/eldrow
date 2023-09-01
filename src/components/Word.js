import { useEffect, useState } from "react";

import Character from "./Character";
import "./Word.css";

const Word = ({ isActive }) => {
  const [key, setKey] = useState([]);
  useEffect(() => {
    const handleKeydown = (event) => {
      console.log(event);
      if (event.code === "Enter") {
        return;
      }
      if (event.code === "Backspace") {
        setKey((prev) => prev.slice(0, -1));
        return;
      }
      setKey((prev) => [...prev, event.key]);
    };
    if (isActive) {
      document.addEventListener("keydown", handleKeydown);
    }
  }, [isActive]);

  return (
    <div className="word">
      <Character ch={key[0]} />
      <Character ch={key[1]} />
      <Character ch={key[2]} />
      <Character ch={key[3]} />
      <Character ch={key[4]} />
    </div>
  );
};

export default Word;
