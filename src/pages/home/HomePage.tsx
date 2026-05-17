import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initState } from "../../entities/practice-set/model";
import {
  TEACHER_PASSWORD,
  TEACHER_MODE_KEY,
  isTeacherMode
} from "../../shared/config/teacher";

export default function HomePage() {
  const navigate = useNavigate();
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [teacherActive, setTeacherActive] = useState(() => isTeacherMode());

  // Shift + T 단축키로 선생님 모드 모달 열기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "T") {
        e.preventDefault();
        setPassword("");
        setPasswordError("");
        setShowTeacherModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTeacherSubmit = () => {
    if (password === TEACHER_PASSWORD) {
      sessionStorage.setItem(TEACHER_MODE_KEY, "1");
      setTeacherActive(true);
      setShowTeacherModal(false);
    } else {
      setPasswordError("비밀번호가 틀렸어요!");
      setPassword("");
    }
  };

  const handleTeacherExit = () => {
    sessionStorage.removeItem(TEACHER_MODE_KEY);
    setTeacherActive(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50 flex flex-col items-center justify-center px-6 gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-8xl drop-shadow-sm">⌨️</div>
        <h1 className="text-3xl font-black text-gray-800">키보드 연습</h1>
        <p className="text-sm text-gray-500">
          틀린 어절을 찾아 올바르게 고쳐봐요!
        </p>

        {/* 선생님 모드 활성 표시 */}
        {teacherActive && (
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-300 rounded-2xl">
            <span className="text-sm font-black text-green-700">
              🔓 선생님 모드
            </span>
            <button
              onClick={handleTeacherExit}
              className="text-xs font-bold text-green-500 hover:text-green-700 transition-colors cursor-pointer"
            >
              해제
            </button>
          </div>
        )}
      </div>

      <div className="w-full max-w-xs flex flex-col items-center gap-3">
        <button
          onClick={() => {
            initState("normal");
            navigate("/practice");
          }}
          className="w-full py-5 rounded-3xl text-xl font-black bg-purple-400 text-white shadow-[0_5px_0_#7c3aed] active:translate-y-1.25 active:shadow-[0_0px_0_#7c3aed] transition-all duration-100 cursor-pointer"
        >
          🚀 시작하기
        </button>
      </div>

      {/* 선생님 모드 비밀번호 모달 */}
      {showTeacherModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="text-xl font-black text-gray-800">선생님 모드</h3>
              <p className="text-sm text-gray-500 mt-1">
                비밀번호를 입력하세요
              </p>
            </div>
            <input
              type="password"
              value={password}
              placeholder="비밀번호 입력"
              autoFocus
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleTeacherSubmit()}
              className={`w-full border-2 rounded-xl px-4 py-3 text-base text-center focus:outline-none transition-colors ${
                passwordError
                  ? "border-red-400 shake"
                  : "border-gray-200 focus:border-purple-400"
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm font-bold text-center mt-2">
                {passwordError}
              </p>
            )}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowTeacherModal(false)}
                className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                취소
              </button>
              <button
                onClick={handleTeacherSubmit}
                className="flex-1 py-3 rounded-xl font-black text-white bg-purple-400 shadow-[0_4px_0_#7c3aed] active:translate-y-1 active:shadow-[0_0px_0_#7c3aed] transition-all duration-100 cursor-pointer"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 히든 선생님 모드 버튼 (좌하단 아주 흐리게) */}
      <button
        onClick={() => {
          setPassword("");
          setPasswordError("");
          setShowTeacherModal(true);
        }}
        className="fixed bottom-3 right-3 text-xs text-gray-300 hover:text-gray-400 transition-colors cursor-pointer"
      >
        T
      </button>
    </div>
  );
}
