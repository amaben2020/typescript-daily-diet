// rather than create a new type, simply use the typeof the function to type the return value of the function.

const readAuthor = () => "";
function createArticle({ title }: Pick<Article, "title">): Article {
  return {
    title,
    author: readAuthor(),
    tags: [],
    content: "",
  };
}

type TObjectFromPackage = ReturnType<typeof createArticle>;

const objectFromPackage: TObjectFromPackage = {
  title: "",
  author: readAuthor(),
  tags: [],
  content: "",
};

createArticle(objectFromPackage);

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;
