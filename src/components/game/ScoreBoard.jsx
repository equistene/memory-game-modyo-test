import React from "react";

export default function ScoreBoard({ currentPlayer, success, error }) {
  return (
    <div
      id="top-data"
      className="flex justify-between items-center flex-wrap mb-5"
    >
      <h3 className="w-100 text-md font-bold" aria-label={currentPlayer}>
        👤 {currentPlayer}
      </h3>

      <div id="scores" className="flex justify-end gap-2">
        <p
          id="success-plays"
          aria-label="success"
          className="text-green-500 bg-gray-200 p-2 rounded-md"
        >
          ✅ {success} hits
        </p>
        <p
          id="error-plays"
          aria-label="fails"
          className="text-red-500 bg-gray-200 p-2 rounded-md"
        >
          ❌ {error} fails
        </p>
      </div>
    </div>
  );
}
