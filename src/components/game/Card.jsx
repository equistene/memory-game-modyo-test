import React, { useRef } from "react";
import Image from "next/image";

const Card = ({
  image,
  slug,
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
}) => {
  const cardRef = useRef(slug + index);
  const handleClick = (e) => {
    !isFlipped && !isDisabled && onClick({ slug, index });
  };

  return (
    <div
      ref={cardRef}
      className={`card card-base ${isFlipped ? "is-flipped" : ""} ${
        isInactive ? "is-flipped is-inactive" : ""
      }`}
      onClick={handleClick}
    >
      <div className="card-face card-font-face card-font-face-commons">
        <p className="text-center text-4xl font-semibold text-white">♣️</p>
      </div>
      <div className="card-face card-back-face m-1 rounded-lg">
        <Image
          src={image}
          alt={slug}
          width="400"
          height="400"
          priority={true}
          className="object-cover rounded-lg w-full h-full aspect-square"
        />
      </div>
    </div>
  );
};

export default Card;
