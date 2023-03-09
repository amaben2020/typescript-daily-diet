interface IProducts {
  [key: string]: string | string[] | { [key: string]: string };
}

// Satisfies keyword understands nested dynamic data than simple inference :IProducts

const products = {
  name: "Book 1",
  categories: ["book", "stuff"],
  shipping: {
    city: "London",
    zip: "32322",
  },
} satisfies IProducts;
