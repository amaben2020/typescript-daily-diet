import { books } from "../data/books";

// return items based on label input
// return those with image property

const getBooksWithLabel = (label: "infographics" | "grants") => {
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

console.log("getBooksWithLabel", getBooksWithLabel("infographics").length);
