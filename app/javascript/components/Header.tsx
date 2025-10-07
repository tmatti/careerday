import { Link } from "@inertiajs/react";

export default function Header() {
  return (
    <Link href="/">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          💫 Career Day! 💫
        </h1>
        <p className="text-xl md:text-2xl text-white font-medium drop-shadow-md">
          What do you want to be when you grow up?
        </p>
      </div>
    </Link>
  );
}
