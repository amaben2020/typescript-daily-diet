interface CarData {
  maxSpeed: number
  team: string
}

const car = {
  maxSpeed: 100,
  team: 'ferrari'
}

const logCarInfo = (car: CarData) => {
  switch (car.maxSpeed) {
    case 200:
      console.log(car.team)
      break;
    case 100:
      console.log(car.maxSpeed)
    default:
      const _never: never = car
      return _never
  }
}

//generic object types
// function printInfo(someObject: { [key: string]: string | number }) {
//   console.log(someObject);
// }

// console.log(printInfo(car))


