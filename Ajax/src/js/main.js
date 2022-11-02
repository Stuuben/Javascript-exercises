fetch("http://www.omdbapi.com/?apikey=2c9c9c55&s=star")
.then((response) => response.json())
.then((data) => {handleData(data)});


function handleData(data){
    console.log(data.Search);
    for (let i = 0; i < data.length; i++) {
       console.log(data.Search)
        
    }
}
    

