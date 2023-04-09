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

console.log(getBookWithLabels(books));
console.log(getBookWithLabels2(books));

// practice includes with advanced examples i.e active url
const dataSource = [
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

const url = "/resources/infographics";
const url2 = "/resources/videos";

const findActiveCategory = () => {
  return (
    (dataSource.length &&
      [...dataSource].find((elem) => url.includes(elem.value))) ??
    "all"
  );
};

console.log("active", findActiveCategory());

const findActiveCategory2 = () => {
  let matches;
  dataSource.forEach((elem) => {
    if (url.includes(elem.value)) {
      matches = elem.value ?? "all";
    }
  });
  return matches;
};
console.log("method 2", findActiveCategory2());
// function findActiveCategory() {
//   if (dataSource.length > 0) {
//     const activeCategory = dataSource.find(({ value }) => url.includes(value));
//     return activeCategory?.value || "all";
//   }
//   return "all";
// }

//includes is powerful for string manipulation. Stops us from always extrapolating stuff and does this recursively
