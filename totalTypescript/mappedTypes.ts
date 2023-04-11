//https://javascript.plainenglish.io/level-up-your-typescript-game-with-these-6-advanced-features-e5e9b232d990

type ApplicationConfig = {
  email: string;
  mainColor: string;
  darkMode: boolean;
};

type AppPermissions = {
  changeemail: boolean;
  changemainColor: boolean;
  changedarkMode: boolean;
};

type Contact = {
  firstName: string;
};

function sayHello(contact: Contact) {
  if ("firstName" in contact) {
    console.log("Hello " + contact.firstName);
  }
}

type TAppPermissions = {
  [Type in keyof ApplicationConfig as `change${Type}`]: boolean;
};

// filtering away darkmode permission, Exclude, Omit, Pick

type AppPermissionsWithoutDarkmode = {
  [Property in keyof ApplicationConfig as Exclude<
    Property,
    "darkMode"
  >]: boolean;
};
const permission: TAppPermissions = {
  changeemail: false,
  changemainColor: false,
  changedarkMode: false,
};

console.log(permission.changemainColor);

// Mapped type: mapping modifier

//Mapped type: Key remaping with as
type UserInfo = {
  name: string;
  age: number;
  userName: string;
};

type RenameKey<Type> = {
  [Property in keyof Type as `canUpdate${string & Property}`]: Type[Property];
};

type UserCopy = RenameKey<UserInfo>;

// We Get this 👇
// type UserCopy = {
//   canUpdatename: string;
//   canUpdateage: number;
//   canUpdateuserName: string;
// };

// Exam: i. create a mapped type, ii. use intersection, use generics

type Owner = {
  name: string;
  age: number;
  occupation: [string, string];
};

type Laptop<T> = {
  screen: number;
  model: string;
  owner: T;
};

const owner: Owner = {
  name: "Benneth",
  age: 30,
  occupation: ["Software Engineer", "Civil servant"],
};

const laptop: Laptop<Owner> = {
  screen: 2166,
  model: "Apple",
  owner: owner,
};

type TUserLaptopAndOwnerInfo = Laptop<Owner> & Owner;

//IN: The in operator can be used to help TypeScript narrow the type of an object variable by its property name. It is arguably more useful than instanceof because it can be applied to any object structure.

type TNewUserLaptopAndOwnerInfo = {
  [Property in keyof TUserLaptopAndOwnerInfo as `alpro${Property}`]: TUserLaptopAndOwnerInfo[Property];
};

const userLaptopAndOwnerInfo: TNewUserLaptopAndOwnerInfo = {
  alproscreen: 2166,
  alpromodel: "Apple",
  alproowner: owner,
  alproname: "Benneth",
  alproage: 30,
  alprooccupation: ["Software Engineer", "Civil servant"],
};
console.log(
  "Occupation",
  userLaptopAndOwnerInfo.alprooccupation.includes("Software Engineer"),
);

for (let key in userLaptopAndOwnerInfo) {
  console.log("key", key);
}

type SectionResources = {
  "section-resources": {
    page: string;
  };
};

type StoryBlok<T> = {
  [T in keyof SectionResources]: {
    page: string;
  };
};

const SB: StoryBlok<"section-resources"> = {
  "section-resources": {
    page: "",
  },
  // "section-home": {
  //   page: "",
  // },
};

// function useDataSource<
//   T extends LabelType | CategoryType | ResourcesDataType
// >(datasource: DataSourceSlug) {
//   const [entries, setEntries] = useState<DataSourceEntry<T>[]>([]);
