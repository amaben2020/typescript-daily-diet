// Satisfies keyword understands nested dynamic data than simple inference :IProducts

interface IIPProducts {
  name: string;
  categories: [string, string];
  shipping: {
    city: string;
    zip: string;
  };
}

const products = {
  name: "Book 1",
  categories: ["book", "stuff"],
  shipping: {
    city: "London",
    zip: "32322",
  },
} satisfies IIPProducts;
