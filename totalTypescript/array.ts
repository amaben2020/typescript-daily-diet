import { list } from "./data/list";
const dataset = require("./data/complex-dataset.json");
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

const info = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      return resolve(dataset);
    }, 100);
  } catch (error) {
    reject(error);
    console.log(error);
  }
});

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

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
  "#",
  "!",
]);
// result should == "apples, pears\ngrapes\nbananas"
