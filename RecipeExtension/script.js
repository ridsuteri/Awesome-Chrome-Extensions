const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");

const results = document.getElementById("results");

inputText.onchange = function () {
  console.log(inputText.value);
  let food = inputText.value.toLowerCase();
  upload.innerHTML = "Food Item Entered Successfully!";

  prediction.innerHTML = "Recipes Loading ...";

  //Loading location
  fetch(
    `https://api.edamam.com/search?q=${food}&app_id=c33623dd&app_key=f2e6e8d9fffc225326d3185a0d107543`
  )
    .then((data) => data.json())
    .then((recipeData) => {
      recipes = recipeData;

      prediction.innerHTML = "";
      results.style.display = "block";

      const items = recipes.hits;
      console.log(items);
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "450px";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.style.backgroundImage = `url(${task.image})`;

        let title = document.createElement("b");
        title.className = "card-header";
        title.innerText = task.label;

        let state = document.createElement("h6");
        state.innerText = task.dishType;

        let description = document.createElement("p");
        let ingredientLength = task.ingredientLines.length;

        for (var i = 0; i < ingredientLength; i++)
          description.innerText =
            description.innerText + task.ingredientLines[i];

        description.className = "card-text";

        let type = document.createElement("p");
        type.className = "card-text";
        type.innerText = task.cuisineType;

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(state);
        cardBody.appendChild(type);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
      };

      const newArray = items.slice(0, items.length);
      let initListOfTasks = () => {
        document.getElementById("results").innerHTML = "";
        cardContainer = document.getElementById("results");
        newArray.forEach((task) => {
          createTaskCard(task.recipe);
          console.log(task);
        });
      };

      initListOfTasks();
    });
};
