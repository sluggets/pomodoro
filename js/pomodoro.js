document.addEventListener("DOMContentLoaded", function() {
  
  var listen = document.getElementById("myButton");
  //var initVal = document.getElementById("timer"); 
  var playInc = document.getElementById("play-inc");
  var playDec = document.getElementById("play-dec");
  var workInc = document.getElementById("work-inc");
  var workDec = document.getElementById("work-dec");
  started = false;
  interValID = null;

  playInc.addEventListener("click", incDec('inc', 'play'));

  playDec.addEventListener("click", incDec('dec', 'play'));

  workInc.addEventListener("click", incDec('inc', 'work'));

  workDec.addEventListener("click", incDec('dec', 'work'));

  play = false;

  //initVal.innerHTML = '28:00';

  listen.addEventListener("click", function () {
    btnStatus = document.getElementById("myButton");
    if (btnStatus.innerHTML == "START")
    {
      btnStatus.innerHTML = "STOP"; 
    }
    else if (btnStatus.innerHTML == "STOP")
    {
      btnStatus.innerHTML = "START";
      clearInterval(interValID);
      return;
    }
    defaultPlay = document.getElementById("play").innerHTML;
    defaultWork = document.getElementById("work").innerHTML;
    minutesToGo = parseInt(defaultWork);
    secondsToGo = parseInt(defaultWork) * 60;
    interValID = window.setInterval(displayTime, 1000); 
  });
});

function displayTime()
{
  if (minutesToGo === 0 && secondsToGo === 0)
  {
    if (play)
    {
      activateAlarm();
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

// will sound alarm for conclusion of work timer, then play timer
function activateAlarm()
{
  //clearInterval(interValID);
  //activateBreak();
  console.log("inside activateAlarm()");
  //TODO
}

// closure for incrementing/decrementing play and work timer
// so that it can be used as a callback with parameters(args)
function incDec(dir, session)
{
  // retrieves existing value and increments/decrements accordingly
  return function() {
    if (interValID)
    {
      clearInterval(interValID);
    }
    var sessionType = document.getElementById(session);
    var sessTypeVal = sessionType.innerHTML;
    if (dir == 'inc')
    {
      sessTypeVal++;
    }
    else
    {
      sessTypeVal--;
    }

    // updates page with incremented/decremented timer value
    sessionType.firstChild.nodeValue = sessTypeVal;

    if (session == 'work')
    {
      var timerDisplay  = document.getElementById("timer"); 
      timerDisplay.innerHTML = sessTypeVal + ':00';
    }
    // both if statements call css adjustment based on timer setting type
    if (sessTypeVal > 9 && session == 'play')
    {
      dblDgtCss(session); 
    }

    if (sessTypeVal < 10 && session == 'work')
    {
      dblDgtCss(session);
    }
  }    
}

// adjusts css to prettify double digits to single digits
// inside of black circle and single digits to double digits
function dblDgtCss(sessType)
{
  var div = document.getElementById(sessType);
  if (sessType == 'play')
  {
    div.style.left = "53px";
  }
  else if (sessType == 'work')
  {
    div.style.left = "76px";
  }
}

// I think this can be deleted... deprecated
function activateBreak()
{
  //TODO
}
