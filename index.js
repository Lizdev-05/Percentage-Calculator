function percentage (){
const total = document.getElementById("input").value;
const percent = document.getElementById("range").value;

let result = (total/100) * percent;
let value = result.toFixed(2);

let output = document.getElementById("output");
output.innerHTML = value;

let newResult = document.getElementById("percent");
newResult.innerHTML = percent + "%";
}

const container = document.querySelector(".main-container");
container.addEventListener("input", percentage);