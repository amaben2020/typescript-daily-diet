import { books } from "../data/books";

type TLabels = "infographics" | "grant" | "books";
const getBooksWithLabel = (label: TLabels) => {
  // get the books with a label
  const booksData = [...books];
  if (!Array.isArray(booksData)) {
    return "Books not found";
  }

  const booksWithLabel = booksData.filter((book) =>
    book.labels?.some((l) => l.includes(label)),
  );

  return booksWithLabel;
};

console.log("getBooksWithLabel", getBooksWithLabel("grant").length);

class AppWrite {
  token: string;
  constructor(token: string) {
    this.token = token;
  }

  logAppInstance() {
    return this.token;
  }
}

const client = new AppWrite("dckdsni90b4094bj");
console.log("Client", client.logAppInstance());
