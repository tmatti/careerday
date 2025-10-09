interface CardProps {
  title: string;
  description: string;
  emoji: string;
  buttonText: string;
  buttonColor: "blue" | "yellow";
  borderColor: "yellow" | "purple";
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  emoji,
  buttonText,
  buttonColor,
  borderColor,
  onClick,
}: CardProps) {
  const buttonColorClasses = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
    yellow:
      "bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700",
  };

  const borderColorClasses = {
    yellow: "border-yellow-400 hover:border-yellow-500",
    purple: "border-blue-400 hover:border-blue-500",
  };

  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl p-8 border-4 ${borderColorClasses[borderColor]} transition-colors`}
      >
        <div className="text-center items-center flex flex-col">
          <div className="text-8xl mb-6 group-hover:animate-bounce">
            {emoji}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <button
            className={`${buttonColorClasses[buttonColor]} text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
