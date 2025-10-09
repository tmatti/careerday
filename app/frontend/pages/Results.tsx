import { Head } from "@inertiajs/react";
import Header from "../components/Header";
import CareerVotesPieChart from "../components/CareerVotesPieChart";
import CareerVotesByGenderChart from "../components/CareerVotesByGenderChart";

interface CareerGenderData {
  career: string;
  [key: string]: string | number;
}

interface ResultsProps {
  votes_by_career: Record<string, number>;
  votes_by_career_and_gender: CareerGenderData[];
}

interface ChartData {
  name: string;
  value: number;
}

// Chart Container Component
interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
}

function ChartContainer({ title, children }: ChartContainerProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {title}
      </h2>
      {children}
    </div>
  );
}

// Helper function to transform votes data
function transformVotesToChartData(
  votes_by_career: Record<string, number>,
): ChartData[] {
  return Object.entries(votes_by_career || {}).map(([name, value]) => ({
    name,
    value,
  }));
}

// Helper function to calculate total votes
function calculateTotalVotes(data: ChartData[]): number {
  return data.reduce((sum, item) => sum + item.value, 0);
}

export default function Results({
  votes_by_career,
  votes_by_career_and_gender,
}: ResultsProps) {
  // Transform and prepare data
  const chartData = transformVotesToChartData(votes_by_career);
  const totalVotes = calculateTotalVotes(chartData);

  return (
    <>
      <Head title="Career Day - Results!" />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-yellow-400 p-4">
        {/* Header */}
        <Header />

        {/* Results Content */}
        <div className="max-w-6xl mx-auto mt-8 space-y-8">
          {/* Career Votes Chart */}
          <ChartContainer title="Results">
            <CareerVotesPieChart data={chartData} totalVotes={totalVotes} />
          </ChartContainer>

          {/* Career Votes by Gender Chart */}
          <ChartContainer title="Boys vs Girls">
            <CareerVotesByGenderChart data={votes_by_career_and_gender} />
          </ChartContainer>
        </div>
      </div>
    </>
  );
}
