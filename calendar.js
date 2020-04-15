//variables for dates
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

//variables for popup on date
popup = $("#modal");
closeModal = document.querySelector(".closeModal")

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
    $('.modal-title').text((currentMonth + 1) + "/" + $(this).text() + "/" + currentYear);
    $('.modal-venue').text("placeholder for Venue");
    $('.modal-location').text("placeholder for location");
    $('.modal-body').text($(this).attr('data-todo'));
    $('.modal').attr('style', 'display:block');
    $('.modal').addClass('show');
})

$(document).on('click', '.close', function(){
    $('.modal').attr('style', 'display:none');
    $('.modal').removeClass('show');
})

$(document).on('click', '.removeEvent', function(){
    $('.modal-venue').text("placeholder for Venue");
    $('.modal-location').text("placeholder for location");
    $('.modal-body').text($(this).attr('data-todo'));
    $('.modal').attr('style', 'display:block');
    $('.modal').removeClass('show');
})

$(document).on('click', '.createEvent', function(){
    $('.eventTitle').text(prompt("Whats the Event?"));
    $('.modal-venue').text(prompt("Whats the Venue name?"));
    $('.modal-location').text(prompt("Wheres it at?"));
    $('.modal-body').text(prompt("What are you doing?"));
    
})
    /*let eventTitle = prompt("please enter a event name")    
    if (eventTitle == null || eventTitle =='') {
        txt = "cancelled";

    }else {
        txt = "created";
        localStorage.setItem(this, "eventTitle")
    };

    let modalLocation = prompt("please enter in location")
    if (modalLocation == null || modalLocation == '') {
        txt = "undefined";
    } else {
        txt = "location Added"
        localStorage.setItem( this, "modalLocation")
    };

    let modalVenue = prompt("please enter in the venue")
    if (modalVenue == null || modalVenue == '') {
        txt = "undefined";
    } else {
        txt = "Venue Added"
        localStorage.setItem(this, "modalVenue")
    };

    let modalBody = prompt("please enter info") 
        if (modalBody == null || modalBody == '') {
            txt = "cancelled";
        } else {
            txt = "created"
            localStorage.setItem(this, "modalBody")
        };
    let confirmation = confirm("Would you like to save this event?")
    if (confirmation == null || confirmation == 'cancelled') {
        txt = "Event not Created"
    } else {
        txt = "New Event Created"
        function fillData() {
            document.querySelector(".eventTitle").innerHTML = eventTitle;
            document.querySelector(".modalLocation").innerHTML = modalLocation;
            document.querySelector(".modalVenue").innerHTML = modalVenue;
            document.querySelector(".modalBody").innerHTML = modalBody;
        }
    }
    }
)*/
//generates calendar
function showCalendar(month, year) {

let firstDay = (new Date(year, month)).getDay();

tbl = document.getElementById("calendar-body");

tbl.innerHTML = "";

monthAndYear.innerHTML = (months[month]) + " " + year;
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
        cell.setAttribute('data-todo', 'example')
        row.appendChild(cell);
    }
    else if (date > daysInMonth(month, year)) {
        break;
    }
    else {
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        cell.setAttribute('data-todo', 'example')
        
        //this is the code that causes the highlighting didnt realize it was still here
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


