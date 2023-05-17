//@ts-nocheck
// array

// tuples: array with fixed length
let myCar: [number, string, string] = [2002, "Totota", "Corolla"];

myCar = [2002, "Totota", "Corolla"];

type TDataSources = {
  name: string;
  value: string;
}[];

type TValues = "books" | "infographics" | "videos";

const resources = [
  {
    name: "Books",
    value: "books",
  },
  {
    name: "Infographics",
    value: "infographics",
  },
  {
    name: "Videos",
    value: "videos",
  },
] satisfies TDataSources;

const currentPath = "https://alpro/infographics";

const logActivePath = () => {
  let isActive = false;

  resources?.forEach((elem: any) => {
    if (currentPath.includes(elem.value)) {
      isActive = true;
    }
  });

  return isActive ? "yeah" : "nope";
};
console.log(logActivePath());

// includes
const str = "amaben is a great man";
const res = "amaben";

console.log(str.includes(res));

const strin = "To be, or not to be, that is the question.";
console.log(strin.includes("or"));

const people = [
  { name: "Blessing", age: 26 },
  { name: "Enyinnaya", age: 1 },
  { name: "Williams", age: 4 },
].map((elem) =>
  elem.name.indexOf("Blessing")
    ? {
        ...elem,
        isWife: true,
      }
    : {
        ...elem,
        isWife: false,
      },
);
console.log(people);

const someProp = people.every((person) => person.isWife);
console.log(someProp);

const user = {
  isEmployer: false,
  name: "Benneth",
  occupation: "SE",
};

const createUser = () => {
  if (user.isEmployer || user.occupation === "SE") {
    return "redirect to employee route";
  } else {
    return "redirect to SE route";
  }
};
console.log(createUser());

const links: Array<Record<string, string>> = [
  { url: "/", title: "Contact" },
  { url: "/education", title: "Education" },
  { title: "About", url: "/about" },
  { title: "Confirm", url: "/confirm" },
];

type TActiveLinks = {
  url: string;
  title: string;
  isActive?: boolean;
}[];

const urlPath = "https://path/education";

const activeLink = (): ReturnType<TActiveLinks> => {
  try {
    const activePath = new URL(urlPath).pathname;
    console.log("activePath", activePath);
    return links.map((l) => {
      if (l.url.includes(activePath)) {
        return {
          ...l,
          isActive: true,
        };
      }

      return { ...l };
    });
  } catch (error) {
    console.log(error.message);
  }
};
console.log("activeLink", activeLink());
