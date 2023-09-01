import { createContext, useState } from "react";
import words from "../words";
const wordleStore = createContext({
  word: words[Math.floor(Math.random() * words.length)]
});

export const Context = (props) => {
  const [store, setStore] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  return (
    <wordleStore.Provider value={{ word: store.toUpperCase() }}>
      {props.children}
    </wordleStore.Provider>
  );
};

export default wordleStore;
