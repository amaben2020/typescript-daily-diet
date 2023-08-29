//aka DE-SELECT
// makes some properties of a set to be optional

interface Article {
  title: string;
  author: string;
  tags: string[];
  content: string;
}

const removeSomeArticle: Omit<Article, "content" | "author"> = {
  title: "Catcher in the Rye",
  tags: [""],
};
