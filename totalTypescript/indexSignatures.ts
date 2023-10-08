// Index signatures are handy for cases when the actual names of the type’s properties are not known, but the type of data they will reference is known

// caveat: no intellisense for the index signature

type User = {
  name: string;
  preferences: {
    [key: string]: string;
  };
};

const currentUser: User = {
  name: "Foo Bar",
  preferences: {
    lang: "en",
  },
};

const currentLang = currentUser.preferences.lang;

interface Staff {
  [key: string]: string | number;
}

const developer: Staff = {
  name: "Tobias",
  salary: 100,
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const nameType = getProperty(developer, "name");

type TAdmin = {
  name: string;
  preferences: {
    [key: string]: "en" | "fr";
  };
  accessLevel: {
    level: [1];
    payload: {
      first: {
        userInfo: {
          name: string;
        };
      };
    };
  };
};
const admin = {
  name: "Admin007",
  preferences: {
    lang: "en",
  },
  accessLevel: {
    level: [1],
    payload: {
      first: {
        userInfo: {
          name: "Ben",
        },
      },
    },
  },
} satisfies TAdmin;

const accessInformation =
  admin["accessLevel"]["payload"]["first"]["userInfo"]["name"];

type TSoldierData = {
  [key: string]: string | number | string[];
};

const soldierData: TSoldierData = {
  name: "Benoski",
  departments: ["Marine Seal", "Green Beret"],
  height: 180,
};


