type CreateUser = () => Promise<string>;
type GetUser = (string: string) => Promise<string>;

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

// both params are asynchronous functions

interface Navbar {
  label: string;
  url: string;
}
[];

const navbar = [{ label: "Home", url: "/" }];

const getNavigation = new Promise((resolve, reject) => {
  try {
    if (navbar) {
      return resolve(navbar);
    }
  } catch (error) {
    if (error instanceof Error) {
      reject(error.message);
    }
  }
});

type TNavBar = Awaited<typeof getNavigation>;

const layout = async (getNavbar: Promise<unknown>) => {
  try {
    const data: TNavBar = await Promise.all([getNavbar]);
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log(layout(getNavigation));

const createThenGetUser2 = async (
  createUser: () => Promise<string>,
  getUser: (userId: string) => Promise<User>,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

// Good
type APIResponse<T> = {
  items?: T[];
  item: T;
};

type User = {
  id: string;
};
enum HttpMethod {
  GET = "get",
}

const fetchCall = <T>(method: string, url: string): Promise<APIResponse<T>> => {
  return new Promise((res, rej) => {
    res;
  });
};

export const getUser = (id: string): Promise<User> => {
  return fetchCall<User>(HttpMethod.GET, `/v1/user/${id}`).then(
    ({ item }) => item,
  );
};
