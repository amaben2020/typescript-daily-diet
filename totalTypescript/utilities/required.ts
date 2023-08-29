// makes all properties of a set to be mandatory, this is ts default behavior

//Required under the hood: Mapped Types are used to iterate through the keys of the generic type T. In comparison to the Partial type, we want to make all properties to be required. That’s why TypeScript removes the ? modifier by using the minus sign -.
type Require<T> = {
  [P in keyof T]-?: T[P];
};

interface Article {
  title: string;
  author: string;
  tags: string[];
  content: string;
}

const mainArticle: Require<Article> = {
  title: "Catcher in the Rye",
  author: "Catcher in the Rye",
  tags: ["Catcher in the Rye"],
  content: "Catcher in the Rye",
};
