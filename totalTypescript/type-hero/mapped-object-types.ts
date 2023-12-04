// In mathematics, a "map" is a function that associates each element in one set with an element. That's where we get this usage of the word in computer science.

// type begins a type declaration.
// MovieInfoByGenre is the name we gave to our type
// <T> defines generic parameter we named T
// = { begins our type
// [ starts an index signature
// K is the name we're giving to the value in this index signature.
// K (for "Key") and P (for "Property") are very common names to use in this particular situation. While it's not often the best choice, you'll see it around (including in TypeScript's own builtin types), so it's worthwhile to just roll with it if you see it. If you can make a more descriptive name, you should.
//✅ in is a special TypeScript operator for mapping. It tells TypeScript that K represents a single item in a larger set of things defined on the right side of the in operator.
// keyof T is a union of all the keys of the T object.
// : T[K] is regular type indexing. The value, K, can here be thought of as a singular property in a sort of loop. We take some individual value of K (which are keys of T) and then index T with that key, thereby producing a value that matches the value in T for that K.
// ; it might at first seem strange, but if you take a step back, this is just a property: value line in an object type, so we end it with a semicolon like we normally would with types in TypeScript.
// }; ends the type declaration.

type MoviesByGenre = {
  action: "Die Hard";
  comedy: "Groundhog Day";
  sciFi: "Blade Runner";
  fantasy: "The Lord of the Rings: The Fellowship of the Ring";
  drama: "The Shawshank Redemption";
  horror: "The Shining";
  romance: "Titanic";
  animation: "Toy Story";
  thriller: "The Silence of the Lambs";
};

type TLogMovie<T> = {
  // key                 :      value
  [MovieKey in keyof T]: T[MovieKey];
};

//usage
const movies: TLogMovie<MoviesByGenre> = {
  action: "Die Hard",
  comedy: "Groundhog Day",
  sciFi: "Blade Runner",
  fantasy: "The Lord of the Rings: The Fellowship of the Ring",
  drama: "The Shawshank Redemption",
  horror: "The Shining",
  romance: "Titanic",
  animation: "Toy Story",
  thriller: "The Silence of the Lambs",
};

console.log(movies.animation);

//Example 2:

type MovieInfoByGenre<T> = {
  [K in keyof T]: {
    name: string;
    year: number;
    director: string;
  };
};

const test_MoviesInfoByGenre: MovieInfoByGenre<MoviesByGenre> = {
  action: {
    name: "Die Hard",
    year: 1988,
    director: "John McTiernan",
  },
  comedy: {
    name: "Groundhog Day",
    year: 1993,
    director: "Harold Ramis",
  },
  sciFi: {
    name: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
  },
  fantasy: {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
  },
  drama: {
    name: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
  },
  horror: {
    name: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
  },
  romance: {
    name: "Titanic",
    year: 1997,
    director: "James Cameron",
  },
  animation: {
    name: "Toy Story",
    year: 1995,
    director: "John Lasseter",
  },
  thriller: {
    name: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
  },
};
