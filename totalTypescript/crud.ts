type TUProp = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

type IData = TUProp[];

// always start your contract early to prevent complicated errors
const DATA: IData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

const addUser = (user: TUProp) => {
  return [...DATA, user];
};

const result = addUser({
  id: 6,
  name: "Chelsea Martin",
  username: "Kamren",
  email: "Lucio_Hettinger@annie.ca",
  phone: "(254)954-1289",
  website: "demarco.info",
});

const updateUser = (id: number, otherProps: Partial<TUProp>) => {
  const userId = result.findIndex((u) => u.id === id);

  const updated = result[userId];

  return { ...updated, ...otherProps };
};

const updated = updateUser(6, {
  username: "Amaben",
  email: "amaben2020@gmail.com",
});

// console.log("UPDATED RESULT ARRAY", updated);

const checkPhoneProperty = (array: TUProp[]) => {
  if (array.every((elem) => typeof elem.email === "string")) {
    console.log("yeah");
  } else {
    return "Not at all";
  }
};

console.log(checkPhoneProperty(DATA));

console.log(new Date().getMonth() + 1);
