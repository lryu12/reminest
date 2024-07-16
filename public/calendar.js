
const calendarContainer = document.getElementById('calendar');

function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day of the week for the 1st day of the month (0-6, 0 = Sunday)
    const currentDate = new Date();


    // Clear previous calendar
    calendarContainer.innerHTML = '';

    // Create header row with days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'header');
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);
    });

    // Fill in the days of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDayElement = document.createElement('div');
        emptyDayElement.classList.add('day', 'empty');
        calendarContainer.appendChild(emptyDayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
            dayElement.classList.add('today');
        }
        calendarContainer.appendChild(dayElement);
    }
}

// Initialize calendar for the current month
const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Array of month names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];

// Function to update the month title
function updateMonthTitle(year, month) {
    const monthTitleElement = document.querySelector('.monthTitle');
    monthTitleElement.textContent = `${monthNames[month]} ${year}`;
}

// Example usage: Update with current month and year
updateMonthTitle(currentDate.getFullYear(), currentDate.getMonth());

// You can call this function whenever you need to update the month title, 
// passing in the desired year and month.
