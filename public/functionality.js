
        
        const svgs = document.querySelectorAll("svg");
        let selectedSVG = null;

        svgs.forEach(svg => {
            svg.addEventListener("click", function () {
                // Remove 'selected' class from all SVGs
                svgs.forEach(s => s.classList.remove("selected"));

                // Add 'selected' class to the clicked SVG
                this.classList.add("selected");

                // Update selectedSVG variable
                selectedSVG = this;
                
                document.getElementById('selected-emotion').value = this.id;
            });
        });

        const form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            if (!selectedSVG) {
                alert("Please select an emotion before submitting the form.");
                event.preventDefault(); // Prevent form submission
            }
        });

