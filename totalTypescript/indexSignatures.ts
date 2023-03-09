// Index signatures are handy for cases when the actual names of the type’s properties are not known, but the type of data they will reference is known

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

const nameType = getProperty(developer, "name");
