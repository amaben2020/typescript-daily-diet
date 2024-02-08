// literals simply mean must be of this type not just any string, number, boolean ar any primitive.

type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const isItPartyTime = (day: Days) => {
  // combining cases
  switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
      return "definitely party time";

    default:
      return "prolly lay low for now";
  }
};

isItPartyTime("Monday");

type LiteralString = "chocolate chips";
type LiteralTrue = true;
type LiteralNumbers = 1 | 2 | 3 | 4 | 5 | 6;
type LiteralObject = {
  name: "chocolate chips";
  inStock: true;
  kilograms: 5;
};
type LiteralFunction = (a: number, b: number) => number;

const literalString = "Ziltoid the Omniscient";
const literalTrue = true;
const literalNumber = Math.random() > 0.5 ? 1 : 2;
const literalObject = {
  origin: "string",
  command: "string",
  item: "string",
  time: "string",
};
const literalFunction = (a: number, b: string): number | string => a + b;

type TypeAlmostPi = 3.141592653589793;

const almostPi: TypeAlmostPi = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973;

// the variable must literally be of that type
type Pets = "Dog" | "Cat";
const pets: Pets = "Cat";
