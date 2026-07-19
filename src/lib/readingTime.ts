export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};
