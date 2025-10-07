interface CardProps {
  title: string;
  description: string;
  emoji: string;
  buttonText: string;
  buttonColor: "green" | "purple";
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
    green:
      "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700",
    purple:
      "bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700",
  };

  const borderColorClasses = {
    yellow: "border-yellow-300 hover:border-yellow-400",
    purple: "border-purple-300 hover:border-purple-400",
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
            className={`${buttonColorClasses[buttonColor]} text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition-all duration-200 hover:scale-110`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
