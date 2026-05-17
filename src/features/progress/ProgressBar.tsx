interface Props {
  current: number;
  total: number;
  onHome: () => void;
  mode: "normal" | "levelup";
}

export function ProgressBar({ current, total, onHome, mode }: Props) {
  return (
    <div className="relative flex justify-center items-center w-full py-1 px-4">
      {/* 홈 버튼 - 절대 좌측 */}
      <button
        onClick={onHome}
        className="absolute left-4 px-3.5 py-1.5 bg-white border-2 border-purple-200 rounded-full text-xs font-bold text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all cursor-pointer"
      >
        홈
      </button>

      {/* 별 */}
      <div className="flex gap-2">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`text-4xl leading-none transition-all duration-300 ${
              i < current ? "opacity-100 scale-110" : "opacity-20 grayscale"
            }`}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* 모드 뱃지 - 절대 우측 */}
      <span
        className={`absolute right-4 px-3 py-1.5 rounded-full text-xs font-bold ${
          mode === "normal"
            ? "bg-purple-100 text-purple-700"
            : "bg-pink-100 text-pink-700"
        }`}
      >
        {mode === "normal" ? "📝 Basic" : "👑 Level Up"}
      </span>
    </div>
  );
}
