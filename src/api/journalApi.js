import axios from "axios";

const journalyApi = axios.create({
  baseURL: "https://vue-demos-fcc33-default-rtdb.firebaseio.com",
});

export default journalyApi;
