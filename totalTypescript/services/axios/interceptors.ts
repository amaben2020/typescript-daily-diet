//Axios interceptors are powerful mechanisms built into Axios for making changes to requests and responses in a non-intrusive way.
//https://geshan.com.np/blog/2022/12/axios-interceptors/

import axios from "axios";

axios.interceptors.request.use((req: any) => {
  req.meta = req.meta || {};
  req.meta.requestStartedAt = new Date().getTime();
  return req;
});
//@ts-ignore
axios.interceptors.response.use((res: any) => {
  res.statusText = "Well received";
  res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
  return res;
});

const getPosts = (async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
})();
console.log(getPosts);
