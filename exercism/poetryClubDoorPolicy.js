export function frontDoorResponse(line) {
  // throw new Error('Implement the frontDoorResponse function');
  return line[0];
}

export function frontDoorPassword(word) {
  // throw new Error('Implement the frontDoorPassword function');
  let password = word.toLowerCase();
  return password[0].toUpperCase() + password.substring(1);
}

export function backDoorResponse(line) {
  // throw new Error('Implement the backDoorResponse function');
  let backResponse = line.trim().slice(-1)
  return backResponse;
}

export function backDoorPassword(word) {
  // throw new Error('Implement the backDoorPassword function');
  let capFirstLetter = word.charAt(0).toUpperCase();
  let combineWord = word.slice(1)
  return `${capFirstLetter}${combineWord}, please`
}
