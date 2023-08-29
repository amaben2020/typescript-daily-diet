// makes all properties of a set to be optional

interface Article {
  title: string;
  author: string;
  tags: string[];
  content: string;
}

const draftArticle: Partial<Article> = {
  title: "Catcher in the Rye",
};
