export const truncateString = (string: string, num: number) => {
  if (string.length <= num) {
    return string;
  }
  return string.slice(0, num) + "...";
};
