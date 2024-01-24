//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Get the p tag with the id 'timer'
  const timerElement = document.getElementById('timer');

  // Function to update the timer every second
  function updateTimer() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Display the current date and time in the 'timer' element
    timerElement.textContent = `${formattedDate} ${formattedTime}`;
  }

  // Initial call to update the timer
  updateTimer();

  // Update the timer every second
  setInterval(updateTimer, 1000);
});
