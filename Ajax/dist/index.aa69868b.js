fetch("http://www.omdbapi.com/?apikey=2c9c9c55&s=batman").then((response)=>response.json()).then((data)=>{
    handleData(data);
});
function handleData(data) {
    console.log(data);
    for(let i = 0; i < data.Search.length; i++){
        console.log(data.Search[i]);
        let movieTitle = document.createElement("h3");
        let img = document.createElement("img");
        let wrapper = document.createElement("div");
        let year = document.createElement("p");
        movieTitle.innerHTML = data.Search[i].Title;
        img.src = data.Search[i].Poster;
        img.alt = data.Search[i].Title;
        year.innerHTML = data.Search[i].Year;
        wrapper.classList.add("movie");
        wrapper.appendChild(movieTitle);
        wrapper.appendChild(img);
        wrapper.appendChild(year);
        document.body.appendChild(wrapper);
    }
}

//# sourceMappingURL=index.aa69868b.js.map
