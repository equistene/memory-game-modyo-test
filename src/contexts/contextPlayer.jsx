import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const PlayerContext = createContext();

export function PlayerContextProvider(props) {
  const [currentPlayer, setCurrentPlayer] = useState("");

  const playerName = { currentPlayer, setCurrentPlayer };

  useEffect(() => {
    if (localStorage.getItem("player") != null) {
      setCurrentPlayer(localStorage.getItem("player"));
    }
  }, [currentPlayer]);

  return (
    <PlayerContext.Provider value={playerName}>
      {props.children}
    </PlayerContext.Provider>
  );
}
