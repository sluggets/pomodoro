document.addEventListener("DOMContentLoaded", function() {
  var listen = document.getElementById("myButton");
  var initVal = document.getElementById("timer"); 
  initVal.innerHTML = '1:00';
  minutesToGo = 0;
  secondsToGo = 10;
  listen.addEventListener("click", function () {
     interValID = window.setInterval(displayTime, 1000); 
  });
});

function displayTime()
{
  if (minutesToGo === 0 && secondsToGo === 0)
  {
    activateAlarm();
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
  clearInterval(interValID);
  console.log("inside activateAlarm()");
  //TODO
}
/*function timerFunc()
{
  var newSeconds;
  var oldSeconds;
  var newMinutes;
  var oldMinutes;
  var minToPrint;
  var secToPrint;
  var h1Timer = document.getElementById("timer");
  while (secondsToGo > 0)
  {
    var curDate = new Date();
 
    newSeconds = curDate.getSeconds();
    newMinutes = curDate.getMinutes();
    if (oldSeconds != newSeconds)
    {
      if (minutesToGo < 10)
      {
        minToPrint = '0' + minutesToGo;
      }
      else
      {
        minToPrint =  minutesToGo;
      }

      if (secondsToGo < 10)
      {
        secToPrint = '0' + secondsToGo;
      }
      else
      {
        secToPrint =  secondsToGo;
      }

      console.log(minToPrint + ':' + secToPrint);
      h1Timer.innerHTML = minToPrint + ':' + secToPrint;

      if (secondsToGo == 0)
      {
        minutesToGo--;
        secondsToGo = 60;
      }


      secondsToGo--;
    
      oldSeconds = newSeconds;
    }

    if (oldMinutes != newMinutes)
    {
      oldMinutes = newMinutes; 
    }
  }

  while (secondsToGo > 0)
  {
    var curDate = new Date();
    minToPrint = '00';
    newSeconds = curDate.getSeconds();
    
    if (oldSeconds != newSeconds)
    {

      if (secondsToGo < 10)
      {
        secToPrint = '0' + secondsToGo;
      }
      else
      {
        secToPrint = secondsToGo;
      }

      console.log(minToPrint + ':' + secToPrint);
      h1Timer.innerHTML = minToPrint + ':' + secToPrint;

      if (secondsToGo == 0)
      {
        secondsToGo = 60;
      }

      secondsToGo--;
    
      oldSeconds = newSeconds;
    }
  }*/
