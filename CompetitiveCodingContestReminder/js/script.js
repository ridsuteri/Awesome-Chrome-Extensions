let result, currentTime;

let running = document.getElementById("running-value");
let upcoming = document.getElementById("upcoming-value");
let in24hr = document.getElementById("in24hr-value");
let value = document.querySelectorAll(".value");

let dark_check = document.getElementById("dark-btn");

// working of dark btn

dark_check.addEventListener("click", () => {
  if (dark_check.value == "on") {
    dark_check.value = "off";
    document.body.className = document.body.className.replace(
      "darken-4",
      "lighten-3"
    );
    document.body.className = document.body.className.replace(
      "text-lighten-2",
      "text-darken-4"
    );
    value.forEach((e) => {
      e.classList.remove("darken-3");
      e.classList.add("lighten-2");
    });
  } else {
    dark_check.value = "on";
    document.body.className = document.body.className.replace(
      "lighten-3",
      "darken-4"
    );
    document.body.className = document.body.className.replace(
      "text-darken-4",
      "text-lighten-2"
    );
    value.forEach((e) => {
      e.classList.remove("lighten-2");
      e.classList.add("darken-3");
    });
  }
});

function convertToHour(seconds) {
  let hr, mi, sc;
  hr = Math.floor(seconds / (60 * 60));
  seconds = seconds % (60 * 60);
  mi = Math.floor(seconds / 60);
  seconds = seconds % 60;
  sc = seconds;
  let t = "";
  if (hr > 0) t = t + `${hr} Hrs`;
  if (mi > 0) t = t + ` ${mi} Mins`;
  if (sc > 0) t = t + ` ${sc} Seconds`;
  return t;
}

function formatAMPM(date) {
  var hours = date.getHours();
  var days = date.getDay();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + ampm;
  var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
  return match[0] + " " + time;
}

function returnConverted(r) {
  const start_utcDate = r["start_time"];
  const end_utcDate = r["end_time"];
  const startDate = new Date(start_utcDate);
  const endDate = new Date(end_utcDate);
  const t = `<section class="section">
  <div class="col s12 m12 l12">
    <span class="platform flow-text left" id="name"
      ><a href="${r["url"]}" target="_blank">${r["name"]}</a></span
    >
  </div>
  <div class="col s12 m6 l6">
    <span class="platform flow-text left" id="platform"
      >${r["site"]}</span
    >
  </div>
  <div class="col s12 m6 l6" id="duration">
    <span class="platform flow-text left" id="duration"
      >${convertToHour(r["duration"])}</span
    >
  </div>
  <div class="col s12 m6 l6">
    <span><b>From - ${formatAMPM(startDate)}</b></span>
  </div>
  <div class="col s12 m6 l6">
    <span><b>To - ${formatAMPM(endDate)}</b></span>
  </div>
</section> <div class="col s12 m12 l12"><hr /></div>`;
  return t;
}

const funToClearProgressbar = function () {
  running.innerHTML = "";
  in24hr.innerHTML = "";
  upcoming.innerHTML = "";
};

let running_count = 0,
  upcomin_count = 0,
  in24hr_count = 0;

let updateUI = function () {
  currentTime = new Date().toISOString();
  result.forEach((r) => {
    if (r["status"] === "CODING") {
      let v = returnConverted(r);
      if (running_count < 10) {
        running.insertAdjacentHTML("beforeend", v);
        running_count += 1;
      }
    } else {
      let v = returnConverted(r);
      if (upcomin_count < 15 && r["start_time"] > currentTime) {
        upcoming.insertAdjacentHTML("beforeend", v);
        upcomin_count += 1;
      }
    }
    if (r["in_24_hours"] === "Yes") {
      let v = returnConverted(r);
      if (in24hr_count < 10) {
        in24hr.insertAdjacentHTML("beforeend", v);
        in24hr_count += 1;
      }
    }
  });
};

let initFun = function () {
  fetch("https://kontests.net/api/v1/all")
    .then((res) => res.json())
    .then((data) => {
      result = data;
      funToClearProgressbar();
      updateUI();
    });
};

initFun();


document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(elems);
});

const remVal = document.getElementById("remValue");
const remValbtn = document.getElementById("value-btn");

remValbtn.addEventListener("click", () => {
  console.log(remVal.value);
  localStorage.setItem("cf", remVal.value);
});
if (localStorage.getItem("cf") !== null) {
  console.log('my name is');
  console.log(localStorage.getItem("cf"));
}
