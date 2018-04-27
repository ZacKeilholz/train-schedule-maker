//JS Setup Functions (Firebase, etc) 
//=================================

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_RETN3s07xb_kc-wk1bgfVpKVS5zDTAY",
    authDomain: "train-scheduler-database-a97de.firebaseapp.com",
    databaseURL: "https://train-scheduler-database-a97de.firebaseio.com",
    projectId: "train-scheduler-database-a97de",
    storageBucket: "train-scheduler-database-a97de.appspot.com",
    messagingSenderId: "749290737259"
  };

  firebase.initializeApp(config);

  
//Global Vars 
//=================================

var database = firebase.database();






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

    

        //Output form input to Console.
        console.log("name", name);
        console.log("dest", dest);
        //console.log("startTime", startTime);
        console.log("freq", freq);
        console.log("now", now);


        //Send Data to Firebase
        // <th scope="col">Train Name</th>
        // <th scope="col">Destination</th>
        // <th scope="col">Frequency (min)</th>
        // <th scope="col">Next Arrival</th>
        // <th scope="col">Minutes Away</th>
        // <th scope="col">Remove Row</th>

        database.ref().push({
            trainName: name,
            destination: dest,
            frequency: freq,
            nextTrain: nextTrain,
            minutesAway: untilNext,
          });
        //Create and append a new table row




    });



});