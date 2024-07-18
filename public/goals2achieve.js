

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addGoal() {
    if (inputBox.value === '') {
        alert("a goal must be typed");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
    }
}


document.getElementById("addgoal").addEventListener('click', addGoal);
