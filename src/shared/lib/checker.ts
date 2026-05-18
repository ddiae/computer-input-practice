export const checkAnswer = (input: string, answer: string): boolean => {
  const normalize = (s: string) => s.trim().replace(/\.$/, '');
  return normalize(input) === normalize(answer);
};
