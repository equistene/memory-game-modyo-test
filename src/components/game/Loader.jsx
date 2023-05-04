import React from "react";
import Image from "next/image";
import cardImg from "../../../public/images/card-load.png";

export default function Loader() {
  const cards = [];
  for (let i = 0; i < 12; i++) {
    cards.push(
      <div
        key={i}
        id="card"
        className="aspect-square rounded-lg overflow-hidden grid place-items-center bg-gray-200"
      >
        <Image
          src={cardImg}
          alt="loading"
          width="400"
          height="400"
          priority={true}
          className="object-cover rounded-lg w-full h-full aspect-square opacity-30"
        />
      </div>
    );
  }

  return <>{cards}</>;
}
