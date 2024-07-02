


// for (var i = 0; i<3; i++) {
//     document.querySelectorAll(".prev-emotions")[i].addEventListener("click", handleClick);
// }
// function handleClick() {
//     alert("I got clicked!");
// }

svgLength = document.querySelectorAll("svg").length;
for (var i = 0; i < svgLength; i++) {
    var emoji = document.querySelectorAll("svg")[i];

    emoji.addEventListener("mouseenter", function () {
        this.style.color = "skyblue";
    })
    
    emoji.addEventListener("mouseleave", function () {
        if (!this.classList.contains("clicked")) {
            this.style.color = "#FFF9D0";
        }
    })

    emoji.addEventListener("click", function() {
        this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            this.style.color = "red"; // Or whatever color you want when clicked
        } else {
            this.style.color = "#FFF9D0"; // Reset to the original color if unclicked
        }
    });
}






// function for submitting daily log
// every part has to be filled or error message pops out

// document.querySelector(".submit-button").addEventListener("click", function() {
//     if ()
// })





