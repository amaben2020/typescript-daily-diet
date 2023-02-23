type TUProp = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
};

type IData = TUProp;

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

console.log("Imperative", imperative());

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

console.log("isTransformed", normalizeTestimonials(FROM));

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
