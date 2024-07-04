


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
        
        if (!this.classList.contains("clicked")) {
            this.style.color = "skyblue";
        }
    })
    
    emoji.addEventListener("mouseleave", function () {
        if (!this.classList.contains("clicked")) {
            this.style.color = "#FFF9D0";
        } 
    })

    emoji.addEventListener("click", function() {
        this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {
            for (var i = 0; i < svgLength; i++) {
                if ($("svg")[i] != this && $("svg")[i].classList.contains("clicked")) {
                    $("svg")[i].classList.remove("clicked");
                }
            }            
            
        }
    });
}






// function for submitting daily log
// every part has to be filled or error message pops out

// document.querySelector(".submit-button").addEventListener("click", function() {
//     if ()
// })





