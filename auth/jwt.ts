// import jwt from "jsonwebtoken";
//@ts-nocheck
var jwt = require("jsonwebtoken");
import jwt_decode from "jwt-decode";
const token = jwt.sign({ foo: "bar" }, "shhhhh");

// synchronously
jwt.sign(
  { foo: "bar" },
  "privateKey",
  { algorithm: "RS256" },
  function (err, token) {
    console.log("TOKEN HERE", token);
  },
);

//1
const tokenWithExpiry = jwt.sign(
  {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: "foobar",
  },
  "secret",
);

//2
jwt.sign(
  {
    data: "foobar",
  },
  "secret",
  { expiresIn: 60 * 60 },
);

//3 or even better:

const token3 = jwt.sign(
  {
    data: {
      email: "algomachine",
      password: "amaben",
    },
  },
  "secret",
  { expiresIn: "1h" },
);

console.log(token);
console.log(tokenWithExpiry);
console.log(Math.floor(Date.now() / 1000) + 60 * 60);
console.log(token3);

const decoded = jwt_decode(token3);
console.log("decoded", decoded);

const user = {
  name: "Benneth",
};
// send the decoded object and token as json to frontend
Object.assign(user, decoded);
console.log(user);
