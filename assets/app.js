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


    $("#submit-button").on("click", function () {

        var name =  $("#input-name").val().trim();
        var dest = $("#input-destination").val().trim();
        var startTime = $("#input-time").val().trim();
        var freq = parseInt($("#input-frequency").val().trim());

        console.log("name",name);
        console.log("dest",dest);
        console.log("startTime",startTime);
        console.log("freq",freq);


    });



});