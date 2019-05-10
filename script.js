ball.onclick = function() {
      var start = Date.now(); 

      var timer = setInterval(function() {
       
        var timePassed = Date.now() - start;

        ball.style.left = timePassed / 5 + 'px';

        if (timePassed > 5000) clearInterval(timer);

      }, 30);
    }
