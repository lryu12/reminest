


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
        this.style.color = "white";
    })
    
    emoji.addEventListener("mouseleave", function () {
        this.style.color = "#FFF9D0";
    })
}





