import { Head } from "@inertiajs/react";
import Card from "../components/card";
import { router } from "@inertiajs/react";

export default function Home() {
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

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              title="Vote for Your Dream Job!"
              description="Pick your favorite career and help us see what kids want to be! Astronaut? Doctor? Artist? The choice is yours!"
              emoji="🚀"
              buttonText="Start Voting! 🗳️"
              buttonColor="green"
              borderColor="yellow"
              onClick={handleVoteClick}
            />

            <Card
              title="See the Results!"
              description="Check out what careers are the most popular! See colorful charts and discover what other kids dream of becoming!"
              emoji="📊"
              buttonText="View Results! 📈"
              buttonColor="purple"
              borderColor="purple"
              onClick={handleResultsClick}
            />
          </div>

          {/* Fun decorative elements */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-white text-xl font-medium drop-shadow-md">
              Every job is special and important!
            </p>
            <div className="flex justify-center space-x-4 text-5xl">
              <span className="animate-pulse">👩‍⚕️</span>
              <span
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                👨‍🚒
              </span>
              <span className="animate-pulse" style={{ animationDelay: "1s" }}>
                👩‍🎨
              </span>
              <span
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                👨‍🍳
              </span>
              <span className="animate-pulse" style={{ animationDelay: "2s" }}>
                👩‍🏫
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
