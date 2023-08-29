//aka SELECT
// makes all properties of a set to be optional

interface Article {
  title: string;
  author: string;
  tags: string[];
  content: string;
}

const chooseSomeArticle: Pick<Article, "title" | "tags"> = {
  title: "Catcher in the Rye",
  tags: [""],
};
