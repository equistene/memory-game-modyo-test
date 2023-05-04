import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { PlayerContext } from "@/contexts/contextPlayer";

export default function DialogWin() {
  const router = useRouter();
  const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext);

  return (
    <>
      <dialog
        className="grid z-40 place-items-center w-screen h-screen inset-0 bg-black bg-opacity-70 backdrop-blur-lg"
        open
      >
        <div className="container w-max p-6 bg-white text-black rounded-lg text-center uppercase">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">
            🎊 ¡You win! 🎊{" "}
          </h2>

          <p className="mb-10">Do you want to play again?</p>

          <button
            className="table m-auto w-full my-0 mx-2 bg-blue-700 text-white py-2 px-5 rounded-md hover:bg-blue-900"
            onClick={() => router.reload(window.location.pathname)}
          >
            Restart game 🤘
          </button>
        </div>
      </dialog>
    </>
  );
}
