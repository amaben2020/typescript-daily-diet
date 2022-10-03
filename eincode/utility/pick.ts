// The TypeScript Pick type is a utility type which is used to create a new custom Type, based off an already existing one. It is the opposite of the Omit Type. Let's look at how it works.
// https://hackernoon.com/how-the-typescript-pick-type-works

type User = {
  firstName: string,
  lastName: string,
  age: number
}


type UserName = Pick<User, "firstName" | "lastName"> // makes a new type which only has firstName and lastName:

let customerInfo: UserName = {
  firstName: "John",
  lastName: "Doe"
}



type UserAge = Pick<User, "age">

let customerAge: UserAge = {
  age: 1534
}

// As you can see, the Pick type is very useful in creating custom types based on already existing ones. Now that you've mastered it, you can simplify your type declarations.

export type TUser = {
  id: number,
  info?: string
  name: string,
  kills: number
  body?: string
}
// keep track of largest occuring elem in an array
const users = [
  { name: "John", id: 0, kills: 33 },
  { name: "Ben", id: 1, kills: 83 },
  { name: "Kate", id: 0, kills: 133 },
  { name: "Nate", id: 0, kills: 3 },
]

const getHighestKill = (users: TUser[]): string => {

  let hightstKills = 0;
  let highestKiller = ''

  for (let i = 0; i < users.length; i++) {
    const userInfo = users[i]

    if (userInfo.kills > hightstKills) {

      hightstKills = userInfo.kills

      highestKiller = userInfo.name
    }
  }
  return highestKiller
}

console.log(getHighestKill(users))


