//TODO: filter an advanced array based on criteria
// i. findIndex : get me the user in the array that has "@april" in their email
// ii. indexOf : test the best option
// iii. includes
// iv. map, filter, some, every
//v. pass in a callback to the hoc

type TUProp = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

type IData = TUProp;

//TODO: start contracts early for any data in your app for intellisense
// always start your contract early to prevent complicated errors
const DATA: Array<IData> = [
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

const userStore: { user: [] } = {
  user: [],
};

// senior code
const addAnotherUser = (userData: TUProp) => {
  // check if user already exists
  const isUserExists: boolean =
    DATA.findIndex((elem) => elem.id === userData.id) >= 1;

  // add the new user if it's not available
  if (isUserExists) return "User already exists";

  return [...DATA, userData];
};

const deleteAUser = (id: number) => {
  const idx = DATA.findIndex((elem) => elem.id === id);
  delete DATA[idx];

  return DATA.filter(Boolean);
};

const dataAfterDeletion = deleteAUser(5);
console.log("DELETE METHOD", dataAfterDeletion);
// console.log(
//   "Another User",
//   addAnotherUser({
//     name: "Enyinnaya",
//     username: "enyi",
//     email: "email",
//     website: "website",
//     id: 6,
//     phone: "111",
//   }),
// );

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

// const updateUser = (id: number, otherProps: Partial<TUProp>) => {
//   const userId = result.findIndex((u) => u.id === id);

//   const updated = result[userId];

//   return { ...updated, ...otherProps };
// };

// const updated = updateUser(6, {
//   username: "Amaben",
//   email: "amaben2020@gmail.com",
// });

// console.log("UPDATED RESULT ARRAY", updated);

const checkPhoneProperty = (array: TUProp[]) => {
  if (array.every((elem) => typeof elem.email === "string")) {
    console.log("yeah");
  } else {
    return "Not at all";
  }
};

// console.log(checkPhoneProperty(DATA));

// console.log(new Date().getMonth() + 1);

class Users {
  users: IData[];
  constructor() {
    this.users = DATA;
  }

  getUsers() {
    return this.users;
  }

  editUser(user: IData) {
    return this.users.map((elem) => {
      if (elem.id === user.id) {
        // just swap with new object
        elem = user;
      }

      return elem;
    });
  }
}

const updator = new Users().editUser({
  id: 1,
  name: "Leanne Benneth Uzochukwu",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
});

console.log("Updated", updator);

let user1 = {
  name: "Whatever",
};

const user2 = {
  name: "Knows his name",
};

const newUser1 = (user1 = user2);
console.log("new user", newUser1);

const imperative = () => {
  for (let i = 0; i < DATA.length; i++) {
    if (DATA[i].id === 2) {
      DATA[i].email = "Test";
    }
  }

  return DATA;
};

// console.log("Imperative", imperative());

const FROM = [
  {
    id: "78a99eb43abc4df59adab951fc23980f",
    data: {
      author: "Michael Jordan",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F5bebc9590f3147af9bd3c48c0e77ecd9",
      position: "Basketball player",
      testimonial: [Object],
    },
  },
  {
    id: "b37277d0432244bfa3fedffe181118ec",
    data: {
      author: "Barney Stinson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
      position: "CEO",
      testimonial: [Object],
    },
  },
  {
    id: "a29c021332e44bdb887324ced974b3cd",
    data: {
      author: "John Doe",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2Fa44ce058ee52464ab635424b060e1424",
      position: "Developer",
      testimonial: [Object],
    },
  },
];

type TArray = {
  id: string;
  data: Record<string, string | ObjectConstructor[]>;
};

const normalizeTestimonials = (array: Array<TArray>) => {
  let result: { [key: string]: string | ObjectConstructor[] }[] = [];
  if (Array.isArray(array)) {
    result = array.map((elem) => {
      return {
        id: elem.id,
        avatar: elem.data.avatar,
        position: elem.data.position,
        author: elem.data.author,
        testimonial: [],
      };
    });
  }

  return {
    count: 4,
    testimonials: result,
  };
};

// console.log("isTransformed", normalizeTestimonials(FROM));

const TO = {
  count: 4,
  testimonials: [
    {
      id: "78a99eb43abc4df59adab951fc23980f",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F5bebc9590f3147af9bd3c48c0e77ecd9",
      position: "Basketball player",
      author: "Michael Jordan",
      testimonial: [Object],
    },
    {
      id: "b37277d0432244bfa3fedffe181118ec",
      position: "CEO",
      author: "Barney Stinson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
      testimonial: [Object],
    },
    {
      id: "a29c021332e44bdb887324ced974b3cd",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2Fa44ce058ee52464ab635424b060e1424",
      testimonial: [Object],
      author: "John Doe",
      position: "Developer",
    },
  ],
};

const addToFavorite = (data: IData[], id: number) => {
  return data.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        favorite: true,
      };
    } else {
      return {
        ...user,
        favorite: false,
      };
    }
  });
};

