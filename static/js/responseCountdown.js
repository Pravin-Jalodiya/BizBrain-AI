function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall;
      if (timeSinceLastCall >= delay) {
          lastCall = now;
          func(...args);
      }
      else{
        const resultsContainer = document.getElementById("results-container");
        if (resultsContainer.hasChildNodes()){
          const countdownContainer = document.getElementById("countdown");
          countdownContainer.style.display = "block";
          countdownContainer.innerText = `Please try again after few seconds`;
          setTimeout(() => {
            countdownContainer.style.display = "none";
        }, 2000); 
        }
      }
  };
}
function startCountdown() {
    const resultsContainer = document.getElementById("results-container");
    const countdownContainer = document.getElementById("countdown");
    countdownContainer.innerText = ``;
    // Display the countdown div
    countdownContainer.style.display = "block";
    let timeInSeconds = 10;
    // Update the countdown every second
    const countdownInterval = setInterval(function () {
      // Display the remaining time
      countdownContainer.innerText = `We are getting your response ready, time remaining: ${timeInSeconds} seconds`;
      // Decrease the time by 1 second
      timeInSeconds--;
      if (resultsContainer.hasChildNodes()) {
        // Hide the countdown div
        countdownContainer.style.display = "none";
        document.getElementById("btn-print").disabled = false;
        // Clear the interval to stop the countdown
        clearInterval(countdownInterval);
      }
      if (timeInSeconds < 0) {
        countdownContainer.innerText = `Your request is taking longer than expected. Please wait or try again`;
        clearInterval(countdownInterval);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

const throttledStartCountdown = throttle(startCountdown, 10000); 