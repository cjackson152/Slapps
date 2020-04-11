//variables for dates
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

//Month Names for display
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//
monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

//next month button
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth +1) % 12;
    showCalendar(currentMonth, currentYear);
}

//last month button
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

//jump to month/ year
function choose() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

// function to click tds through calendar
$(document).on('click', 'td', function(){
    console.log($(this))
})


//generates calendar
function showCalendar(month, year) {

let firstDay = (new Date(year, month)).getDay();

tbl = document.getElementById("calendar-body");

tbl.innerHTML = "";

monthAndYear.innerHTML = months[month] + " " + year;
selectYear.value = year;
selectMonth.value = month;


//creates calendar rows
let date = 1;
for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");  


//creates calendar cells
for (let a = 0; a < 7; a++) {
    if (i === 0 && a <firstDay) {
        
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    else if (date > daysInMonth(month, year)) {
        break;
    }
    else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
            cell.classList.add("bg-info");
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++
    }
}
    tbl.appendChild(row);
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
}


