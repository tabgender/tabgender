//clock, date
var time = document.getElementById("time");
var date = document.getElementById("date");
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

function update(time, date) {
  const d = new Date();

  if (d.getHours() > 12) {
    time.textContent = (d.getHours() - 12) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
  } else if (d.getHours() == 12) {
    time.textContent = 12 + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " pm";
  } else if (d.getHours() == 0) {
    time.textContent = 12 + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
  } else {
    time.textContent = d.getHours() + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
  }

  // date.textContent = daysOfWeek[d.getDay()] + ", " + monthsOfYear[d.getMonth()] + " " + d.getDate();
}

update(time, date);
setInterval(update, 750, time, date);

//toggle options
var hideOptions = true;
const optionsPage = document.getElementById("options-page");
const settings = document.getElementById("settings");

function toggleOptions() {
  optionsPage.style.transition = "opacity 0.2s";

  hideOptions = !hideOptions;

  optionsPage.style.opacity = (hideOptions) ? "0" : "1";
  optionsPage.style.pointerEvents = (hideOptions) ? "none" : "all";
}

//toggle customization
var hideCustomization = true;
const customizationPage = document.getElementById("customization-page");
const customizationButton = document.getElementById("customization-button");

function toggleCustomization() {

  if (!hideOptions) toggleOptions();

  customizationPage.style.transition = "opacity 0.2s";

  hideCustomization = !hideCustomization;

  customizationPage.style.opacity = (hideCustomization) ? "0" : "1";
  customizationPage.style.pointerEvents = (hideCustomization) ? "none" : "all";
}

// Event listener to close the options page when clicking outside
document.addEventListener('click', (event) => {
  const targetElement = event.target;

  // Check if the clicked element is the options button or inside the options page
  if (!hideOptions && targetElement !== settings && !optionsPage.contains(targetElement)) {
    toggleOptions();
  }

  //check if the clicked element is inside the customization page
  if (!hideCustomization && !optionsPage.contains(targetElement) && !customizationPage.contains(targetElement)) {
    toggleCustomization();
  }
});

//store customization
const main = document.getElementById("main");

var currentButton = "color0";
var currentBackground = "linear-gradient(#93C5FD, #F472B6)";

var storedButton = JSON.parse(window.localStorage.getItem("button"));
if(storedButton != null) currentButton = storedButton;

var storedBackground = JSON.parse(window.localStorage.getItem("background"));
if(storedBackground != null) currentBackground = storedBackground;

//give initial styling
var currentButtonElement = document.getElementById(currentButton);
currentButtonElement.classList.add("border");
currentButtonElement.classList.add("border-2");
currentButtonElement.classList.add("border-black");

changeBackground(currentBackground, currentButton);

function changeBackground(newBackground, newButton) {

  currentBackground = newBackground;
  main.style.background = currentBackground;
  main.style.backgroundSize = "100%";

  currentButtonElement = document.getElementById(currentButton);
  currentButtonElement.classList.remove("border");
  currentButtonElement.classList.remove("border-2");
  currentButtonElement.classList.remove("border-black");

  currentButton = newButton;
  
  currentButtonElement = document.getElementById(currentButton);
  currentButtonElement.classList.add("border");
  currentButtonElement.classList.add("border-2");
  currentButtonElement.classList.add("border-black");

  window.localStorage.setItem("button", JSON.stringify(currentButton));
  window.localStorage.setItem("background", JSON.stringify(currentBackground));
}