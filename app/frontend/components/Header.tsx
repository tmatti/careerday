import { Link } from "@inertiajs/react";
import cometPng from "/assets/comet.png";

export default function Header() {
  return (
    <Link href="/">
      <div className="flex justify-center items-center mb-4">
        <img src={cometPng} alt="Comet" className="w-28" />
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Comet Career Day
        </h1>
      </div>
    </Link>
  );
}
