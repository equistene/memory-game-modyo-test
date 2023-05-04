import React from "react";

export default function Loader() {
  const cards = [];
  for (let i = 0; i < 12; i++) {
    cards.push(
      <div
        key={i}
        id="card"
        className="aspect-square rounded-lg overflow-hidden grid place-items-center bg-gray-200"
      >
        <p className="text-2xl">⏳</p>
      </div>
    );
  }

  return <>{cards}</>;
}
