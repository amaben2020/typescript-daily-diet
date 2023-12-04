import axios from "axios";

// could be jobs api
const postsApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

const token = "klmdsmlsd"; // get from local or session storages
const userId = "klmdsmlsd"; // get from local or session storages

if (token && userId) {
  postsApi.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token} ${userId}`;
}

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

class Posts {
  posts: Array<TPost>;
  constructor() {
    this.posts = [];
  }

  async getPosts() {
    try {
      const response = await postsApi.get("/posts");

      if (response.status === 200 || response.status === 201) {
        console.log(response);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async createPost(data: Partial<TPost>) {
    try {
      const response = await postsApi.post("/posts", data);

      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const postApi = new Posts();

const info = (async () => {
  await postApi.createPost({
    userId: 101,
    title: "hey i am here",
    body: "The body",
  });
})();
console.log(info);
