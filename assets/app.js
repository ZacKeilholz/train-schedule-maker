//JS Setup Functions (Firebase, etc) 
//=================================




//Global Vars 
//=================================







//Jquery HTML Targets 
//=================================

//var $exampleTarget = $("#example-container");
// var submitTarget = $("#submit-button");

// //Form Inputs
// var inputName = $("#input-name");
// var inputDest = $("#input-destination");
// var inputStartTime = $("#input-time");
// var inputFreq = $("#input-freq");





//Misc. Functions
//=================================




//JQuery Events / Event Listeners
//=================================
$(document).ready(function () {


    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        var name = $("#input-name").val().trim();
        var dest = $("#input-destination").val().trim();
        var freq = parseInt($("#input-time").val().trim());
    
        var startTime = moment(($("#input-time").val().trim()), "HH:mm").subtract(1, "years");


        //Difference in time (in minutes) between train start time (1 year before) and now.
        var diffTime = moment().diff(moment(startTime), "minutes"); 

        //find minutes since last train by taking modulo of diffTime and frequency
        var sinceLast = diffTime % freq;

        //Find out how many minutes until next train (freq-sinceLast);
        var untilNext = freq - sinceLast; 

        //Add untilNext minutes to current time

        var nextTrain = moment().add(untilNext,"minutes");
        console.log("nextTrain",nextTrain);


        //Create object for storing and accessing train info
        var trainInput = {
            name: name,
            destination: dest,
            startTime: startTime,
            frequency: freq
        };

        //Format Date using moment.js and send to console

        //var startTimePretty = moment.unix(trainInput.startTime).format("MM/DD/YY");




        //Output form input to Console.
        console.log("name", name);
        console.log("dest", dest);
        //console.log("startTime", startTime);
        console.log("freq", freq);
        console.log("now", now);



        //Create and append a new table row




    });



});