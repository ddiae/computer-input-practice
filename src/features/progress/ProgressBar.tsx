interface Props {
  current: number;
  total: number;
  onHome: () => void;
  onReset: () => void;
  mode: "normal" | "levelup";
}

export function ProgressBar({ current, total, onHome, onReset, mode }: Props) {
  return (
    <div className="relative flex justify-center items-center w-full py-1 px-4">
      {/* 홈 버튼 - 절대 좌측 */}
      <button
        onClick={onHome}
        className="absolute left-4 px-3.5 py-1.5 bg-white border-2 border-purple-200 rounded-full text-xs font-bold text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all cursor-pointer"
      >
        홈으로
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

      {/* 우측: 모드 뱃지 + 처음부터 버튼 */}
      <div className="absolute right-4 flex items-end gap-2">
        <span
          className={`px-3 py-2 rounded-full text-xs font-bold ${
            mode === "normal"
              ? "bg-purple-100 text-purple-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {mode === "normal" ? "📝 Basic" : "👑 Level Up"}
        </span>
        <button
          onClick={onReset}
          className="px-3.5 py-1.5 bg-white border-2 border-gray-200 rounded-full text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all cursor-pointer"
        >
          처음부터 다시하기
        </button>
      </div>
    </div>
  );
}
