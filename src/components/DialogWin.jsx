import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { PlayerContext } from "@/contexts/contextPlayer";

export default function DialogWin() {
  const router = useRouter();
  const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext);

  return (
    <>
      <dialog className="dialog-container" open>
        <div className="container w-max p-6 bg-white text-black rounded-lg text-center uppercase">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            🎊 ¡You win! 🎊
          </h2>

          <p className="mb-5">want to play again?</p>

          <button
            className="button-bg-blue"
            onClick={() => router.reload(window.location.pathname)}
          >
            Restart game 🤘
          </button>
        </div>
      </dialog>
    </>
  );
}
