export const indexRang = (
  min: number,
  max: number,
  index: number,
  slider: number
) => {
  // 0 as a start
  if (Math.abs(index) > max - slider) return -(max - slider);
  if (index > min) return min;
  return index;
};