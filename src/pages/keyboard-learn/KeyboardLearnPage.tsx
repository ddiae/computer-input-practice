import { useState, useEffect } from "react";
import { KeyboardGuide } from "../../features/keyboard-guide/KeyboardGuide";

interface Step {
  phase: 1 | 2;
  bubble: string;
  hint?: string;
  target: string;
  targetCode?: string; // Shift 콤보 시 함께 눌러야 할 키의 e.code
  answer?: string;
}

const steps: Step[] = [
  {
    phase: 1,
    bubble: "띄어쓰기를 하고 싶어요!",
    target: "space",
    answer: "스페이스바를 누르면 돼요! 👍"
  },
  {
    phase: 1,
    bubble: "영어로 바꾸고 싶어요!",
    target: "hangeul",
    answer: "한/영 키를 누르면 돼요! 👍"
  },
  {
    phase: 1,
    bubble: "쌍기역(ㄲ)을 쓰고 싶어요!",
    target: "shift",
    targetCode: "KeyR",
    answer: "Shift 키를 꾹 누르고 ㄱ을 함께 눌러요! 👍"
  },
  {
    phase: 1,
    bubble: "쌍디귿(ㄸ)을 쓰고 싶어요!",
    target: "shift",
    targetCode: "KeyE",
    answer: "Shift 키를 꾹 누르고 ㄷ을 함께 눌러요! 👍"
  },
  {
    phase: 1,
    bubble: "쌍시옷(ㅆ)을 쓰고 싶어요!",
    target: "shift",
    targetCode: "KeyT",
    answer: "Shift 키를 꾹 누르고 ㅅ을 함께 눌러요! 👍"
  },
  {
    phase: 1,
    bubble: "쌍지읒(ㅉ)을 쓰고 싶어요!",
    target: "shift",
    targetCode: "KeyW",
    answer: "Shift 키를 꾹 누르고 ㅈ을 함께 눌러요! 👍"
  },
  {
    phase: 1,
    bubble: "쌍비읍(ㅃ)을 쓰고 싶어요!",
    target: "shift",
    targetCode: "KeyQ",
    answer: "Shift 키를 꾹 누르고 ㅂ을 함께 눌러요! 👍"
  },
  {
    phase: 1,
    bubble: "다음 줄에 쓰고 싶어요!",
    target: "enter",
    answer: "Enter 키를 누르면 돼요! 👍"
  },
  {
    phase: 1,
    bubble: "잘못 썼어요, 지우고 싶어요!",
    target: "backspace",
    answer: "Backspace 키를 누르면 돼요! 👍"
  },
  {
    phase: 2,
    bubble: "시프트 키를 찾아서 눌러봐요!",
    hint: "쌍자음을 쓸 때 함께 눌러요",
    target: "shift"
  },
  {
    phase: 2,
    bubble: "스페이스바를 찾아서 눌러봐요!",
    hint: "띄어쓰기를 할 때 눌러요",
    target: "space"
  },
  {
    phase: 2,
    bubble: "엔터를 찾아서 눌러봐요!",
    hint: "줄을 바꾸거나 확인할 때 써요",
    target: "enter"
  },
  {
    phase: 2,
    bubble: "백스페이스를 찾아서 눌러봐요!",
    hint: "글자를 지울 때 눌러요",
    target: "backspace"
  },
  {
    phase: 2,
    bubble: "한/영 키를 찾아서 눌러봐요!",
    hint: "한글이나 영어로 바꿀 때 눌러요",
    target: "hangeul"
  }
];

const KEY_MAP: Record<string, string> = {
  Shift: "shift",
  " ": "space",
  Backspace: "backspace",
  Enter: "enter",
  HangulMode: "hangeul",
  Process: "hangeul",
  CapsLock: "hangeul",
  Lang1: "hangeul",
  Lang2: "hangeul"
};

const phase1Count = steps.filter((s) => s.phase === 1).length;

