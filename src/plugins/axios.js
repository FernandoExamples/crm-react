import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.common["Accept"] = "application/json";

// if (localStorage.getItem("user")) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
// }

export default axios;