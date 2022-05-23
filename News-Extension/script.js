fetch(
  "https://newsdata.io/api/1/news?apikey=pub_6258cad616bb55ee634704d44f2a476b74a7&country=in&language=en"
)
  .then((data) => data.json())
  .then((issuesData) => {
    console.log(issuesData);

    const items = issuesData.results;
    let cardContainer;

    let createTaskCard = (task) => {
      let card = document.createElement("div");
      card.className = "blog_card";
      card.style.width = "450px";

      let cardMeta = document.createElement("div");
      cardMeta.className = "meta";

      let cardImage = document.createElement("img");
      cardImage.className = "photo";
      cardImage.style.width = "300px";
      cardImage.style.height = "300px";
      cardImage.style.margin = "auto";
      cardImage.src = task.image_url;
      cardImage.alt = task.source_id;

      let cardBody = document.createElement("div");
      cardBody.className = "description";

      let title = document.createElement("h5");
      title.innerText = task.title;

      let state = document.createElement("h6");
      state.innerText = task.pubDate;

      let description = document.createElement("p");
      let string = task.description;
      if (string.length > 150) {
        string = string.substring(0, 149) + "...";
      }
      description.innerText = string;
      description.className = "card-text";

      let url = document.createElement("a");
      url.className = ".read-more";
      url.innerText = "Read more";
      url.href = task.link;
      url.target = "_blank";

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(state);
      cardBody.appendChild(url);
      cardMeta.appendChild(cardImage);
      card.appendChild(cardMeta);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
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

var e = document.getElementById("category");
function show() {
  var cat = e.options[e.selectedIndex].text;
  console.log(cat);
  let category = cat.toLowerCase();
  console.log(category);
  fetch(
    `https://newsdata.io/api/1/news?apikey=pub_6258cad616bb55ee634704d44f2a476b74a7&category=${category}&language=en`
  )
    .then((data) => data.json())
    .then((issuesData) => {
      console.log(issuesData);

      const items = issuesData.results;
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "blog_card";
        card.style.width = "450px";

        let cardMeta = document.createElement("div");
        cardMeta.className = "meta";

        let cardImage = document.createElement("img");
        cardImage.className = "photo";
        cardImage.style.width = "300px";
        cardImage.style.height = "300px";
        cardImage.style.margin = "auto";
        cardImage.src = task.image_url;
        cardImage.alt = task.source_id;

        let cardBody = document.createElement("div");
        cardBody.className = "description";

        let title = document.createElement("h5");
        title.innerText = task.title;

        let state = document.createElement("h6");
        state.innerText = task.pubDate;

        let description = document.createElement("p");
        let string = task.description;
        if (string.length > 150) {
          string = string.substring(0, 149) + "...";
        }
        description.innerText = string;
        description.className = "card-text";

        let url = document.createElement("a");
        url.className = ".read-more";
        url.innerText = "Read more";
        url.href = task.link;
        url.target = "_blank";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(state);
        cardBody.appendChild(url);
        cardMeta.appendChild(cardImage);
        card.appendChild(cardMeta);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
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
}
e.onchange = show;

var ele = document.getElementById("country");
function showEle() {
  var cat = ele.options[ele.selectedIndex].text.substring(0, 2);
  console.log(cat);
  let country = cat.toLowerCase();
  console.log(country);
  fetch(
    `https://newsdata.io/api/1/news?apikey=pub_6258cad616bb55ee634704d44f2a476b74a7&country=${country}&language=en`
  )
    .then((data) => data.json())
    .then((issuesData) => {
      console.log(issuesData);

      const items = issuesData.results;
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "blog_card";
        card.style.width = "450px";

        let cardMeta = document.createElement("div");
        cardMeta.className = "meta";

        let cardImage = document.createElement("img");
        cardImage.className = "photo";
        cardImage.style.width = "300px";
        cardImage.style.height = "300px";
        cardImage.style.margin = "auto";
        cardImage.src = task.image_url;
        cardImage.alt = task.source_id;

        let cardBody = document.createElement("div");
        cardBody.className = "description";

        let title = document.createElement("h5");
        title.innerText = task.title;

        let state = document.createElement("h6");
        state.innerText = task.pubDate;

        let description = document.createElement("p");
        let string = task.description;
        if (string.length > 150) {
          string = string.substring(0, 149) + "...";
        }
        description.innerText = string;
        description.className = "card-text";

        let url = document.createElement("a");
        url.className = ".read-more";
        url.innerText = "Read more";
        url.href = task.link;
        url.target = "_blank";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(state);
        cardBody.appendChild(url);
        cardMeta.appendChild(cardImage);
        card.appendChild(cardMeta);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
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
}
ele.onchange = showEle;
