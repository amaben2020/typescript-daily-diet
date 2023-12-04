// The result of keyof is always a union.
// Even if there are 0 or 1 objects, it doesn't hurt to think of the result as a union. If there are no elements in the result, the type will be never (which is the empty set in "Set theory" terminology). When there's only one key then the resulting type will be a single primitive or literal type.

const casettesByArtist = {
  "Alanis Morissette": 2,
  "Mariah Carey": 8,
  Nirvana: 3,
  Oasis: 2,
  Radiohead: 3,
  "No Doubt": 3,
  "Backstreet Boys": 3,
  "Spice Girls": 2,
  "Green Day": 2,
  "Pearl Jam": 5,
  Metallica: 5,
  "Guns N' Roses": 2,
  U2: 3,
  Aerosmith: 4,
  "R.E.M.": 4,
  Blur: 3,
  "The Smashing Pumpkins": 5,
  "Britney Spears": 3,
  "Whitney Houston": 3,
};

// But that's pretty Rough. You certainly would not want to retype all those artist names. What if you forget one? What if you misspell one?

//Bad approach
type Artists =
  | "Alanis Morissette"
  | "Mariah Carey"
  | "Nirvana"
  | "Oasis"
  | "Radiohead"
  | "No Doubt"
  | "Backstreet Boys"
  | "Spice Girls"
  | "Green Day"
  | "Pearl Jam"
  | "Metallica"
  | "Guns N' Roses"
  | "U2"
  | "Aerosmith"
  | "R.E.M."
  | "Blur"
  | "The Smashing Pumpkins"
  | "Britney Spears"
  | "Whitney Houston";

// Excellent, just use the knowledge from typeof to extract a type then get the keys
type Artist = keyof typeof casettesByArtist;

// usage
const getArtiste = (obj: typeof casettesByArtist, key: Artist) => {
  return obj[key];
};
console.log(getArtiste(casettesByArtist, "Britney Spears"));
