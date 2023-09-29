// Generic types receive other types as arguments and return a new type. This promotes reusability. They allow us to build data structures without needing to set a concrete time for them to execute at compile time.

//Resources: a. https://devtrium.com/posts/react-typescript-using-generics-in-react

function removeFirstEntryFromArray<T>(arr: T[]): T[] {
  return arr.splice(1);
}

const strArray: string[] = ["Santa", "Claus", "is", "coming", "to", "town"];

const newStrArray = removeFirstEntryFromArray<string>(strArray);

let str = "";

newStrArray.forEach((elem) => (str += elem.toUpperCase()));

console.log(str);

//Storyblok Sections : AIM: understand what's going on here
// type MainHeroType = StoryblokBlok<"section_mainHero"> & {
//   label?: string;
// };

// Answer: This means that MainHero component receives a type with optional label and every other thing that comes from Storyblok.

// type FeaturedScientificBoardType =
//   StoryblokBlok<"section_featuredScientificBoard"> & {
//     heading?: string;
//     subheading?: string;
//     btn_label?: string;
//     list?: {
//       full_slug: string;
//     }[];
//   };

type Box<T> = {
  content?: T;
  diff?: T;
};
// could be reused by other functions in the app, one good use case is Storyblok

//Think of Box as a template for a real type, where Type is a placeholder that will get replaced with some other type. When TypeScript sees Box<string>, it will replace every instance of Type in Box<Type> with string, and end up working with something like { contents: string }. In other words, Box<string> and our earlier StringBox work identically.

const box: Box<number> = {
  diff: 4,
};

const box2: Box<string> = {
  content: "Amaben",
};

type TStatus<T, U, V> = {
  name: string;
  options: [T, U, V];
};

const statusOptions: TStatus<string, number, boolean> = {
  name: "s",
  options: ["", 1, false],
};

// type User = (StatusOption) => {
//   return {
//     name: string;
//     status: StatusOptions;
//   }
// }

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}
const greeting: string = identity<string>("Hello World!");

type TBooks = {
  name: string;
  booksWritten: number;
};

const books = [
  {
    name: "Ben",
    booksWritten: 22,
  },

  {
    name: "Jayke",
    booksWritten: 2,
  },
];

const getBookAuthor = (books: TBooks[], name: string) =>
  books.find((book) => book.name === name);

const filterAuthor = books.filter(
  (elem) => elem.name === getBookAuthor(books, "Ben")?.name,
);

console.log(filterAuthor);

type TAuthor = typeof filterAuthor;

const books2 = [
  {
    name: "Ben",
    booksWritten: 22,
  },

  {
    name: "Jayke",
    booksWritten: 2,
  },
] satisfies TAuthor;

// make a Promise
const dataFromServer: Promise<Array<Record<string, string | number>>> =
  new Promise((res, rej) => {
    if (
      [
        {
          name: "Ben",
          booksWritten: 22,
        },

        {
          name: "Jayke",
          booksWritten: 2,
        },
      ]
    ) {
      res([
        {
          name: "Ben",
          booksWritten: 22,
        },

        {
          name: "Jayke",
          booksWritten: 2,
        },
      ]);
    } else {
      rej("Something went wrong");
    }
  });

// make a function that returns an awaited

const logDataFromServer = async () => {
  try {
    const data: Awaited<Array<Record<string, string | number>>> =
      await dataFromServer;

    console.log("DATA", data);
  } catch (error) {
    console.log(error);
  }
};
