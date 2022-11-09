import axios from "axios";

axios.get("http://www.omdbapi.com/?apikey=2c9c9c55&s=lord").then((response) => {
  handleData(response.data);
});

function handleData(data) {
  for (let i = 0; i < data.Search.length; i++) {
    console.log(data.Search[i]);

    let wrapper = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
    let year = document.createElement("p");

    title.innerHTML = data.Search[i].Title;
    img.src = data.Search[i].Poster;
    year.innerHTML = data.Search[i].Year;

    wrapper.classList.add("movie");
    wrapper.appendChild(title);
    wrapper.appendChild(img);
    wrapper.appendChild(year);

    document.body.appendChild(wrapper);
  }
}
