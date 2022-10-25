// repositories
// namn på reps
// vilket språk som används mest i repot
// vilket datum de skapades
// hur många commits har gjorts
// skriv ut som en lista
class repositories {
    constructor(repName1, repStyle1, repDate1, repCommits1){
        this.repName = repName1;
        this.repStyle = repStyle1;
        this.repDate = repDate1;
        this.repCommits = repCommits1;
    }
}
let uppgift2 = new repositories("Uppgift 2", "HTML/SCSS", "Sep 30", 2);
let portfolio = new repositories("Portfolio", "HTML/SCSS", "Sep 20", 12);
let flagga = new repositories("Flagga", "HTML/CSS", "Sep 16", 11);
let fed22s = new repositories("Fed22s", "HTML/CSS", "Sep 13", 7);
let josefin = new repositories("Josefin", "HTML/CSS", "Sep 1", 4);
let javascript = new repositories("Javascript-exercises", "JavaScript", "Oct 11", 7);
const repos = [
    uppgift2,
    portfolio,
    flagga,
    fed22s,
    josefin,
    javascript
];
let myDiv = document.createElement("div");
myDiv.className = "myDiv";
document.body.appendChild(myDiv);
for(let i = 0; i < repos.length; i++){
    let myUl = document.createElement("ul");
    let repName1 = document.createElement("h3");
    let repStyle1 = document.createElement("li");
    let repDate1 = document.createElement("li");
    let repCommits1 = document.createElement("li");
    repName1.innerHTML = repos[i].repName;
    repStyle1.innerHTML = repos[i].repStyle;
    repDate1.innerHTML = repos[i].repDate;
    repCommits1.innerHTML = repos[i].repCommits;
    myDiv.appendChild(myUl);
    myUl.appendChild(repName1);
    myUl.appendChild(repStyle1);
    myUl.appendChild(repDate1);
    myUl.appendChild(repCommits1);
}
for (const i1 of repos){
    repName.innerHTML = i1.repName;
    repStyle.innerHTML = i1.repStyle;
    repDate.innerHTML = repos[i1].repDate;
    repCommits.innerHTML = repos[i1].repCommits;
}

//# sourceMappingURL=rep.30a3db48.js.map
