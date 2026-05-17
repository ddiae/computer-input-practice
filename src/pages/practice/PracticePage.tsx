import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  loadState,
  saveState,
  isSetComplete,
  initState,
  clearState
} from "../../entities/practice-set/model";
import type { PracticeState } from "../../entities/practice-set/model";
import type { WordStatus } from "../../shared/types";
import { SetCard } from "../../widgets/set-card/SetCard";
import { ProgressBar } from "../../features/progress/ProgressBar";
import { isTeacherMode } from "../../shared/config/teacher";
import { KeyboardGuide } from "../../features/keyboard-guide/KeyboardGuide";
import { KeyboardLearn } from "../keyboard-learn/KeyboardLearnPage";

export function PracticePage() {
  const navigate = useNavigate();
  const [state, setState] = useState<PracticeState | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [learnDone, setLearnDone] = useState(() => sessionStorage.getItem("keyboard_learn_done") === "1");
  const teacherMode = isTeacherMode();

  useEffect(() => {
    const loaded = loadState();
    if (!loaded) {
      navigate("/");
      return;
    }
    setState(loaded);
  }, [navigate]);

  const handleStatusChange = useCallback((id: string, status: WordStatus) => {
    setState((prev) => {
      if (!prev) return prev;
      const next = {
        ...prev,
        wordStatuses: { ...prev.wordStatuses, [id]: status }
      };
      saveState(next);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!state || celebrating || showCompleteModal || teacherMode) return;
    const currentSet = state.sets[state.currentSetIndex];
    if (!currentSet || !isSetComplete(currentSet, state.wordStatuses)) return;

    const isLast = state.currentSetIndex >= state.sets.length - 1;
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
      if (isLast) {
        setShowCompleteModal(true);
      } else {
        setState((prev) => {
          if (!prev) return prev;
          const next = { ...prev, currentSetIndex: prev.currentSetIndex + 1 };
          saveState(next);
          return next;
        });
      }
    }, 1200);
  }, [state, celebrating, showCompleteModal, teacherMode]);

  // 선생님 모드: 모드 전환
  const handleModeSwitch = (mode: "normal" | "levelup") => {
    if (state?.mode === mode) return;
    const next = initState(mode);
    setState(next);
    setShowCompleteModal(false);
    setCelebrating(false);
  };

  // 선생님 모드: 세트 이동
  const handleSetJump = (idx: number) => {
    if (!state) return;
    const next = { ...state, currentSetIndex: idx };
    saveState(next);
    setState(next);
    setShowCompleteModal(false);
    setCelebrating(false);
  };

  if (!state) return null;

  if (!learnDone && !teacherMode) {
    return (
      <KeyboardLearn
        onDone={() => {
            sessionStorage.setItem("keyboard_learn_done", "1");
            setLearnDone(true);
          }}
        onHome={() => navigate("/")}
      />
    );
  }

  const currentSet = state.sets[state.currentSetIndex];
  const isNormal = state.mode === "normal";

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50 flex flex-col px-4 py-4 sm:px-6">
      {/* 세트 완료 축하 */}
      {celebrating && !showCompleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
          <div className="bg-white rounded-3xl shadow-2xl px-12 py-10 flex flex-col items-center gap-2">
            <span className="text-6xl">🎉</span>
            <p className="text-2xl font-black text-purple-700">잘했어요!</p>
            <p className="text-sm text-gray-400">다음 세트로 넘어가요~</p>
          </div>
        </div>
      )}

      {/* 전체 완료 모달 */}
      {showCompleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">{isNormal ? "🏆" : "🌟"}</div>
              <h2 className="text-2xl font-black text-gray-800 mb-1">
                {isNormal ? "일반 모드 완료!" : "참 잘했어요!"}
              </h2>
              <p className="text-sm text-gray-500">
                {isNormal
                  ? "10세트 모두 끝냈어요! 정말 잘했어요! 🎉"
                  : "레벨업까지 모두 완료했어요! 최고예요! 🎉"}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {isNormal && (
                <button
                  onClick={() => {
                    const next = initState("levelup");
                    setState(next);
                    setShowCompleteModal(false);
                  }}
                  className="w-full py-5 rounded-3xl text-xl font-black bg-pink-400 text-white shadow-[0_5px_0_#be185d] active:translate-y-1.25 active:shadow-[0_0px_0_#be185d] transition-all duration-100 cursor-pointer"
                >
                  👑 레벨업 도전!
                </button>
              )}
              <button
                onClick={() => {
                  clearState();
                  navigate("/");
                }}
                className={`w-full rounded-2xl font-black transition-all duration-100 cursor-pointer ${
                  isNormal
                    ? "py-4 text-base font-bold text-gray-500 border-2 border-gray-200 bg-white hover:bg-gray-50"
                    : "py-5 text-xl text-white bg-purple-400 shadow-[0_5px_0_#7c3aed] active:translate-y-1.25 active:shadow-[0_0px_0_#7c3aed]"
                }`}
              >
                🔄 다시하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 상단 하트바 스타일 진행률 */}
      <ProgressBar
        current={state.currentSetIndex + 1}
        total={state.sets.length}
        mode={state.mode}
        onHome={() => navigate("/")}
        onReset={() => {
          sessionStorage.removeItem("keyboard_learn_done");
          clearState();
          navigate("/");
        }}
      />

      {/* 선생님 모드 컨트롤 패널 */}
      {teacherMode && (
        <div className="mt-3 bg-green-50 border-2 border-green-200 rounded-2xl px-4 py-3 flex flex-col gap-3 max-w-4xl w-full mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-green-700">
              🔓 선생님 모드
            </span>
          </div>

          {/* 모드 전환 */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-green-600 shrink-0">
              모드:
            </span>
            <button
              onClick={() => handleModeSwitch("normal")}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isNormal
                  ? "bg-purple-500 text-white shadow-[0_3px_0_#6d28d9]"
                  : "bg-white border-2 border-gray-200 text-gray-500 hover:border-purple-300"
              }`}
            >
              📝 일반 모드
            </button>
            <button
              onClick={() => handleModeSwitch("levelup")}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                !isNormal
                  ? "bg-pink-500 text-white shadow-[0_3px_0_#be185d]"
                  : "bg-white border-2 border-gray-200 text-gray-500 hover:border-pink-300"
              }`}
            >
              👑 레벨업 모드
            </button>
          </div>

          {/* 세트 이동 */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-green-600 shrink-0">
              세트:
            </span>
            {state.sets.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSetJump(i)}
                className={`w-8 h-8 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  state.currentSetIndex === i
                    ? "bg-purple-500 text-white shadow-[0_3px_0_#6d28d9]"
                    : "bg-white border-2 border-gray-200 text-gray-500 hover:border-purple-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 세트 안내 문구 */}
      <div className="text-center my-3">
        <span className="inline-block px-6 py-6 font-bold text-4xl text-purple-800">
          틀린 글자를 올바르게 고쳐요.
        </span>
      </div>

      {/* 세트 카드 */}
      <div className="max-w-4xl w-full mx-auto">
        <SetCard
          set={currentSet}
          mode={teacherMode && !isNormal ? "normal" : state.mode}
          wordStatuses={state.wordStatuses}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* 키보드 가이드 - 남은 공간 중앙 */}
      <div className="flex-1 flex items-center pt-10 justify-center">
        <KeyboardGuide />
      </div>
    </div>
  );
}
