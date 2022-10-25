// repositories

// namn på reps
// vilket språk som används mest i repot
// vilket datum de skapades
// hur många commits har gjorts

// skriv ut som en lista

class repositories {
  constructor(repName, repStyle, repDate, repCommits) {
    this.repName = repName;
    this.repStyle = repStyle;
    this.repDate = repDate;
    this.repCommits = repCommits;
  }
}

let uppgift2 = new repositories("Uppgift 2", "HTML/SCSS", "Sep 30", 2);
let portfolio = new repositories("Portfolio", "HTML/SCSS", "Sep 20", 12);
let flagga = new repositories("Flagga", "HTML/CSS", "Sep 16", 11);
let fed22s = new repositories("Fed22s", "HTML/CSS", "Sep 13", 7);
let josefin = new repositories("Josefin", "HTML/CSS", "Sep 1", 4);
let javascript = new repositories(
  "Javascript-exercises",
  "JavaScript",
  "Oct 11",
  7
);

const repos = [uppgift2, portfolio, flagga, fed22s, josefin, javascript];

let myDiv = document.createElement("div");
myDiv.className = "myDiv";

document.body.appendChild(myDiv);

for (let i = 0; i < repos.length; i++) {
  let myUl = document.createElement("ul");
  let repName = document.createElement("h3");
  let repStyle = document.createElement("li");
  let repDate = document.createElement("li");
  let repCommits = document.createElement("li");

  repName.innerHTML = repos[i].repName;
  repStyle.innerHTML = repos[i].repStyle;
  repDate.innerHTML = repos[i].repDate;
  repCommits.innerHTML = repos[i].repCommits;

  myDiv.appendChild(myUl);
  myUl.appendChild(repName);
  myUl.appendChild(repStyle);
  myUl.appendChild(repDate);
  myUl.appendChild(repCommits);
}
for (const i of repos) {
  repName.innerHTML = i.repName;
  repStyle.innerHTML = i.repStyle;
  repDate.innerHTML = repos[i].repDate;
  repCommits.innerHTML = repos[i].repCommits;
}
