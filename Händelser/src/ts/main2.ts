console.log("hejhej")

let coolButton:HTMLButtonElement = document.getElementById("coolButton") as HTMLButtonElement;
let userNumberInput:HTMLInputElement = document.getElementById("userNumberInput") as HTMLInputElement;
let myPtag:HTMLParagraphElement = document.getElementById("myPtag") as HTMLParagraphElement;

coolButton.addEventListener("click", myGuess)

function myGuess(){
    console.log(userNumberInput.value)

    if (parseInt(userNumberInput.value) < 100) {
myPtag.innerHTML = "Du måste ha ett större tal";
    }else{
        myPtag.innerHTML = "Du måste måste ha ett mindre tal"
    }
    if (parseInt(userNumberInput.value)  === 100){
        myPtag.innerHTML = "Du hittade det mest lagomade talet"
    }
}