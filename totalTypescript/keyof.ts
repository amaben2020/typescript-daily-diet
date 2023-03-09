// The keyof type operator returns a union of the keys of the type passed to it

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
interface Staff {
  [key: string]: string | number;
}

const developer: Staff = {
  name: "Tobias",
  salary: 100,
};

const nameType = getProperty(developer, "name"); // string
// Compiler error
//const salaryType getProperty(developer, "pay"); //Cannot find name 'pay'.(2304)

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};
// use the OptionsFlags
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// result
/*
type FeatureOptions = {
  darkMode: boolean; 
  newUserProfile: boolean; 
} 
*/

const patient = {
  name: "Tinubu",
  occupation: "drug addict",
};

const fetchUser = <T, U extends keyof T>(user: T, key: U): T[U] => {
  return user[key];
};

console.log(fetchUser(patient, "occupation"));

type UserInfo = {
  name: string;
  preferences: {
    [key: string]: string;
  };
};

// returns the preferences key
type UserPreferenceKey = keyof UserInfo["preferences"];

type AppConfig = {
  username: string;
  layout: string;
};

type AppConfigKey = keyof AppConfig;

const userInfo = {
  username: "Benneth",
  layout: "Vertical",
};

const logUsername = (key: AppConfigKey) => {
  console.log(userInfo[key]);
};

console.log(logUsername("username"));
