const date = new Date(); 
const year = date.getFullYear(); 
const month = date.getMonth(); 

function getDaysInCurrentMonth(year, month) {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    return lastDayOfMonth; // Return the number of days in the current month
}

const daysInCurrentMonth = getDaysInCurrentMonth(year, month);

console.log(daysInCurrentMonth);