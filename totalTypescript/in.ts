//In operator: [Key in Type] Use 'in' operator to transform a union to another union

//manually: This is not very flexible
type Entity = {
  type: string,
  userId: string
}

// type EntityWithId =
//   | {
//     type: "user"
//     userId: string
//   }
//   | {
//     type: "post"
//     postId: string
//   }
//   | {
//     type: "comment"
//     commentId: string
//   }

// you could automate this with TS

type EntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType
  } & Record<`${EntityType}Id`, string>
}[Entity["type"]]

//Usage
const userResult: EntityWithId = {
  type: "user",
  userId: "123",
}

const postResult: EntityWithId = {
  type: "post",
  postId: "123",
}
//This is just an object refresher to get keys from an object

type Infoo = { [key: string]: string }

type TEmployee = Record<"title" | "name" | "age" | "email", Infoo>

const employee: TEmployee = {
  title: {
    name: ""
  },
  name: {
    name: ""
  },
  email: {
    name: ""
  },
  age: {
    name: ""
  }
}

// hasOwnProperty(): When interacting with objects, situations might arise that require you to check if a particular key exists. It is important to note that if you know a key exists that automatically means that a value exists. This value could be anything – even empty, null, or undefined.

for (let key in employee) {
  console.log('key', key)
  if (key === "name") {

    //@ts-ignore
    employee[key] = "Amaben"
  }
}

if ("name" in user) {
  console.log("the key exists on the object");
}

// Or

if (user.hasOwnProperty("name")) {
  console.log("the key exists on the object");
}

console.log(employee)


