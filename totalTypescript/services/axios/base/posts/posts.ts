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

class Posts {
  posts: Array<any>;
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

  async createPost(data: any) {
    try {
      const response = await postsApi.post("/posts", data);

      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const postApi = new Posts();

const info = (async () => {
  await postApi.getPosts();
})();
console.log(info);
