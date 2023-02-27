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

    console.log("Roster Index: " + rosterIndex);

    //Testing function - retrieve names for DOM. Shifting reference index will be another function (based on date).
    //  The reference index shift in this function shouldn't effect the stable value.
    $.each(residents, function(index, value){
        
        $(`#res-${index}`).replaceWith(`<td id="res-${index}">` + residents[rosterIndex] + `</td>`);
        
        rosterIndex += 1;

        if (rosterIndex > 5 ) {
            rosterIndex = 0;
        }

        //console.log(`Job Index: ${index}. Resident Index: ${rosterIndex} - Resident: ${residents[rosterIndex]}`);
    });

    //--------------Function for alternating the bi-weekly jobs--------------//
    //Will have to take reliance off rosterIndex off as this changes monthly not weekly
    if (weeks % 2 == 0) {
        $("i#bi-check").replaceWith(tick);
    } else {
        $("i#bi-check").replaceWith(cross);
    }

    // if (jobIndex == 1) {
    //     $("i#bi-check").replaceWith(tick);
    // } else {
    //     $("i#bi-check").replaceWith(cross);
    // }
});