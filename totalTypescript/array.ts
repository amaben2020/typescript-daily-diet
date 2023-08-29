import { list, officers } from "./data/list";
// const dataset = require("./data/complex-dataset.json");
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

// quickly check here before proceeding in the app
export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

type TUserInfo<S> = {
  [key: string | number]: S | Post[] | number;
};

const userInfo = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
} satisfies TUserInfo<string>;

console.log(userInfo);

// task: type out the list without error using generics

// verbose
type TList1 = {
  name: string;
  company: string;
  designation: string;
  show: string;
  friends?: {
    name: string;
    age: number;
    features: {
      eyes: string;
    };
  }[];
}[];

const item: TList1 = list;

console.dir(item, { depth: null });

// const info = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       return resolve(dataset);
//     }, 100);
//   } catch (error) {
//     reject(error);
//     console.log(error);
//   }
// });

type TMenus = Record<string, string | boolean>[];

const menus: TMenus = [
  { key: "home", label: "Home" },
  { key: "product", label: "Product" },
  { key: "about", label: "About" },
  { key: "secure", label: "Secure", disabled: true },
];

const toggleDisable = (menu: TMenus) => {
  return menu
    .map((elem) => {
      if (elem.key === "home") {
        return {
          ...elem,
          disabled: true,
        };
      } else {
        return {
          ...elem,
          disabled: false,
        };
      }
    })
    .map((elem) => {
      if (elem.disabled) {
        return {
          ...elem,
          CLICKED: true,
        };
      } else {
        return {
          ...elem,
        };
      }
    });
};
console.log("Toggle", toggleDisable(menus));

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
//   "#",
//   "!",
// ]);
// result should == "apples, pears\ngrapes\nbananas"

type TOfficers = Array<Record<string, string | number>>;

const renamer = (
  elem: Record<string, string | number>,
  itemToReplace: string,
  stuffToReplaceWith: string,
) => {
  if (
    String(elem.username).includes(itemToReplace) ||
    elem.username === itemToReplace
  ) {
    elem.username = stuffToReplaceWith;
  }
  return elem;
};

const renderAndRenameOfficers = (officers: TOfficers) => {
  return officers.map((elem) =>
    renamer(elem, "Samantha", "Benneth the algo God"),
  );
};

console.log(
  renderAndRenameOfficers(officers).map((elem) => {
    if (elem.username.toString().includes("algo")) {
      return {
        ...elem,
        username: "Benneth is really an algo God ",
      };
    } else {
      return { ...elem };
    }
  }),
);

function cacher() {
  const cache: Record<string, string | number> = {};

  const add = (key: string, value: string | number) => {
    console.log("cache in add", cache);
    cache[key] = value;
  };
  const deleter = (key: string) => delete cache[key];
  console.log("cache in", cache);
  return {
    cache: cache,
    add,
    deleter,
  };
}

// { a: value,  } delete cache[key]
cacher().add("a", "first cache");
// console.log("2nd", cacher().add("a", "first cache"));
console.log("1st", cacher().cache);
// console.log("2nd", cacher().add("b", "second cache"));
// console.log("3rd", cacher().deleter("b"));
