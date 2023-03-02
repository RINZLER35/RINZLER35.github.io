// Cross and tick classes for the bi-weekly jobs
this.cross = '<i class="fa fa-times" style="color: red;" id="bi-check"></i>';
this.tick = '<i class="fa fa-check" style="color: green;" id="bi-check"></i>';
this.residents = ["Zachariah", "Marcus", "Arun", "Aidan", "Ricardo", "Josh"];
this.startDate = new Date("2023-02-20 00:00:00");
this.today = new Date();
this.displayDate = new Date();

$("#updateRoster").click(function() {
    //--------------Function for constructing and updating current week starting--------------//
    var cont = false;
    while (cont == false) {
        if (displayDate.getDay() !== 1) {
            displayDate.setHours(-24);
        } else {
            cont = true;
        }
    }

    var currentMonth = "";
    var currentWeek = "";

    if (displayDate.getMonth() < 9) {
        currentMonth = "0" + (displayDate.getMonth() + 1);
    } else {
        currentMonth = displayDate.getMonth() + 1;
    }

    currentWeek = displayDate.getDate() + "/" + currentMonth;

    $("#currentWeek").replaceWith('<p id="currentWeek">Week starting: ' + currentWeek + '</p>');

    //--------------Functions for updating roster and monthly check--------------//

    var jobIndex = 0;
    var rosterIndex = 0;

    //Retrieve number of days from the start date to set the roster index
    var days = Math.floor((today - startDate) / (1000 * 3600 * 24));
    var weeks = Math.floor(days / 7);
    console.log("Number of weeks: " + weeks);

    var months = Math.floor(weeks / 4);
    console.log("Months: " + months);

    for (let i = 0; i < months; i++) {
        rosterIndex += 1;
        
        if (rosterIndex > 5) {
            rosterIndex = 0;
        }
    }
    //WARNING: Over time this function will become more resource hungry, as the amount of iterations increases.

    // Updates the cleaning roster with residents
    $.each(residents, function(index, value){
        
        $(`#res-${index}`).replaceWith(`<td id="res-${index}">` + residents[rosterIndex] + `</td>`);
        
        rosterIndex += 1;

        if (rosterIndex > 5 ) {
            rosterIndex = 0;
        }
    });

    //console.log("Month Difference: " + monthDiff);

    //-------------------------------------------------------------------------//


    //--------------Every second week is bi-weekly jobs--------------//
    if (weeks % 2 == 0) {
        $("i#bi-check").replaceWith(tick);
    } else {
        $("i#bi-check").replaceWith(cross);
    }
    //--------------------------------------------------------------//


    //--------------Function for updating the rubbish roster--------------//
    var rubbishCount = weeks;

    while (rubbishCount > 5) {
        rubbishCount -= 6;
    }

    $("#rubbish-res").replaceWith(`<td id="rubbish-res">` + residents[rubbishCount] + `</td>`);
    //--------------------------------------------------------------------//

    
    //----------------------------Test----------------------------//
    //Test to find the first week of a month and apply the monthly job check to the webpage
    // testDate = new Date("2023-01-22");
    // if (testDate.getDate() < 8) {
    //     console.log("First week of the month: " + testDate.getDate());
    // } else {
    //     console.log("Not the first week: " + testDate.getDate());
    // }
    //------------------------------------------------------------//


    //---------------------------------NOTE: IRRELEVANT CODE----------------------------------//
    //Write check for start of the week, then add 7 days, then check if it's the same month 
    //(i.e. see if this is the first week of the month, regardless if the week starts in that month)

    // var weekEnding = new Date(weekStarting);
    // weekEnding.setHours(weekEnding.getHours() + 144);
    // //Week of the 1st monday of the month

    // if (weekStarting.getDate() < 8) {
    //     //First monday of the month
    //     //Set monthly jobs to true
    //     console.log("First monday of the month: " + weekStarting.getDate());
    // } else {
    //     //Second or more monday of the month
    //     //Set monthly jobs to false
    //     console.log("Not the first monday of the month: " + weekStarting.getDate());
    // }

    // console.log("Week start: " + weekStarting + "\nWeek ending: " + weekEnding);
    // //Loop to set the display date to the start of the week
    // //if (weekStarting)
};

// Set the start of the week
setStartingWeek();

// Update the roster on page load
updateRoster();