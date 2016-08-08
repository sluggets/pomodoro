var newSeconds;
var oldSeconds;
var newMinutes;
var oldMinutes;
var minutesToGo = 1;
var secondsToGo = 0;
var minToPrint;
var secToPring;
while (minutesToGo > 0)
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

    if (secondsToGo == 0)
    {
      secondsToGo = 60;
    }

    secondsToGo--;
    
    oldSeconds = newSeconds;
  }
}
