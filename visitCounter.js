document.addEventListener("DOMContentLoaded", function () {
  const visitCountElem = document.getElementById("visitorCount");

  // Retrieve current count from localStorage
  let currentCount = localStorage.getItem("visitCount");

  if (!currentCount || isNaN(currentCount)) {
    // If there's no visit count saved in localStorage or if it's not a valid number, set it to 1.
    localStorage.setItem("visitCount", 1);
    visitCountElem.textContent = 1;
  } else {
    // If there's an existing visit count, increment it by 1 and display it.
    currentCount = parseInt(currentCount) + 1;
    localStorage.setItem("visitCount", currentCount);
    visitCountElem.textContent = currentCount;
  }
});
