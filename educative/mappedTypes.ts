// creates a new type by iterating 
type Properties = 'A' | 'B' | 'C';

type MyMappedType<Properties extends string | number | symbol> = {
  [K in Properties]: K;
}
type MyNewMappedType = MyMappedType<'A' | 'B'>;


type MyMappedType2<T> = {
  [K in keyof T]: T[K];
}
type MyNewMappedType2 = MyMappedType<'A' | 'B'>;


type UserDataType = {
  id: number;
  name: string;
  lastname: string;
  status: string;
  files: {
    filename: string;
    file_uploaded: string;
  }[];
}[]

//iterating over the keys in the object type
type GenericMappedType<T> = {
  readonly [U in keyof T]?: T[U]
}[keyof T]

const userData: GenericMappedType<UserDataType> = [
  {
    id: 16641,
    name: "Kevin",
    lastname: "Parra",
    status: "active",
    files: [
      {
        filename: "Resume-Kevin-Parra.pdf",
        file_uploaded: "2022-05-05 01:00:37"
      }
    ],
  }
]


// using Pick as example
//Getting the properties of an object uses the keyof keyword
// recreating Pick utility: https://www.youtube.com/watch?v=RjQpep8fBdo
type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
}

type MyNewType2 = Pick1<{ a: 'b', b: 'c' }, "b">

const myObjj: MyNewType2 = {
  b: 'c'
}

type Record1<K extends keyof any, T> = {
  [P in keyof K]: T
} & {
  another: string
}

type UserMeta = {
  id: number;
  name: string;
  lastname: string;
  status: string;
}

type UserMetaData<T> = {
  [U in keyof T]: T[U]
}
const userMeta: UserMetaData<UserMeta> = {
  id: 16641,
  name: "Kevin",
  lastname: "Parra",
  status: "active",
}

type FormDataProps<T> = {
  [U in keyof T]: T[U]
}

interface Informate {
  email: string;
  password: string;
  cb: (string: string) => boolean
}

const userInformate: any = {
  email: "Benneth@gmail.com",
  password: "1234####1224rvnkcsasnkak8slas",

}

const testMail = (text: string): boolean => {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const validEmail = emailRegex.test(text)

  return validEmail
}

const handleInput = ({ email, password, }: FormDataProps<Informate>, cb: (s: string) => boolean) => {
  const emailValue = email.toLowerCase().trim()


  if (!emailValue && !password) return;

  const validEmail = cb(emailValue)

  if (validEmail && password.length)

    switch (validEmail && password.length > 15) {
      case true:
        console.log(emailValue)
        console.log(password)
        break;
      case false:
        setTimeout(() => {
          throw new SyntaxError(`Invalid email: ${emailValue
            }`)
        }, 300)
      default:
        throw new SyntaxError(`Invalid email: ${email}`)
    }
}

// console.log(handleInput(userInformate, testMail));

type EmailAndPwd = {
  email: string;
  password: string;
}

const advancedHandleInput = ({ email, password }: EmailAndPwd) => {

  const isEmailValid = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  if (isEmailValid && password.length > 0 && password.includes('8')) {
    console.log(email)
    console.log(password)
  }
  else {
    return 'Try Again'
  }
}

console.log(advancedHandleInput(userInformate));


const myArray = [
  {
    name: 'Kevin'
  },
  { name: 'Joy' }


]

type Mapper<T> = {
  [K in keyof T]: T[K]
}


type UserData<T> = {
  name: T;
  age: number;
}

const userDataInfo: UserData<string> = {
  name: 'Kevin',
  age: 16
}

const updateUserData = (obj: UserData<string>) => {
  const immutableData = { ...obj }
  immutableData.age = immutableData.age + 1


  return immutableData
}

console.log(updateUserData(userDataInfo));


const zip = [
  {
    name: 'Kevin',
    age: 16,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  },
  {
    name: 'Joy',
    age: 17,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  }
]

const createSlug = (item: string) => {
  return `/blogs/${item}`
}

const doSomething = (array: any, cb: any) => {
  const hash = [] as any
  array.forEach((elem: any) => {
    hash.push(createSlug(elem.name))
  })
  return hash
}
console.log('do something', doSomething(zip, createSlug));
// create an object with just the name and zipcode

const customReduce = <T, U extends keyof T>(array: T[], key: U) => {

  return array.reduce((accumulator, currentValue) => {
    console.log('ACC', accumulator)
    return {
      ...accumulator,
      //@ts-ignore
      [currentValue[key]]: {
        //@ts-ignore
        ZipCode: currentValue.address.zipCode
      }
    }

  }, {})
}

console.log(customReduce(zip, 'name'));


interface FormField<T> {
  value?: T;
  defaultValue: T;
  isValid: boolean;
}

const useForm = (field: FormField<string>) => {
  if (field.value === '') {
    field.value = 'My Name'.trim()
  }
  return field
}

console.log(useForm({
  value: '',
  defaultValue: 'My Name',
  isValid: false
}))

// Very specialized. Only works with `FormField<string>`.
function getStringFieldValue(field: FormField<string>): string {
  return !field.isValid || field.value === undefined ? field.defaultValue.toLowerCase() : field.value;
}

// Generic. Can be called with any `FormField`.
function getFieldValue<T>(field: FormField<T>): T {
  if (!field.isValid || field.value === undefined) {
    // On the other hand, we don't know anything about the type of `field.defaultValue`.
    return field.defaultValue;
  }
  return field.value;
}

const wordInfo: string = 'amaben is gonna be a fucking great engineer'

const capitalizeString = (string: string) => {

  const strings = string.toLowerCase().split(' ')

  const result = strings.map(string => {
    const firstWord = string[0].toUpperCase()

    const otherWords = string.substring(1)

    return firstWord + otherWords
  })

  return result
}

console.log(capitalizeString(wordInfo));


type AvancedForm<T> = {
  name: T;
  age: number;
  address: {
    street: T;
    city: T;
    state: T;
    zipCode: T;
  },
  email: T;
  password: T;
  sex: 'male' | "female"
}

const formData = {

  address: {
    street: 'ssa'
  }

}

const handleForm = (data: Pick<AvancedForm<string>, 'address'>) => {
  if (!data) return


  return data.address.street = 'Ojumiri'
}

