window.onload = function() {
    var timerDisplay = document.getElementById('timer');
    var messageDisplay = document.getElementById('message');
    var totalTime = 300;
    var secondsRemaining = totalTime;
    var timerInterval = setInterval(updateTimer, 1000);
    
    function updateTimer() {
        var minutes = Math.floor(secondsRemaining / 60);
        var seconds = secondsRemaining % 60;
        var minutesString = ('0' + minutes).slice(-2);
        var secondsString = ('0' + seconds).slice(-2);
        timerDisplay.innerHTML = minutesString + ':' + secondsString;
        
        if (secondsRemaining > 0) {
            secondsRemaining--;
            if (secondsRemaining % 60 === 0) {
            showMessage(minutes);
            }
        } else {
            clearInterval(timerInterval);
            timerDisplay.style.display = 'none';
            messageDisplay.style.display = 'block';
        }
    }
    
    function showMessage(minutes) {
        var message = minutes > 1 ? 'Прошло ' + minutes + ' минуты' : 'Прошла 1 минута';
        console.log(message);
    
        var messageElement = document.createElement('div');
        messageElement.innerHTML = message;
        document.body.appendChild(messageElement);

        setTimeout(function() {
            document.body.removeChild(messageElement);
        }, 5000);
    }
};
  