// advance array manipulation

import { books } from "./data/books";

type TBooks = {
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
