import { ParagraphView } from "../paragraph-view/ParagraphView";
import type { PracticeSet, WordStatus, Mode } from "../../shared/types";

interface Props {
  set: PracticeSet;
  mode: Mode;
  wordStatuses: Record<string, WordStatus>;
  onStatusChange: (id: string, status: WordStatus) => void;
}

function SetProgress({
  set,
  wordStatuses
}: {
  set: PracticeSet;
  wordStatuses: Record<string, WordStatus>;
}) {
  const wrongWords = set.words.flat().filter((w) => w.isWrong);
  const corrected = wrongWords.filter(
    (w) => wordStatuses[w.id] === "correct"
  ).length;
  const total = wrongWords.length;
  const percent = total === 0 ? 100 : Math.round((corrected / total) * 100);

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs font-bold text-gray-400 shrink-0">
        <span className="text-green-500">
          {corrected}/{total}
        </span>{" "}
        ({percent}%)
      </span>
    </div>
  );
}

export function SetCard({ set, mode, wordStatuses, onStatusChange }: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
      {/* 원문 */}
      <div className="lg:w-2/5 shrink-0 bg-amber-50 rounded-3xl shadow-md p-5">
        <p className="text-sm font-bold text-amber-700 mb-3">📖</p>
        <div className="flex flex-col gap-2">
          {set.original.map((line, i) => (
            <p
              key={i}
              className="text-2xl text-gray-800 leading-relaxed font-medium"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* 제시문 */}
      <div className="flex-1 bg-white rounded-3xl shadow-md p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-600">
            {mode === "normal"
              ? "✏️ 틀린 곳을 찾아 고쳐요."
              : "🔍 틀린 곳을 직접 찾아 고쳐요."}
          </p>
        </div>

        <SetProgress set={set} wordStatuses={wordStatuses} />

        <ParagraphView
          set={set}
          mode={mode}
          wordStatuses={wordStatuses}
          onStatusChange={onStatusChange}
        />
      </div>
    </div>
  );
}
