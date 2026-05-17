import { useState, useEffect } from "react";

function Key({
  children,
  className = "",
  pressed = false
}: {
  children?: React.ReactNode;
  className?: string;
  pressed?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 rounded-lg text-xs font-bold select-none shrink-0 h-9 transition-all duration-75 ${
        pressed
          ? "bg-orange-100 border-orange-400 text-orange-700 shadow-none translate-y-0.75"
          : "bg-gray-100 border-gray-400 text-gray-700 shadow-[0_3px_0_#6b7280]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function EnterKey({ pressed }: { pressed: boolean }) {
  const fill = pressed ? "#ffedd5" : "#f3f4f6";
  const stroke = pressed ? "#fb923c" : "#9ca3af";
  const textColor = pressed ? "#c2410c" : "#374151";
  const shadow = pressed ? "none" : "drop-shadow(0 3px 0 #6b7280)";

  return (
    <div
      className="shrink-0 transition-all duration-75"
      style={{
        filter: shadow,
        transform: pressed ? "translateY(3px)" : "translateY(0)"
      }}
    >
      <svg width="60" height="44" viewBox="0 0 60 44">
        <path
          d="M6,42 L54,42 A4,4 0 0 0 58,38 L58,6 A4,4 0 0 0 54,2 L32,2 A4,4 0 0 0 28,6 L28,18 A4,4 0 0 1 24,22 L6,22 A4,4 0 0 0 2,26 L2,38 A4,4 0 0 0 6,42 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
        />
        <text
          x="30"
          y="38"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill={textColor}
        >
          Enter ↵
        </text>
      </svg>
    </div>
  );
}

const KEY_MAP: Record<string, string> = {
  Shift: "shift",
  " ": "space",
  Backspace: "backspace",
  Enter: "enter",
  HangulMode: "hangeul",
  Process: "hangeul",
  CapsLock: "hangeul",
  Lang1: "hangeul",
  Lang2: "hangeul",
};

export function KeyboardGuide() {
  const [pressed, setPressed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      const k = KEY_MAP[e.key];
      if (k) setPressed((prev) => new Set([...prev, k]));
    };
    const onUp = (e: KeyboardEvent) => {
      const k = KEY_MAP[e.key];
      if (k)
        setPressed((prev) => {
          const n = new Set(prev);
          n.delete(k);
          return n;
        });
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  const p = (k: string) => pressed.has(k);

  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <Key className="w-14" pressed={p("hangeul")}>
            <span className="text-[10px] leading-tight text-center">한/영</span>
          </Key>
          <p className="text-sm text-gray-500">한글이나 영어로 바꿔요.</p>
        </div>
        <div className="flex items-center gap-4">
          <Key className="w-20" pressed={p("shift")}>
            Shift
          </Key>
          <p className="text-sm text-gray-500">
            쌍자음을 쓰고 싶을 땐 꾹 누르고 글자를 함께 눌러요.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Key className="w-20 justify-end pr-3" pressed={p("backspace")}>
            <span className="text-base">←</span>
          </Key>
          <p className="text-sm text-gray-500">글씨를 지울 때 사용해요.</p>
        </div>
        <div className="flex items-center gap-4">
          <Key className="w-40" pressed={p("space")} />
          <p className="text-sm text-gray-500">띄어쓰기를 할 때 사용해요.</p>
        </div>
        <div className="flex items-center gap-4">
          <EnterKey pressed={p("enter")} />
          <p className="text-sm text-gray-500">줄을 바꾸고 싶을 때 사용해요.</p>
        </div>
      </div>
    </div>
  );
}
