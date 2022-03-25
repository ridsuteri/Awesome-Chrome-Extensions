let projectData = [
  {
    projectName: "Auto Refresher",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "BMI Calculator",
    projectImage: "img.png",
    projectUrl: "",
  },

  {
    projectName: "CSS Background Generator",
    projectImage: "img.jpeg",
    projectUrl: "",
  },
  {
    projectName: "Calender 2",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "Code Launcher",
    projectImage: "img.PNG",
    projectUrl: "",
  },
  {
    projectName: "Coin toss",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "Competitive Trainer",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "Countdown-timer",
    projectImage: "img.PNG",
    projectUrl: "",
  },
  {
    projectName: "Dark-Mode",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "Github Extension",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "Links-Launcher",
    projectImage: "img.png",
    projectUrl: "",
  },
  {
    projectName: "List The Bookmarks",
    projectImage: "img.png",
    projectUrl: "",
  },

  
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
    <a href=${data.projectUrl} class="hoverEffect" target="_blank">
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