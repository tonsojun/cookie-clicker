let currentCount = 0;
let numberOfGrandmas = 0;

let cookie = document.getElementById("cookie");
cookie.addEventListener("click", cookieHasBeenClicked);

function cookieHasBeenClicked() {
    console.log("You clicked the cookie!");

    currentCount = currentCount + 1;

    let counter = document.getElementById("counter");
    counter.innerHTML = currentCount;
}

let addGrandmaButton = document.getElementById("add-grandma-button");
addGrandmaButton.addEventListener("click", addAGrandma);

function addAGrandma() {
    if (currentCount < 30) {
        alert("You dont' have enough cookies to get a grandma");
    } else {
        console.log("You can get a grandma");

        let grandmaPicture = document.createElement("img");
        grandmaPicture.src = "grandma.webp";
        grandmaPicture.width = "150";

        document.body.appendChild(grandmaPicture);
        
        currentCount = currentCount - 30;
    }
}

setInterval(addCookies, 1000);

function addCookies() {
    console.log("Adding one cookie per second");

    currentCount = currentCount + numberOfGrandmas;
    let counter = document.getElementById("counter");
    counter.innerHTML = currentCount;
}