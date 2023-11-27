import axios from "axios";
import { reqHandler } from "./req-handler";
import { requestHandler } from "./request-handler";

interface User {
  id: number;
  name: string;
}

interface GetUsersParams {
  limit?: number;
  page?: number;
}

export const getUsers = requestHandler<GetUsersParams, User[]>((params) =>
  axios.get("/api/users", { params }),
);

const getUser = reqHandler(() => axios.get("/"), {
  limit: "",
  skip: "",
});

// const usersResponse = await getUsers({ limit: 10, page: 1 });

// if (usersResponse.code === "error") {
//   return <div>{usersResponse.error.message}</div>;
// }

// return (
//   <div>
//     {usersResponse.data.map((user) => (
//       <div key={user.id}>{user.name}</div>
//     ))}
//   </div>
// );
