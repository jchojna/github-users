export const getRemainingSeconds = (
  secondsTotal: number,
  elapsedPercents: number,
  decimals: number = 2,
) => {
  return (secondsTotal - elapsedPercents / (100 / secondsTotal)).toFixed(
    decimals,
  );
};

// Here we assume that progress bar jumps by 1% on each interval
export const getTimerInterval = (delayInSec: number) => {
  return (delayInSec * 1000) / 100;
};
