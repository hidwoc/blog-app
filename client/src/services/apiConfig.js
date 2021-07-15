import axios from "axios";

// set up axios, baseURL, config object here and only need to use ‘api’ in products.js
let apiUrl;
const apiUrls = {
  production: "https://heidi-salman-trisha.herokuapp.com/api",
  development: "http://localhost:3000/api",
};
// window.location.hostname is in Browser (devtools)
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
// axios.create allows us to just use api.get/post/delete/put instead of axios.get(baseUrl)
const api = axios.create({
  baseURL: apiUrl,
});
export default api;
