import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CareerGenderData {
  career: string;
  Male?: number;
  Female?: number;
  [key: string]: string | number | undefined;
}

interface CareerVotesByGenderChartProps {
  data: CareerGenderData[];
}

// Bright, kid-friendly color palette
const COLOR_PALETTE = [
  "#3B82F6", // bright blue
  "#EC4899", // bright pink
  "#10B981", // green
  "#F59E0B", // amber
  "#8B5CF6", // purple
  "#EF4444", // red
  "#06B6D4", // cyan
  "#F97316", // orange
];

const GENDER_EMOJIS: Record<string, string> = {
  Male: "👦",
  Female: "👧",
  "Non-binary": "🌟",
  "Prefer not to say": "😊",
  Other: "✨",
};

const CAREER_EMOJIS: Record<string, string> = {
  Doctor: "🩺",
  Teacher: "📚",
  Engineer: "🔧",
  Scientist: "🔬",
  Artist: "🎨",
  Firefighter: "🚒",
  Police: "👮",
  Chef: "👨‍🍳",
  Astronaut: "🚀",
  Veterinarian: "🐾",
};

// Custom tooltip with kid-friendly styling
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl shadow-2xl p-6 border-4 border-purple-400">
        <p className="text-2xl font-black text-purple-900 mb-3">🎯 {label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <span className="text-xl">{GENDER_EMOJIS[entry.name] || "⭐"}</span>
            <p className="text-xl font-bold" style={{ color: entry.fill }}>
              {entry.name}: {entry.value} vote{entry.value !== 1 ? "s" : ""}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom legend with larger, colorful styling
const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex justify-center gap-8 mt-6 flex-wrap">
      {payload.map((entry: any, index: number) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg transform transition-transform hover:scale-110"
          style={{
            borderColor: entry.color,
            borderWidth: "3px",
            borderStyle: "solid",
          }}
        >
          <span className="text-2xl">{GENDER_EMOJIS[entry.value] || "⭐"}</span>
          <div
            className="w-8 h-8 rounded-full shadow-md"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xl font-black text-gray-800">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

// Custom Y-axis tick with emojis
const CustomYAxisTick = ({ x, y, payload }: any) => {
  const emoji = CAREER_EMOJIS[payload.value] || "⭐";

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="#1F2937"
        fontSize={18}
        fontWeight="bold"
      >
        {emoji} {payload.value}
      </text>
    </g>
  );
};

export default function CareerVotesByGenderChart({
  data,
}: CareerVotesByGenderChartProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-4">🎨</div>
        <p className="text-3xl font-black text-gray-700 mb-2">No votes yet!</p>
        <p className="text-xl font-semibold text-gray-600">
          Be the first to vote for your favorite career! 🌟
        </p>
      </div>
    );
  }

  // Extract all gender keys from the data (excluding 'career')
  const genderKeys = Array.from(
    new Set(
      data.flatMap((item) =>
        Object.keys(item).filter((key) => key !== "career"),
      ),
    ),
  );

  // Create color mapping for each gender
  const genderColors: Record<string, string> = {};
  genderKeys.forEach((gender, index) => {
    genderColors[gender] = COLOR_PALETTE[index % COLOR_PALETTE.length];
  });

  return (
    <div
      className="w-full"
      style={{ height: Math.max(400, data.length * 80) + "px" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 50, left: 140, bottom: 30 }}
          barSize={24}
          barGap={6}
          barCategoryGap={20}
        >
          <CartesianGrid
            strokeDasharray="5 5"
            stroke="#E5E7EB"
            strokeWidth={2}
          />
          <XAxis
            type="number"
            tick={{ fill: "#1F2937", fontSize: 18, fontWeight: "bold" }}
            axisLine={{ stroke: "#9CA3AF", strokeWidth: 3 }}
            tickLine={{ stroke: "#9CA3AF", strokeWidth: 2 }}
          />
          <YAxis
            dataKey="career"
            type="category"
            width={130}
            tick={<CustomYAxisTick />}
            axisLine={{ stroke: "#9CA3AF", strokeWidth: 3 }}
            tickLine={{ stroke: "#9CA3AF", strokeWidth: 2 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#FEF3C7", opacity: 0.3 }}
          />
          <Legend content={<CustomLegend />} />
          {genderKeys.map((gender) => (
            <Bar
              key={gender}
              dataKey={gender}
              fill={genderColors[gender]}
              name={gender}
              radius={[0, 12, 12, 0]}
              animationDuration={1000}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
