
export function getRandomIntInclusive(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDimensions(): {width: string, height: string} {
  return {
    width: `${getRandomIntInclusive(2, 4)}00`,
    height: `${getRandomIntInclusive(2, 4)}00`
  };
}
