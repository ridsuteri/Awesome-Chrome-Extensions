var input = document.querySelector("#github");
var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  //Assigned Issues
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  fetch(
    "https://api.github.com/search/issues?q=is%3Aissue+assignee%3A" +
      input.value +
      "+archived%3Afalse+"
  )
    .then((data) => data.json())
    .then((issuesData) => {
      const items = issuesData.items;
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "row";
        let cardBody = document.createElement("div");
        cardBody.className = "seriesCol";

        let title = document.createElement("h5");

        title.innerText = task.title;

        let state = document.createElement("h5");
        state.innerText = task.state;

        const url = task.url;
        const [all, repo, number] = url.match(/([^\/]+)\/issues\/(\d+)$/);

        console.log([repo, number]);
        let seriesName = document.createElement("h4");
        seriesName.innerText = repo;

        cardBody.appendChild(title);
        cardBody.appendChild(seriesName);
        cardBody.appendChild(state);

        cardContainer.appendChild(cardBody);
      };

      const newArray = items.slice(0, 5);
      let initListOfTasks = () => {
        document.getElementById("issues").innerHTML = "";

        cardContainer = document.getElementById("issues");
        newArray.forEach((task) => {
          createTaskCard(task);
        });
      };

      initListOfTasks();
    });

  //Your Recent Activity
  fetch("https://api.github.com/users/" + input.value + "/events/public")
    .then((data) => data.json())
    .then((activityData) => {
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "row";
        console.log(task);
        let cardBody = document.createElement("div");
        cardBody.className = "seriesCol";

        let title = document.createElement("img");

        title.src = task.org.avatar_url;
        title.className = "avatar";

        let type = document.createElement("h5");
        type.innerText = task.type;

        let seriesName = document.createElement("h4");
        seriesName.innerText = task.repo.name;

        cardBody.appendChild(title);
        cardBody.appendChild(seriesName);
        cardBody.appendChild(type);

        cardContainer.appendChild(cardBody);
      };

      const newArray = activityData.slice(0, 5);
      let initListOfTasks = () => {
        document.getElementById("pulls").innerHTML = "";

        cardContainer = document.getElementById("pulls");
        newArray.forEach((task) => {
          createTaskCard(task);
        });
      };

      initListOfTasks();
    });

  //Feed
  fetch(
    "https://api.github.com/users/" + input.value + "/received_events/public"
  )
    .then((data) => data.json())
    .then((activityData) => {
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "row";
        console.log(task);
        let cardBody = document.createElement("div");
        cardBody.className = "seriesCol";

        let title = document.createElement("img");

        title.src = task.actor.avatar_url;
        title.className = "avatar";

        let type = document.createElement("h5");
        type.innerText = task.type;

        let seriesName = document.createElement("h4");
        seriesName.innerText = task.repo.name;

        cardBody.appendChild(title);
        cardBody.appendChild(seriesName);
        cardBody.appendChild(type);

        cardContainer.appendChild(cardBody);
      };

      const newArray = activityData.slice(0, 5);
      let initListOfTasks = () => {
        document.getElementById("feeds").innerHTML = "";

        cardContainer = document.getElementById("feeds");
        newArray.forEach((task) => {
          createTaskCard(task);
        });
      };

      initListOfTasks();
    });

  fetch("https://api.github.com/users/" + input.value)
    .then((data) => data.json())
    .then((userData) => {
      user_image = document.getElementById("user_image");
      user_image.src = userData.avatar_url;
      name = document.getElementById("name");
      name.innerHTML = userData.name;
      username = document.getElementById("username");
      username.innerHTML = userData.login;
    });
});
