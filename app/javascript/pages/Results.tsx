import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Header from "../components/Header";

export default function Results() {
  const handleVoteClick = () => {
    router.get("votes/new");
  };

  const handleResultsClick = () => {
    router.get("votes");
  };

  return (
    <>
      <Head title="Career Day - Results!" />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-yellow-400 p-4">
        {/* Header */}
        <Header />
      </div>
    </>
  );
}
