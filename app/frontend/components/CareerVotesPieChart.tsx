import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "#3B82F6", // blue
  "#EF4444", // red
  "#10B981", // green
  "#F59E0B", // amber
  "#8B5CF6", // violet
  "#EC4899", // pink
  "#06B6D4", // cyan
  "#F97316", // orange
  "#14B8A6", // teal
  "#6366F1", // indigo
];

interface ChartData {
  name: string;
  value: number;
}

interface CareerVotesPieChartProps {
  data: ChartData[];
  totalVotes: number;
}

export default function CareerVotesPieChart({
  data,
  totalVotes,
}: CareerVotesPieChartProps) {
  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <p className="text-xl">No votes yet!</p>
        <p className="mt-2">Be the first to vote for your favorite career.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-center text-gray-600 mb-8">
        Total Votes: {totalVotes}
      </p>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
