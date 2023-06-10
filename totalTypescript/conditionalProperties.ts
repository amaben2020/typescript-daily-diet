// conditional object property

type TUserInfo = {
  name: string;
  isMale: boolean;
  sex: string;
};

const isMan = (age: number) => {
  return age > 29;
};

const userInfo: TUserInfo = {
  name: "Benneth",
  ...(isMan(30) ? { isMale: isMan(30) } : { isMale: false }),
  sex: "male",
};

console.log("userInfo", userInfo);

const info2 = {
  // spread means getting the properties
  ...{ age: 90 },
};
console.log(info2);

const userInfo2 = {
  ...(isMan(22)
    ? {
        name: "Ben",
        age: 22,
      }
    : {}),
};

console.log("userInfo2", userInfo2);
