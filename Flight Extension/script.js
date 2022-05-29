fetch(
  "http://api.aviationstack.com/v1/flights?access_key=6bc0849dd2343cdcfe14d12cf98eca8a"
)
  .then((data) => data.json())
  .then((issuesData) => {
    console.log(issuesData);

    const items = issuesData.data;
    let cardContainer;

    let createTaskCard = (task) => {
      let card = document.createElement("div");
      card.className = "blog_card";
      card.style.width = "450px";

      let cardMeta = document.createElement("div");
      cardMeta.className = "meta";

      let cardImage = document.createElement("p");
      cardImage.style.width = "100px";
      cardImage.style.height = "300px";
      cardImage.style.margin = "auto";
      cardImage.innerHTML = "Flight Number: " + task.flight.number;

      let cardBody = document.createElement("div");
      cardBody.className = "description";

      let title = document.createElement("h5");
      title.innerText = task.airline.name;

      let state = document.createElement("h6");
      state.innerHTML = task.flight_date;

      let description = document.createElement("p");
      let descriptions = document.createElement("p");
      descriptions.innerHTML =
        "Departure: from " +
        task.departure.airport +
        " " +
        task.departure.terminal +
        " at " +
        task.departure.estimated;
      description.innerHTML =
        "Arrival: at " +
        task.arrival.airport +
        " " +
        task.arrival.terminal +
        " at " +
        task.arrival.estimated;
      description.className = "card-text";

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(descriptions);
      cardBody.appendChild(state);
      cardMeta.appendChild(cardImage);
      card.appendChild(cardMeta);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    };

    const newArray = items.slice(0, 10);
    let initListOfTasks = () => {
      document.getElementById("issues").innerHTML = "";
      cardContainer = document.getElementById("issues");
      newArray.forEach((task) => {
        createTaskCard(task);
      });
    };

    initListOfTasks();
  });
