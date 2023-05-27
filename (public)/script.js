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
  } else if(d.getHours() == 0){
    time.textContent = 12 + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
  } else {
    time.textContent = d.getHours() + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + " am";
  }

  date.textContent = daysOfWeek[d.getDay()] + ", " + monthsOfYear[d.getMonth()] + " " + d.getDate();
}

update(time, date);
setInterval(update, 750, time, date);

//toggle options
document.getElementById("options-page").classList.toggle("visible");

function toggleOptions() {
  document.getElementById("options-page").classList.toggle("visible");
  document.getElementById("live-simply").classList.toggle("brightness-[0.7]");
}

//toggle content in options page
function contentChange(e){
  if (e == 0){
    document.getElementById("options-header").innerHTML = "Background";
  } else if (e == 1){
    document.getElementById("options-header").innerHTML = "Shortcuts";
  } else if (e == 2){
    document.getElementById("options-header").innerHTML = "Cards";
  } else if (e == 3){
    document.getElementById("options-header").innerHTML = "Color & Theme";
  }

}
var currentBackground1 = 'from-blue-300';
var currentBackground2 = 'to-pink-400';

function backgroundChange(j){
  if(j == 0){
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#f80c16]';
    currentBackground2 = 'to-[#e4bec0]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }
  else if(j==1){
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#103cf3]';
    currentBackground2 = 'to-[#a8b5ed]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }
  else if(j==2){
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#28fa43]';
    currentBackground2 = 'to-[#8ef59b]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }
  else if(j==3){
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#d7f420]';
    currentBackground2 = 'to-[#e5f19a]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }
  else if(j==4){
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#d3b3ec]';
    currentBackground2 = 'to-[#500091]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }
  else{
    const liveSimplyEl = document.getElementById("live-simply");
    liveSimplyEl.classList.remove(currentBackground1, currentBackground2);
    currentBackground1 = 'from-[#f522e7]';
    currentBackground2 = 'to-[#f18feb]';
    liveSimplyEl.classList.add(currentBackground1, currentBackground2);
  }

}

const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const liveSimplyEl = document.getElementById("live-simply");

function updateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  
  liveSimplyEl.style.backgroundImage = `linear-gradient(to bottom right, ${color1}, ${color2})`;
}

color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);