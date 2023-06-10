type TInfo = {
  id: number;
  name: string;
};

type TGetUserInfo = () => TInfo;

const getUserInfo: TGetUserInfo = () => ({
  id: 1,
  name: "Ben",
  // functions due to covariance allows you to pass in many props to objects without throwing error
  // //@ts-expect-error
  age: 3,
});

console.log("Get User Info", getUserInfo());

const fetchId = (): Array<string> => {
  return Array.from({ length: 10 }, () => {
    return Math.random().toString(36).substring(0, 5);
  });
};

const nos = 12;
console.log("NOS", nos.toString(34));

console.log(fetchId());
