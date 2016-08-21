document.addEventListener("DOMContentLoaded", function() {
  var listen = document.getElementById("myButton");
  var initVal = document.getElementById("timer"); 
  play = false;
  initVal.innerHTML = '1:00';
  defaultPlay = document.getElementById("play").innerHTML;
  defaultWork = document.getElementById("work").innerHTML;
  minutesToGo = parseInt(defaultWork);
  secondsToGo = parseInt(defaultWork) * 60;
  listen.addEventListener("click", function () {
     interValID = window.setInterval(displayTime, 1000); 
  });
});

function displayTime()
{
  if (minutesToGo === 0 && secondsToGo === 0)
  {
    if (play)
    {
      clearInterval(interValID);
    }
    activateAlarm();
    play = true;
    minutesToGo = parseInt(defaultPlay);
    secondsToGo = parseInt(defaultPlay) * 60;
  }
  var testElem = document.getElementById("timer");
  var secToPrint;
  var minToPrint;
  secToPrint = secondsToGo % 60 < 10 ? '0' + secondsToGo % 60 : secondsToGo % 60;

  testElem.innerHTML = minutesToGo + ':' + secToPrint;
  if (secondsToGo % 60 === 0)
  {
    minutesToGo--;
  }
  secondsToGo--;
   
}

function activateAlarm()
{
  //clearInterval(interValID);
  //activateBreak();
  console.log("inside activateAlarm()");
  //TODO
}

function incrementDecrement()
{

}

function activateBreak()
{
  //TODO
}
