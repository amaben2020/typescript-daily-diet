const words = ["oops", "gasp", "shout", "sun"];
const filterHOF = (words: string[]) => {
  let filtered: Array<any> = [];

  for (let i = 0; i < words.length; i++) {
    const singleWord = words[i];
    //@ts-ignore
    if (singleWord.startsWith("g")) {
      filtered.push(singleWord);
    }
  }
  return filtered;
};
console.log(filterHOF(words));

const pages = [
  {
    id: 1,
    title: "Page 1",
    content: "This is page 1",
  },
  {
    id: 2,
    title: "Page 2",
    content: "This is page 2",
  },
  {
    id: 3,
    title: "Page 3",
    content: "This is page 3",
  },
  {
    id: 4,
    title: "Page 4",
    content: "This is page 4",
  },
  {
    id: 5,
    title: "Page 5",
    content: "This is page 5",
  },
];

const page = {
  current: 1,
  total: 2,
};

const paginate = (array: any, currentPage: any) => {
  let inView = [];
  const getArrayLength = array.length;
  let numberVisible = Math.ceil(getArrayLength / currentPage.total);

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    if (elem) {
    }

    inView.push(elem);
  }
  return inView;
};

console.log(paginate(pages, page));

const outerFunc = (someValue: number) => (multiplier: number) =>
  someValue * multiplier;
const innerFunc = outerFunc(10);
let r = innerFunc(5);
console.log(r);
