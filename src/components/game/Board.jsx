import { useEffect, useState, useRef, useContext } from "react";

import Loader from "@/components/game/Loader";
import ScoreBoard from "@/components/game/ScoreBoard";
import Card from "@/components/game/Card";
import DialogWin from "@/components/DialogWin";

import { PlayerContext } from "@/contexts/contextPlayer";

export default function App() {
  const { currentPlayer, setCurrentPlayer } = useContext(PlayerContext);

  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [cardsDuplicate, setCardsDuplicate] = useState([]);
  const [success, setSuccess] = useState(0);
  const [error, setError] = useState(0);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const cardLimit = 6;
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=${cardLimit}`
      );
      const data = await response.json();
      setCards(data.entries);
      setCardsDuplicate([...cards, ...cards].sort(() => 0.5 - Math.random()));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const checkCompletion = () => {
    if (
      cardsDuplicate.length > 0 &&
      clearedCards.length === cardsDuplicate.length / 2
    ) {
      setShowModal(true);
      console.log("ganaste");
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;

    enable();

    if (first.slug === second.slug) {
      setSuccess(success + 1);
      setClearedCards((prev) => [...prev, first.slug]);
      setOpenCards([]);
      return;
    } else {
      setError(error + 1);
      timeout.current = setTimeout(() => {
        setOpenCards([]);
      }, 500);
    }
  };

  const handleCardClick = ({ slug, index }) => {
    const cardObject = { id: index, slug: slug };

    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, cardObject]);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([cardObject]);
    }
  };

  const checkIsFlipped = (index) => {
    return openCards.find((openCard) => openCard.id === index);
  };

  const checkIsInactive = (slug) => {
    return clearedCards.includes(slug);
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      evaluate();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  return (
    <>
      <div id="game" className="bg-white p-4 -mt-2 rounded-lg shadow-lg">
        <ScoreBoard
          currentPlayer={currentPlayer}
          success={success}
          error={error}
        />

        <div className="container">
          <section
            id="board"
            className="grid grid-cols-4 gap-2 sm:gap-4 max-w-full"
          >
            {loading ? (
              <Loader />
            ) : (
              cardsDuplicate.map((card, index) => {
                return (
                  <Card
                    image={card.fields.image.url}
                    slug={card.meta.slug}
                    key={index}
                    card={card}
                    index={index}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(card.meta.slug)}
                    isFlipped={checkIsFlipped(index)}
                    onClick={handleCardClick}
                  />
                );
              })
            )}
          </section>
        </div>
      </div>

      {showModal && <DialogWin />}
    </>
  );
}
