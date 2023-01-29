type CreateUser = () => Promise<string>
type GetUser = (string: string) => Promise<string>

// const fetchService = async () => {
//   return axios.get("")
// } this would be awaited which is why its return type is a promise.

const createThenGetUser = async (
  createUser: CreateUser,
  getUser: GetUser,
): Promise<any> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};
