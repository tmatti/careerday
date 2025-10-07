import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Vote() {
  const handleVoteClick = () => {
    router.get("votes/new");
  };

  const handleResultsClick = () => {
    router.get("votes");
  };

  return (
    <>
      <Head title="Career Day - Dream Big!" />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        {/* Header */}
        <div className="text-center pt-12 pb-8">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🌟 Career Day! 🌟
          </h1>
          <p className="text-2xl text-white font-medium drop-shadow-md">
            What do you want to be when you grow up?
          </p>
        </div>
      </div>
    </>
  );
}
