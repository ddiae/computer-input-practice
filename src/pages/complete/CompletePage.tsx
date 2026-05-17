import { useNavigate } from 'react-router-dom';
import { loadState, clearState, initState } from '../../entities/practice-set/model';
import Button from '../../shared/ui/Button';
import Card from '../../shared/ui/Card';
import { pageBg } from '../../shared/tokens/colors';

export function CompletePage() {
  const navigate = useNavigate();
  const state = loadState();
  const isNormalMode = state?.mode === 'normal';

  return (
    <div className={`min-h-screen ${pageBg} flex flex-col items-center justify-center p-6`}>
      <Card variant="white" className="max-w-sm w-full flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-7xl animate-bounce">🏆</span>
          <h1 className="text-4xl font-black text-purple-700">완성!</h1>
          <div className="flex gap-2 text-3xl">⭐⭐⭐</div>
          <p className="text-lg text-gray-500">
            {isNormalMode
              ? '일반 모드를 모두 완료했어요! 정말 잘했어요! 🎉'
              : '레벨업 모드까지 완료했어요! 최고예요! 🌟'}
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Button color="sky" onClick={() => { clearState(); navigate('/'); }}>
            🔄 처음으로
          </Button>
          {isNormalMode && (
            <Button color="pink" onClick={() => { initState('levelup'); navigate('/practice'); }}>
              👑 레벨업 도전!
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
