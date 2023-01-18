var seconds = 10;
    var intervalId;

    function startTimer() {
     let a = document.getElementById("countdown");
     a.innerHTML = "Time remaining: " + seconds + " seconds";
      intervalId = setInterval(countdown, 1000);
    }

    function stopTimer() {
      clearInterval(intervalId);
    }

    function countdown() {
      seconds--;
      let b = document.getElementById("countdown");
      b.innerHTML = "Time remaining: " + seconds + " seconds";
      if (seconds === 0) {
        clearInterval(intervalId);
        setTimeout(function(){ 
          alert("Out of time");
        }, 1000);
      }
    }