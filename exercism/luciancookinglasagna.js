export const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(b) {
  return EXPECTED_MINUTES_IN_OVEN - b;
}

export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

export function totalTimeInMinutes(a, b) {
  return preparationTimeInMinutes(a) + b;
}