const updateFavoriteWebsite = (data: IData[], id: number) => {
  const elementToUpdate = data.findIndex((elem) => elem.id === Number(id));

  const result = (data[elementToUpdate] = {
    ...data[elementToUpdate],
    website: "www.algomachinedev.com",
  });

  return result;
};

// console.log(addToFavorite(DATA, 1));
// console.log(updateFavoriteWebsite(DATA, 4));

const days = ["Monday", "Tuesday", "Wednesday"];

// console.log(days.some((elem) => elem.includes("Wednesdays")));

type TDB = {
  id: string;
  data: {
    author: string;
    avatar: string;
    position: string;
    testimonial: string | ObjectConstructor[];
  };
};

const DB: TDB[] = [
  {
    id: "78a99eb43abc4df59adab951fc23980f",
    data: {
      author: "Michael Jordan",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F5bebc9590f3147af9bd3c48c0e77ecd9",
      position: "Basketball player",
      testimonial: "Excellent Player",
    },
  },
  {
    id: "b37277d0432244bfa3fedffe181118ec",
    data: {
      author: "Barney Stinson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
      position: "CEO",
      testimonial: [Object],
    },
  },
];

const createPlayer = (data: TDB) => {
  if (data.id) return [...DB, data];
};

const updatePlayer = (id: string, data: TDB) => {
  const indexOfItem = DB.findIndex((item) => item.id === id);
  DB[indexOfItem] = data;
  return DB;
};
const deletePlayer = (id: string) => {
  return DB.filter((item) => item.id !== id);
};

console.log(
  "Create: ",
  createPlayer({
    id: "b37277d0432244bfa3fedffsakl1118ec",
    data: {
      author: "Ugonna Junior",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
      position: "CEO",
      testimonial: [Object],
    },
  }),
);
console.log(
  "Update: ",
  updatePlayer("b37277d0432244bfa3fedffe181118ec", {
    id: "b37277d0432244bfa3fedffe181118ec",
    data: {
      author: "Barney Stinson Junior",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
      position: "CEO",
      testimonial: [Object],
    },
  }),
);
console.log("Delete: ", deletePlayer("b37277d0432244bfa3fedffe181118ec"));
// Promises are JavaScript objects that represent the eventual result of an asynchronous operation.

// Promises can be in one of three states: pending, resolved, or rejected.

// A promise is settled if it is either resolved or rejected.
const M_S = 1000;

const dataInDB = new Promise((resolve, reject) => {
  try {
    if (DB.length) {
      setTimeout(() => {
        resolve(DB);
      }, M_S);
    }
  } catch (error) {
    reject(error);
  }
});

const slowDataInDB = new Promise((resolve, reject) => {
  try {
    if (DB.length) {
      setTimeout(() => {
        // resolve(DB);
        reject("error");
      }, M_S + 1000);
    }
  } catch (error) {
    reject(error);
  }
});

const logDbData = async () => {
  try {
    // always coerce Promise for intellisense
    // const response = (await dataInDB) as TDB[];

    const responses = (await Promise.allSettled([
      dataInDB,
      slowDataInDB,
    ])) as unknown;

    console.log(
      Array.isArray(responses)
        ? responses.filter((item) => item.reason !== "error")
        : [],
    );
    return Array.isArray(responses)
      ? responses.filter((item) => item.reason !== "error")
      : [];
  } catch (error) {
    console.log(error);
  }
};

console.log(logDbData());

function countingDuplicates(text: string): number {
  const words = text.toLowerCase().split("");
  let hash: Record<string, number> = {};
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (hash[word] === undefined) {
      hash[word] = 1;
    } else {
      hash[word] = hash[word] + 1;
    }
  }

  Object.entries(hash).forEach(([key, value]) => {
    if (value > 1) {
      result++;
    }
  });

  return result;
}

console.log(countingDuplicates("Indivisibilities")); // 2
console.log(countingDuplicates("aabBcde")); // 2
