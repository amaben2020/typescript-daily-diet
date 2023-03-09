type Device = {
  manufacturer: string;
  price: number;
};

type DeviceFormatter = {
  [Key in keyof Device as `format${Capitalize<Key>}`]: (
    value: Device[Key],
  ) => string;
};

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
