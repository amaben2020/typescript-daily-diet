//Utility types: They take an interface or type and transform their properties
//Partials
interface StarShip {
  name: string;
  enableHyperDrive: boolean;
}

const StarShipObject = {
  name: "Starship",
  enableHyperDrive: false,
};

//Partial: makes all the properties optional for Typescript
const updateStarship = (
  name: string,
  starship: Partial<StarShip>,
  key: "name"
) => (starship[key] = name);

console.log(updateStarship("amaben", StarShipObject, "name"));
console.log(StarShipObject);

//Partial: makes all the properties optional for Typescript
// const updateStarship2 = (name: string, starship: Readonly<StarShip>, key: 'name' ) =>  starship[key] = name

// console.log(updateStarship2('amaben', StarShipObject, 'name'))
// console.log(StarShipObject)

//Maps and records
const starships: Record<string, StarShip> = {
  Starship: {
    name: "Starship",
    enableHyperDrive: false,
  },
  MillenniumFalcon: {
    name: "Millennium Falcon",
    enableHyperDrive: true,
  },
};

console.log(starships.Starship.enableHyperDrive);

//Pick: takes an interface and returns a subset of the properties. Here, you create or return a new type with only the properties declared on the right. Pick<Type, "x">
type StarshipNameOnly = Pick<StarShip, "name">;
type StarshipEnableHyperJumpOnly = Omit<StarShip, "enableHyperDrive">;

const getNamesFromStarships = (
  starships: StarshipEnableHyperJumpOnly | StarshipNameOnly
) => {
  for (let key in starships) {
    if (key === "name") {
      return starships[key];
    }
  }
};
console.log("res", getNamesFromStarships(StarShipObject));

//Omit: the opposite of Pick

//Exclude: takes an interface and returns a subset of the properties. Here, you create or return a new type with all the properties except the ones declared on the right. Exclude<Type, "x"> Subrtaction
type AvailableDrinks = "coke" | "pepsi" | "7up" | "sprite";

let BenDrink: AvailableDrinks;
BenDrink = "coke";

type DrinksJaneDoesntLike = "coke" | "sprite";
let JaneDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JaneDrink = "7up";

//NonNullable: takes a type and returns a new type with all the nullable properties removed. Here, you create or return a new type with all the nullable properties removed. NonNullable<Type>

interface StarShipProps {
  color?: "blue" | "red" | "green";
}
//returnType

function paintStarship(color: NonNullable<StarShipProps["color"]>) {
  return color;
}

console.log("COLOR", paintStarship("blue"));

type CustomerData<T> = {
  [U in keyof T]: T[U]
}

const customerData = [
  {
    id: 16641,
    name: "Kevin",
    lastname: "Parra",
    status: "active",
    files: [
      {
        filename: "Resume-Kevin-Parra.pdf",
        file_uploaded: "2022-05-05 01:00:37"
      }
    ],
  }
]



