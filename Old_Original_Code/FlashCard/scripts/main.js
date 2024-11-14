var activityCtr=1;
$( document ).ready(function() {

    if (location.hash.indexOf("activityid") != -1)
    {
       activityCtr=Number(location.hash.split("=")[1]);
    }

    addEvents();
    loadActivity();
});

function addEvents(){
    $("#prevBtn").bind("click", prevActivity);
    $("#nextBtn").bind("click", nextActivity);
}
function prevActivity(){
    activityCtr--;
    loadActivity();
}
function nextActivity(){
    activityCtr++;
    loadActivity();
}

function loadActivity(){
    actr=activityCtr < 10 ? `0${activityCtr}` : activityCtr;
    location.href = "index.html#activityid="+actr;
    showactivity();
}

function showactivity()
{
    var actr=location.hash.split("=")[1];
    activityCtr=Number(actr);
    $("#activityframe").attr("src","elsevier_Flashcard_netteractivity/Section_1/01/index.html");

    $("#prevBtn").removeClass("disabled");
    $("#nextBtn").removeClass("disabled");
    if(activityCtr==1){
        $("#prevBtn").addClass("disabled");
    }
    if(activityCtr==nTotalpages){
        $("#nextBtn").addClass("disabled");
    }
}