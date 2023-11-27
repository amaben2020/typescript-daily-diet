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

const updateMenuName = (array: TMenus, key: "home" | "product") => {
  return array.map((elem) => {
    if (elem.key === key) {
      return {
        key: `I changed the ${elem.key} to jdvnsjdks`,
        label: elem.label,
      };
    } else {
      return {
        ...elem,
      };
    }
  });
};

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

type TProducts = {
  name: string;
  price: number;
};

type TDirection = "asc" | "desc";

let products = [
  { name: "IPhone", price: 900 },
  { name: "Samsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
  { name: "Amaraberry", price: 1700 },
] satisfies TProducts[];

// name or price: 1 means come second while -1 means come first
const sortProducts = (
  propName: keyof TProducts,
  direction: TDirection,
  array: TProducts[],
): TProducts[] => {
  return array.sort((a, b) => {
    if (direction === "asc") {
      return a[propName] > b[propName] ? 1 : -1;
    } else {
      return a[propName] < b[propName] ? 1 : -1;
    }
  });
};

console.log(sortProducts("name", "desc", products));

type TFoodStuff = {
  name: string;
  price: number;
};

const foodStuff = [
  { name: "Bread", price: 500 },
  { name: "Egg", price: 100 },
  { name: "Salad", price: 2500 },
  { name: "Rice", price: 900 },
  { name: "Plantain and Egg", price: 1200 },
];

// enable the user sort products by name or price
// enable the user still sort this based on asc or desc

const productSort = (
  products: TFoodStuff[],
  propName: keyof TFoodStuff,
  direction: "asc" | "desc",
) => {
  if (Array.isArray(products)) {
    return products.sort((fP, sP): any => {
      if (fP[propName] < sP[propName]) {
        return direction === "asc" ? -1 : 1;
      } else if (fP[propName] > sP[propName]) {
        return direction === "desc" ? -1 : 1;
      }
    });
  }
};

console.log("SORT", productSort(foodStuff, "name", "asc"));

// const nums = [23, 556, 221, 44, 2, 99];
// console.log(Math.min(...nums));

// checking if an array has the exact properties of a variable
const data = [
  { title: "Article 1", tags: ["AI", "Technology"] },
  { title: "Article 2", tags: ["AI", "Science"] },
  { title: "Article 3", tags: ["Technology"] },
  { title: "Article 4", tags: ["AI", "Technology", "Science"] },
];

// get the item with tag with ["AI", "Science"]

const tagsToFind = ["AI", "Science"];

const filterItemByTag = () =>
  data.find((elem) => elem.tags.every((item) => tagsToFind.includes(item)));

const alphabets = ["a", "b", "c"].every((elem) => {
  console.log("Elem in every", elem);
  return elem.includes(elem);
});
console.log("Alphabets", alphabets);
console.log(filterItemByTag());

let result = 0;

foodStuff.forEach((item) => {
  if (item.price > result) {
    result = item.price;
  }
});

console.log(result);

type TShopData = {
  id: string;
  title: string;
  price: number;
};

const shopData: Array<TShopData> = [
  { id: "1", title: "Iphone", price: 300 },
  { id: "2", title: "Oraimo watch", price: 800 },
  { id: "3", title: "Megido", price: 1300 },
];

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

const mergeRivers = (base: string[], args: string[]) => {
  return base.concat(args);
};

console.log(mergeRivers(rivers, moreRivers));

const englishParams = [{ slug: "cities" }, { slug: "experiences" }];
const deutscheParams = [{ slug: "stadea" }, { slug: "enfrhugen" }];

console.log(englishParams.concat(deutscheParams));

const setter = (prop: string) => ({ firstName: prop });

const setName = (name: string) => setter(name);

console.log(setName("Benneth Uzor"));
