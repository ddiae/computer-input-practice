import { useState, useRef, useEffect } from 'react';
import type { WordUnit, WordStatus, Mode } from '../../shared/types';
import { checkAnswer } from '../../shared/lib/checker';

interface Props {
  word: WordUnit;
  status: WordStatus;
  mode: Mode;
  onStatusChange: (id: string, status: WordStatus) => void;
}

function DiffTooltip({ wrong, answer }: { wrong: string; answer: string }) {
  const wrongChars = [...wrong];
  const answerChars = [...answer];
  const len = Math.max(wrongChars.length, answerChars.length);

  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150">
      <div className="bg-gray-800 text-white rounded-2xl px-4 py-3 shadow-xl whitespace-nowrap flex flex-col items-center gap-2 text-sm font-bold">
        {/* 틀린 글자 */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: len }, (_, i) => {
            const w = wrongChars[i] ?? '';
            const a = answerChars[i] ?? '';
            const diff = w !== a;
            return (
              <span key={i} className={diff ? 'text-red-400 underline' : 'text-white'}>
                {w || ' '}
              </span>
            );
          })}
        </div>
        <span className="text-gray-400 text-xs">↓ 이렇게 고쳐봐요!</span>
        {/* 정답 */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: len }, (_, i) => {
            const w = wrongChars[i] ?? '';
            const a = answerChars[i] ?? '';
            const diff = w !== a;
            return (
              <span key={i} className={diff ? 'text-green-400 font-black' : 'text-white'}>
                {a || ' '}
              </span>
            );
          })}
        </div>
      </div>
      {/* 말풍선 꼬리 */}
      <div className="w-3 h-3 bg-gray-800 rotate-45 mx-auto -mt-1.5 rounded-sm" />
    </div>
  );
}

export function WordBlock({ word, status, mode, onStatusChange }: Props) {
  const [inputValue, setInputValue] = useState(word.text);
  const [wrongText, setWrongText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const isClickable = mode === 'levelup' ? status !== 'correct' : word.isWrong && status !== 'correct';

  useEffect(() => {
    if (status === 'input' && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [status]);

  function handleClick() {
    if (!isClickable || status === 'correct') return;
    setInputValue(status === 'wrong' ? wrongText : word.text);
    onStatusChange(word.id, 'input');
  }

  function handleSubmit() {
    const correct = checkAnswer(inputValue, word.answer);
    if (correct) {
      onStatusChange(word.id, 'correct');
    } else {
      setWrongText(inputValue);
      onStatusChange(word.id, 'wrong');
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') onStatusChange(word.id, 'idle');
  }

  if (status === 'correct') {
    if (mode === 'levelup') {
      return (
        <span className="inline-flex items-center px-2.5 py-1.5 text-2xl font-black text-gray-800">
          {word.answer}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-1.5 rounded-2xl text-2xl font-black text-green-600 bg-green-100 border-2 border-green-300">
        {word.answer}
      </span>
    );
  }

  if (status === 'input') {
    const charCount = Math.max(inputValue.length, word.answer.length, 2);
    return (
      <span className="inline-flex items-center gap-1.5">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-2 border-purple-400 rounded-2xl px-2.5 py-1.5 text-2xl font-black outline-none focus:border-purple-600 bg-purple-50"
          style={{ width: `${charCount * 1.6 + 2}em` }}
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-500 hover:bg-purple-600 shadow-[0_4px_0_#6b21a8] active:translate-y-1 active:shadow-[0_0px_0_#6b21a8] text-white rounded-xl px-3 py-1.5 text-xl font-black transition-all duration-100 shrink-0"
        >
          확인
        </button>
      </span>
    );
  }

  const displayText = status === 'wrong' ? wrongText : word.text;
  const isWrongHighlight = (mode === 'normal' && word.isWrong) || status === 'wrong';
  const showTooltip = isWrongHighlight && isClickable;
  const tooltipWrong = status === 'wrong' ? wrongText : word.text;

  return (
    <span className="relative group inline-flex">
      <button
        onClick={handleClick}
        disabled={!isClickable}
        className={[
          'inline-flex items-center px-2.5 py-1.5 rounded-2xl text-2xl font-black transition-all duration-100',
          status === 'wrong' ? 'shake' : '',
          isClickable
            ? isWrongHighlight
              ? 'text-red-500 border-2 border-red-300 bg-red-50 hover:bg-red-100 cursor-pointer shadow-[0_3px_0_#fca5a5]'
              : 'text-gray-700 border-2 border-transparent hover:border-gray-200 hover:bg-gray-100 cursor-pointer'
            : 'text-gray-700 cursor-default',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {displayText}
      </button>
      {showTooltip && (
        <DiffTooltip wrong={tooltipWrong} answer={word.answer} />
      )}
    </span>
  );
}
