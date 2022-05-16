let projectData = [
  {
    projectName: "Ad Blocker",

    projectUrl: "",
  },
  {
    projectName: "Auto Refresher",

  },
  {
    projectName: "Binary_To_Decimal_converter",
    projectImage: "Binary_To_Decimal_converter/binarytodecimal.mp4",
    projectUrl: "Binary_To_Decimal_converter/popup.html",
  },
  {
    projectName: "CSS Background Generator",

    projectUrl: "Countdown-timer/index.html",
  },
  {
    projectName: "Country_Capital_Extension",
    projectImage: "Country_Capital_Extension\Country Capital gif.mp4",
    projectUrl: "Country_Capital_Extension/popup.html",
  },
  {
    projectName: "Dark-Mode",
    projectImage: "Dark-Mode/img/img_dark.jpeg",
    projectUrl: "Dark-Mode/popup.html",
  },
  {
    projectName: "Github Extension",

    projectUrl: "Links-Launcher/popup.html",
  },
  {
    projectName: "links-tabs-saver",
    projectImage: "links-tabs-saver/images/workingimage.png",
    projectUrl: "links-tabs-saver/index.html",
  },
  {
    projectName: "List The Bookmarks",

  },
  {
    projectName: "Maths_addition",
    projectImage: "Maths_addition/images/math.jpg",
    projectUrl: "Maths_addition/index.html",
  },
  {
    projectName: "Motivation_unlimited",

    projectUrl: "Motivation_unlimited/popup.html",
  },

  {
    projectName: "News Extension",

  },
  {
    projectName: "Parential",
    projectImage: "Parential/images/workingimages.jpg",
    projectUrl: "Parential/popup.html",
  },
  {
    projectName: "Pinterest_extension",

    projectUrl: "Pinterest_extension/popup.html",
  },
  {
    projectName: "Pomodoro_Timer",
    projectImage: "Pomodoro_Timer/images/workingimage.png",
    projectUrl: "Pomodoro_Timer/popup.html",
  },
  {
    projectName: "Poor-Jokes",
    projectImage: "Poor-Jokes/images/workingimages.png",
    projectUrl: "Poor-Jokes/popup.html",
  },
  {
    projectName: "Puzzle Game",

  },
  {
    projectName: "QR-Generator",
    projectImage: "QR-Generator/images/workingimages.png",
    projectUrl: "QR-Generator/popup.html",
  },
  {
    projectName: "Stop Watch",
    projectUrl: "TIC-TAC-TOE/double.html",
  },
  {
    projectName: "Time Zone Finder",

  },

  {
    projectName: "Toxicity Classification Extension",

  },
  {
    projectName: "URL-shortener",
    projectImage: "URL-shortener/images/workingimage.png",
    projectUrl: "URL-shortener/popup.html",
  },
  {
    projectName: "Weather app",

    projectUrl: "calculator/popup.html",
  },
  {
    projectName: "currency-calc-extension",
    projectImage: "currency-calc-extension/images/workingimage1.png",
    projectUrl: "currency-calc-extension/popup.html",
  },
  {
    projectName: "grevocab",
    projectImage: "grevocab/src/ScreenShots/GREVocabImg.PNG",
    projectUrl: "grevocab/public/index.html",
  },
  {
    projectName: "programing_Meme",
    projectImage: "programing_Meme/images/workingimage.png",
    projectUrl: "programing_Meme/popup.html",
  },

  {
    projectName: "rgb to hex convertor",

  },
  {
    projectName: "Auto Right",
    projectImage: "",
    projectUrl: "Auto Right/index.html",
  },
  {
    projectName: "Background Remover",
    projectImage: "",
    projectUrl: "Background Remover/popup.html",
  },
  {
    projectName: "Books_Recommendation",
    projectImage: "",
    projectUrl: "Books_Recommendation/popup.html",
  },
  {
    projectName: "Calculate Age",
    projectImage: "",
    projectUrl: "Calculate Age/index.html",
  },
  {
    projectName: "Company Insider",
    projectImage: "",
    projectUrl: "Company Insider/popup.html",
  },
  {
    projectName: "Control Chrome Tabs",
    projectImage: "",
    projectUrl: "",
  },
  {
    projectName: "Food_Calorie_Extension",
    projectImage: "",
    projectUrl: "Food_Calorie_Extension/popup.html",
  },
  {
    projectName: "Movies_Recommendation",
    projectImage: "",
    projectUrl: "Movies_Recommendation/popup.html",
  },
  {
    projectName: "Music player",
    projectImage: "",
    projectUrl: "Music player/index.html",
  },
  {
    projectName: "Note Pad",
    projectImage: "",
    projectUrl: "Note Pad/popup.html",
  },
  {
    projectName: "Phone Checker",
    projectImage: "",
    projectUrl: "Phone Checker/popup.html",
  },
  {
    projectName: "Quick Access Google",
    projectImage: "",
    projectUrl: "Quick Access Google/popup.html",
  },
  {
    projectName: "Save_environment",
    projectImage: "",
    projectUrl: "Save_environment/popup.html",
  },
  {
    projectName: "Twitter Context Menu",
    projectImage: "",
    projectUrl: "",
  },
  {
    projectName: "User taking form",
    projectImage: "",
    projectUrl: "User taking form/index.html",
  },
  {
    projectName: "VAT_Calculator",
    projectImage: "",
    projectUrl: "VAT_Calculator/popup.html",
  }
];

var projectDetails = projectData.slice(0);
projectDetails.sort(function(a, b) {
    var x = a.projectName.toLowerCase();
    var y = b.projectName.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

let projectContainer = document.getElementById("js-projects");
console.log(projectContainer);

window.addEventListener("load", getProjects());

function getProjects() {
    let output = "";
    projectDetails.forEach(
        (data, item) =>
        (output += `
    <div class="projectCard">
    <a href=${data.projectUrl} class="hoverEffect" target="_blank">
      <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Project Image"
      />
        <h5 class="projectCardTitle">${data.projectName}</h5>
    </a>
  </div>
  `)
    );

    projectContainer.innerHTML = output;
    console.log("projectContainer", projectContainer.innerHTML);
}

// Search function starts
let searchInput = document.getElementById("searchBar");
let searchText = "";

searchInput.addEventListener("change", (e) => {
    searchText = e.target.value;
});

let searchForm = document.getElementById("searchForm");

searchBtn.addEventListener("click", (e) => {
    var filterData = [];
    if (searchText.length !== 0) 
    {
        projectData.forEach((obj) => {
            if (obj.projectName.toLowerCase().includes(searchText.toLowerCase())) {
                filterData.push(obj);
            }
        });
        console.log(filterData);

        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            var filterData = [];
            if (searchText.length !== 0) {
                projectData.forEach((obj) => {
                    if (
                        obj.projectName.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                        filterData.push(obj);
                    }
                });
                console.log(filterData);
            } else {
                filterData = [...projectData];
               
            }
            let filter = "";
            filterData.forEach(
                (data, item) =>
                (filter += `
    <div class="projectCard">
    <a href=${data.projectUrl}  target="_blank">
      <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Card image cap"
      />
        <h5 class="projectCardTitle">${data.projectName}</h5>
    </a>
  </div>
  `)
            );
            projectContainer.innerHTML = filter;
        });
    }else{
      alert("Please enter something to search!")
    }
});


// search function ends
window.onscroll = function() {
    myFunction();
};

var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {
    myFunction();
};

var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}