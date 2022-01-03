export const capitalizeString = (str) =>
  str
    .split(/ /gi)
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''))
    .join(' ');
