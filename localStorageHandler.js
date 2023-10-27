// localStorageHandler.js

// Handle theme preference
document
  .getElementById("savePreferences")
  .addEventListener("click", function () {
    const selectedTheme = document.querySelector(
      'input[name="theme"]:checked'
    ).value;
    localStorage.setItem("userTheme", selectedTheme);
    alert("Preferences saved!");
    applyTheme(); // Apply the theme immediately after saving
  });

function applyTheme() {
  const savedTheme = localStorage.getItem("userTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// Apply the theme when the page loads
document.addEventListener("DOMContentLoaded", applyTheme);

// Handle data manipulation
document.getElementById("addData").addEventListener("click", function () {
  const key = document.getElementById("dataKey").value;
  const value = document.getElementById("dataValue").value;

  if (key && value) {
    localStorage.setItem(key, value);
    populateDataList();
    document.getElementById("dataKey").value = "";
    document.getElementById("dataValue").value = "";
  }
});

document.getElementById("clearData").addEventListener("click", function () {
  localStorage.clear();
  populateDataList();
});

function populateDataList() {
  const dataList = document.getElementById("storedDataList");
  dataList.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const listItem = document.createElement("li");
    listItem.className = "code-style"; // Add the code style class
    listItem.innerHTML = `<span class="key-style">${key}</span>: <span class="value-style">${value}</span>`; // Using innerHTML to add span elements for key and value
    dataList.appendChild(listItem);
  }
}


// Populate the data list when the page loads
document.addEventListener("DOMContentLoaded", populateDataList);
