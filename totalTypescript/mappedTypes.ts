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

//Mapped type: Key remapping with as
type UserInfo = {
  name: string;
  age: number;
  userName: string;
};

type RenameKey<Type> = {
  [Property in keyof Type as `canUpdat${string & Property}`]: Type[Property];
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

type Keys = keyof TUserLaptopAndOwnerInfo;

let keys: Keys = "age";

//   Object.keys({ ...owner, laptop })
//   .map((el) => el + " ")
//   .join("| ");
// console.log("keys", keys);

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

type TForce = {
  darkness: "dark";
  light: "light";
};
const force: TForce = {
  darkness: "dark",
  light: "light",
};

type ExcludedLight = {
  [Property in keyof TForce as Exclude<Property, "light">]: TForce[Property];
};

const forcesOfDark = {
  darkness: "dark",
} satisfies ExcludedLight;

type TUserInfo4 = {
  name: string;
  sex: string;
  email: string;
};

type TPartialUser4 = {
  [K in keyof TUserInfo4]?: TUserInfo4[K];
};

const userInfo4: TPartialUser4 = {
  name: "John Doe",
  email: "john@example.com",
};

//grid
// <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
//   {[...Array(7)].map((_, i) => (
//     <div
//       key={i}
//       className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
//         i === 3 || i === 6 ? "col-span-2" : ""
//       }`}
//     ></div>
//   ))}
// </div>

//flex
// <div className="flex gap-4">
//   {[
//     [24, 32, 32, 16, 16],
//     [32, 40, 56],
//     [64, 32, 32],
//   ].map((card, index) => (
//     <div className="flex-1" key={index}>
//       {card.map((height, index) => (
//         <div
//           className={`mb-4 h-${height} rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900`}
//           key={index}
//         ></div>
//       ))}
//     </div>
//   ))}
// </div>
