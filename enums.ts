// Enumerations (a.k.a. enums) allow you to create limited sets of named constants that have something in common. Such constants can be numbers or strings.
enum Weekdays {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

// This listing defines a new type, Weekdays, that has a limited number of values. We initialized each enum member with a numeric value, and days of the week can be referred to using dot notation:
let dayOff = Weekdays.Tuesday;

enum Weekday {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
// auto increment
console.log(Weekday.Wednesday);

// you could introduce bugs cos you may mistakenly use the wrong string i.e "ftOC" instead of "FtoC"
function convertTemperature(temp: number, fromTo: string): number {
  return "FtoC" === fromTo
    ? ((temp - 32) * 5.0) / 9.0
    : (temp * 9.0) / 5.0 + 32;
}
console.log(`70F is ${convertTemperature(70, "FtoC")}C`);
console.log(`21C is ${convertTemperature(21, "CtoF")}F`);
console.log(`35C is ${convertTemperature(35, "ABCD")}F`);

enum Direction {
  FtoC,
  CtoF,
}
function convertTemperatureWithEnum(temp: number, fromTo: Direction): number {
  return Direction.FtoC === fromTo
    ? ((temp - 32) * 5.0) / 9.0
    : (temp * 9.0) / 5.0 + 32;
}
console.log(`70F is ${convertTemperatureWithEnum(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperatureWithEnum(21, Direction.CtoF)}F`);

// Say you’re programming a computer game where the player can move in four
// directions.
enum Directionn {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Grade {
  pass = 1,
  fail = 2,
}

const getReward = (grade: number) => {
  switch (grade) {
    case Grade.pass:
      return "pass";
    case Grade.fail:
      return "fail";
    default:
      return "unknown";
  }
};

console.log(getReward(Grade.fail));
