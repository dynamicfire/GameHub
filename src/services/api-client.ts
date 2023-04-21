import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "23b7b1cd1c9b4425aaa7a6def9bb5700",
  },
});
