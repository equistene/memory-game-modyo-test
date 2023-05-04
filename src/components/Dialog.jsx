import React, { useRef, useState, useEffect, useContext } from "react";

import { PlayerContext } from "@/contexts/contextPlayer";

export default function Dialog() {
  const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext);

  const nameRef = useRef(null);
  const [dialogStatus, setDialogStatus] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("player") != null) {
      setDialogStatus(false);
    }
  }, []);

  const submitName = () => {
    const playerName = localStorage.setItem("player", nameRef.current.value);
    setCurrentPlayer(localStorage.setItem("player", nameRef.current.value));
    setDialogStatus(false);
  };

  return (
    <>
      {dialogStatus && (
        <dialog className="dialog-container" open>
          <div className="container w-max p-6 bg-white text-black rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Welcome to MemoryGame</h2>
            <p>Insert a username</p>
            <form onSubmit={submitName}>
              <input
                required
                placeholder="@equistene"
                type="text"
                name="name"
                id="name"
                ref={nameRef}
                className="border-2 border-gray-700 w-full rounded-md p-1 m-2"
              />
              <button className="button-bg-blue">Play!</button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
