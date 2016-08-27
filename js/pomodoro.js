document.addEventListener("DOMContentLoaded", function() {
  // grabs timer button id
  var listen = document.getElementById("myButton");

  // grabs the four different increment/decrement div ids
  var playInc = document.getElementById("play-inc");
  var playDec = document.getElementById("play-dec");
  var workInc = document.getElementById("work-inc");
  var workDec = document.getElementById("work-dec");

  // grabs alarm div
  var alarmDiv = document.getElementById("alarm");

  // sets to null so that you can use an if statment to
  // see if this var has been set (sets when timer starts)
  interValID = null;

  // var to store whether play timer has been started or not
  play = false;

  // global to track audio across events
  audio = null;
  // sets up the four different click handlers to adjust
  // timer values behind the scenes and in the html
  playInc.addEventListener("click", incDec('inc', 'play'));

  playDec.addEventListener("click", incDec('dec', 'play'));

  workInc.addEventListener("click", incDec('inc', 'work'));

  workDec.addEventListener("click", incDec('dec', 'work'));

  alarmDiv.addEventListener("click", function() {
    var alarmOff = document.getElementById("volume-off");
    var alarmOn = document.getElementById("volume-on");
    var volCss = window.getComputedStyle(alarmOn).getPropertyValue("display");
    if (volCss == 'inline')
    {
      audio.removeAttribute("src"); 
      audio.load();
      alarmOff.style.display = 'inline';
      alarmOn.style.display = 'none';
    }
  });
  // listens for click on timer button
  listen.addEventListener("click", function () {
    // stores boolean result of whether button state
    // is 'start' or 'stop' 
    var res = btnHandler('button');
    if (res)
    {
      return;
    }
    // global vars for default values of sessions
    defaultPlay = document.getElementById("play").innerHTML;
    defaultWork = document.getElementById("work").innerHTML;

    // sets up minutes to go, and seconds to go!
    minutesToGo = parseInt(defaultWork);
    secondsToGo = parseInt(defaultWork) * 60;
    
    // calls displayTime function with interval of one
    // second for time keeping
    interValID = window.setInterval(displayTime, 1000); 
  });
});

// controls activation of alarm, tracks timer progress
function displayTime()
{
  // handles culmination of countdown timer
  // whether of the work timer or play timer
  if (minutesToGo === 0 && secondsToGo === 0)
  {
    if (play)
    {
      play = false;
      activateAlarm();
      clearInterval(interValID);
      return;
    }
    activateAlarm();

    // boolean that indicates if play timer has begun
    play = true;
    minutesToGo = parseInt(defaultPlay);
    secondsToGo = parseInt(defaultPlay) * 60;
  }

  // holds timer DOM
  var testElem = document.getElementById("timer");

  // vars that hold print-formatted time bits
  var secToPrint;
  var minToPrint;

  // conditional statement to figure seconds to display
  secToPrint = secondsToGo % 60 < 10 ? '0' + secondsToGo % 60 : secondsToGo % 60;

  // updates html with appropriate timer values
  testElem.innerHTML = minutesToGo + ':' + secToPrint;

  // increments minutes baseds off of seconds
  if (secondsToGo % 60 === 0)
  {
    minutesToGo--;
  }
  secondsToGo--;
   
}

// will sound alarm for conclusion of work timer, then play timer
function activateAlarm()
{
  var alarmDiv = document.getElementById("alarm");
  var alarmOff = document.getElementById("volume-off");
  var alarmOn = document.getElementById("volume-on");
  audio = new Audio('http://media.timlongoria.com/axel.mp3');
  audio.play();
  alarmOff.style.display = 'none';
  alarmOn.style.display = 'inline';
  
}

// closure for incrementing/decrementing play and work timer
// so that it can be used as a callback with parameters(args)
function incDec(dir, session)
{
  // retrieves existing value and increments/decrements accordingly
  return function() {
    btnHandler('incDec');
    if (interValID)
    {
      clearInterval(interValID);
    }
    var sessionType = document.getElementById(session);
    var sessTypeVal = sessionType.innerHTML;
    if (dir == 'inc')
    {
      console.log("sessTypeVal" + sessTypeVal + 1);
      if (parseInt(sessTypeVal) + 1 > 99)
      {
        sessTypeVal = 99;
      }
      else
      {
        sessTypeVal++;
      }
    }
    else
    {
      if (sessTypeVal == 1)
      {
        sessTypeVal = 1;
      }
      else
      {
        sessTypeVal--;
      }
    }

    // updates page with incremented/decremented timer value
    sessionType.firstChild.nodeValue = sessTypeVal;

    if (session == 'work')
    {
      var timerDisplay  = document.getElementById("timer"); 
      timerDisplay.innerHTML = sessTypeVal + ':00';
    }
    // both if statements call css adjustment based on timer setting type
    if (sessTypeVal > 9)
    {
      dblSglCss(2, session);
    } 
    else if (sessTypeVal < 10)
    {
      dblSglCss(1, session);
    }
  }    
}

// checks the timer button status, in order to alternate
// button text, and reset, start, stop timer
function btnHandler(inputType)
{
  console.log("inside btnHandler");
  var btnStatus = document.getElementById("myButton");
  if (inputType == 'incDec')
  {
    if (btnStatus.innerHTML == "START")
    {
      return;
    }
  }
  if (btnStatus.innerHTML == "START")
  {
    btnStatus.innerHTML = "STOP"; 
    return false;
  }
  else if (btnStatus.innerHTML == "STOP")
  {
    btnStatus.innerHTML = "START";
    clearInterval(interValID);
    return true;
  }
}

// adjusts css to prettify double digits to single digits
// inside of black circle and single digits to double digits
function dblSglCss(dgtCount, sessType)
{
  var div = document.getElementById(sessType);

  if (dgtCount == 2)
  {
    div.style.left = "37px";
  }
  else
  {
    div.style.left = "80px";
  }

  if (window.matchMedia("(max-width: 700px)").matches)
  {
    if (dgtCount == 2)
    {
      div.style.left = "27px";
    }
    else
    {
      div.style.left = "45px";
    }
  }
}
