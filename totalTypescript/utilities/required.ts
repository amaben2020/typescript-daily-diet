// makes all properties of a set to be mandatory, this is ts default behavior

//Required under the hood
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
