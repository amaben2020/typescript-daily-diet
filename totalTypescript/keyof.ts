function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Staff {
  [key: string]: string | number
}

const developer: Staff = {
  name: 'Tobias',
  salary: 100,
};



const nameType = getProperty(developer, 'name'); // string 
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