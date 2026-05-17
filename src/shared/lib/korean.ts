export function eulReul(word: string): string {
  const last = word[word.length - 1];
  const code = last.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) {
    return (code - 0xac00) % 28 === 0 ? '를' : '을';
  }
  return '를';
}
