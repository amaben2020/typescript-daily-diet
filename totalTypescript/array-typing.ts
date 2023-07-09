// advance array manipulation

import { books } from "./data/books";

export type TBooks = {
  _uid: string;
  labels?: string[];
  image: Record<string, string>;
  title: string;
  component: string;
  description: string;
  resource_asset: Record<string, string | number | boolean>;
  resource_video_url: string;
  _editable: string;
};

const getBookWithLabels = (books: TBooks[]) => {
  return books.filter((book: TBooks) =>
    book.labels?.find((elem) => elem === "grant"),
  );
};

const getBookWithLabels2 = (books: TBooks[]) => {
  return books.filter((book: TBooks) => book.labels?.includes("grant"));
};

// console.log(getBookWithLabels(books));
// console.log(getBookWithLabels2(books));

const addToCart = (id: string) => {
  const cart: TBooks[] = [];

  books.map((elem) => {
    if (elem._uid === id) {
      cart.push(elem);
    }
    return elem;
  });

  return cart;
};

console.log("cart", addToCart("e558394f-75df-4dc2-9949-6a6e4e2f2fc6"));

// practice includes with advanced examples i.e active url

type DataSourceValues = "books" | "infographics" | "videos" | "all";
type DataSourceSlug<T> = {
  name: string;
  value: T;
};

const dataSource: DataSourceSlug<DataSourceValues>[] = [
  {
    name: "Books",
    value: "books",
  },
  {
    name: "Infographics",
    value: "infographics",
  },
  {
    name: "Videos",
    value: "videos",
  },
];

const url = "http://route/resources/infographics";

const findActiveCategory = () => {
  return (
    (dataSource.length &&
      [...dataSource].find((elem) => url.includes(elem.value))) ??
    "all"
  );
};

// console.log("active", findActiveCategory());

const findActiveCategory2 = () => {
  let matches;
  dataSource.forEach((elem) => {
    if (url.includes(elem.value)) {
      matches = elem.value ?? "all";
    }
  });
  return matches;
};
// console.log("method 2", findActiveCategory2());

//includes is very powerful for string manipulation. Stops us from always extrapolating stuff and does this recursively

const findActiveCategory3 = (() => {
  const route = new URL(url);

  console.log(route);

  const idx = dataSource.findIndex(
    (elem) => elem.value === route.pathname.split("/")[2],
  );

  return (dataSource && dataSource[idx].value) ?? "all";
})();

console.log(findActiveCategory3);

const findActiveTopic = () => {
  return dataSource.map((elem) => {
    if (url.includes(elem.value)) {
      return `active ${elem.value}`;
    }
    return elem.value;
  });
};
console.log(findActiveTopic());

// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const generateArray: string[] = Array(Math.trunc(4.5))
  .fill("$")
  .map((elem, i) => {
    return elem + "" + i;
  });
console.log("generateArray", generateArray);
