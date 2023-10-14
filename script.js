
let container = document.querySelector(".container");

let URL = "https://6523738ef43b179384156c7e.mockapi.io/student";
let options = {"method":"GET",
    headers:{
        "Content-Type":"application/json"
}};

function card(val){
    let card = document.createElement("div");
    card.className = "card";
    let couplet = val.couplet;
    let engExplanation = val.explanation;
    let number = val.Number;
    card.innerHTML = `
    <p class="number"><b>Number: </b>${number}</p>
    <p class="couplet"><b>Couplet: </b>${couplet}</p>
    <p class="explanation"><b>Explanation: </b>${engExplanation}</p>    
    `;
    container.appendChild(card);
}

async function getData(){
    let res = await fetch(URL,options);
    let data = await res.json();
    data.forEach((val) => {
        card(val);
    });
}
getData();


