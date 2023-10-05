// intersection: this feature enables us compose several types. Only used by interfaces not types.

// ✅

interface IUserInformation {
  id: string;
  firstName: string;
  lastName: string;
}

interface IPosts {
  id: string;
  title: string;
  body: string;
}

// posts property is inside an object and not a standalone stuff, hence the need to insert in an object.
type CombinedPostAndUser = IUserInformation & { posts: IPosts[] };

const getDefaultUserAndPostArray = (): CombinedPostAndUser => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

// ❌
interface U {
  id: string;
  firstName: string;
  lastName: string;

  // its better you separate this for easier debugging

  posts: {
    id: string;
    title: string;
    body: string;
  }[];
}

// interface Posts {
//   id: string
//   title: string
//   body: string
// }

const getDefaultUserAndPosts = (): U => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