function KeyCap({
  children,
  wide = false
}: {
  children?: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-white border-2 border-gray-300 rounded-md shadow-[0_3px_0_#6b7280] text-xs font-black text-gray-700 shrink-0 h-8 ${wide ? "w-28" : "min-w-[2.5rem] px-2"}`}
    >
      {children}
    </div>
  );
}

function KeyVisual({ target }: { target: string }) {
  if (target === "shift") return <KeyCap>Shift</KeyCap>;
  if (target === "space") return <KeyCap wide />;
  if (target === "backspace")
    return (
      <div className="flex items-center justify-end pr-2 bg-white border-2 border-gray-300 rounded-md shadow-[0_3px_0_#6b7280] text-xs font-black text-gray-700 shrink-0 h-8 w-16">
        ←
      </div>
    );
  if (target === "hangeul") return <KeyCap>한/영</KeyCap>;
  if (target === "enter")
    return (
      <div style={{ filter: "drop-shadow(0 3px 0 #6b7280)" }}>
        <svg width="48" height="36" viewBox="0 0 60 44">
          <path
            d="M6,42 L54,42 A4,4 0 0 0 58,38 L58,6 A4,4 0 0 0 54,2 L32,2 A4,4 0 0 0 28,6 L28,18 A4,4 0 0 1 24,22 L6,22 A4,4 0 0 0 2,26 L2,38 A4,4 0 0 0 6,42 Z"
            fill="white"
            stroke="#9ca3af"
            strokeWidth="2"
          />
          <text
            x="30"
            y="38"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#374151"
          >
            Enter ↵
          </text>
        </svg>
      </div>
    );
  return null;
}

interface Props {
  onDone: () => void;
  onHome: () => void;
}

export function KeyboardLearn({ onDone, onHome }: Props) {
  const [stepIdx, setStepIdx] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const step = steps[stepIdx];
  const isLast = stepIdx === steps.length - 1;

  useEffect(() => {
    if (correct) return;

    const onDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const k = KEY_MAP[e.key];
      const isMatch = step.targetCode
        ? e.shiftKey && e.code === step.targetCode
        : k === step.target;
      if (isMatch) {
        setCorrect(true);
        setTimeout(() => {
          setCorrect(false);
          setShowGuide(false);
          if (isLast) {
            onDone();
          } else {
            setStepIdx((i) => i + 1);
          }
        }, 1500);
      } else if (
        (k || e.code.startsWith("Key") || e.code.startsWith("Digit")) &&
        !(step.targetCode && e.key === "Shift")
      ) {
        setWrongFlash(true);
        setTimeout(() => setWrongFlash(false), 400);
      }
    };

    window.addEventListener("keydown", onDown);
    return () => window.removeEventListener("keydown", onDown);
  }, [step, correct, isLast, onDone]);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50 flex flex-col px-6 py-6">
      {/* 상단 */}
      <div className="flex items-center justify-between max-w-2xl w-full mx-auto">
        <button
          onClick={onHome}
          className="px-3.5 py-1.5 bg-white border-2 border-purple-200 rounded-full text-xs font-bold text-purple-700 hover:bg-purple-50 transition-all cursor-pointer"
        >
          홈
        </button>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i < stepIdx
                  ? "bg-purple-400 w-4"
                  : i === stepIdx
                    ? "bg-purple-600 w-6"
                    : "bg-gray-200 w-4"
              } ${i === phase1Count ? "ml-3" : ""}`}
            />
          ))}
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem("keyboard_learn_done");
            sessionStorage.removeItem("keyboard-practice-state");
            setStepIdx(0);
            setCorrect(false);
            setWrongFlash(false);
            setShowGuide(false);
          }}
          className="px-3.5 py-1.5 bg-white border-2 border-gray-200 rounded-full text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all cursor-pointer"
        >
          처음부터 다시하기
        </button>
      </div>

      {/* 단계 안내 */}
      <div className="text-center mt-6">
        <span
          className={`inline-block px-8 py-4 rounded-full text-4xl font-black ${
            step.phase === 1
              ? "bg-purple-100 text-purple-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {step.phase === 1
            ? "🤔 어떤 키를 눌러야 할까요?"
            : "🔍 키보드에서 직접 찾아 눌러봐요!"}
        </span>
      </div>

      {/* 중앙 */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-2xl w-full mx-auto">
        <div className="flex items-end gap-3">
          <span className="text-5xl mb-1">🧒</span>
          <div className="flex flex-col items-end gap-2">
            <div
              className={`relative bg-white rounded-3xl rounded-bl-sm shadow-md px-7 py-5 border-2 transition-colors duration-150 ${
                correct
                  ? "border-green-400 correct-flash"
                  : wrongFlash
                    ? "border-red-400 shake"
                    : "border-transparent"
              }`}
            >
              <p className="text-2xl font-black text-gray-800">{step.bubble}</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowGuide((v) => !v)}
                className="text-sm text-white px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 font-bold cursor-pointer transition-colors"
              >
                {showGuide ? "🙈 힌트 숨기기" : "💡 힌트를 보려면 클릭하세요"}
              </button>
              {showGuide && step.hint && (
                <div className="absolute top-full right-0 mt-2 px-4 py-3 bg-gray-800 text-white text-base font-bold rounded-2xl shadow-lg whitespace-nowrap flex items-center gap-3 z-10">
                  <KeyVisual target={step.target} />
                  <span>{step.hint}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 피드백 */}
      <div className="h-24 flex items-center justify-center max-w-2xl w-full mx-auto">
        {correct && (
          <div className="bg-green-100 border-2 border-green-300 rounded-2xl px-6 py-3 text-center">
            <p className="text-lg font-black text-green-700">
              {step.phase === 1 && step.answer ? step.answer : "잘했어요! ✓"}
            </p>
          </div>
        )}
      </div>

      {/* 키보드 가이드 (fixed 하단, phase 1 전용) */}
      {showGuide && step.phase === 1 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t-2 border-purple-100 shadow-lg px-6 py-4 z-40">
          <KeyboardGuide />
        </div>
      )}
    </div>
  );
}
