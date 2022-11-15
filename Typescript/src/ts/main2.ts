import axios from "axios";

console.log("hej")

axios.get("http://www.omdbapi.com/?apikey=2c9c9c55&s=lord")
.this((response) => {

  console.log(response.data)
});