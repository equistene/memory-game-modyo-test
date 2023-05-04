import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-5">
        <p className="flex justify-center gap-1 text-xs text-white">
          Code by Cristian Berrios -
          <Link
            className="underline hover:no-underline"
            href="https://github.com/equistene/memory-game-modyo-test"
            target="_blank"
            title="View repository"
          >
            Source
          </Link>
        </p>
      </footer>
    </>
  );
}
