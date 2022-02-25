let image = document.getElementById("image");

fetch("https://meme-api.herokuapp.com/gimme/ProgrammerHumor", {
  method: "GET",
})
  .then((data) => data.json())
  .then((result) => {
    image.src = result.url;
  })
  .catch((err) => {
    console.error(err);
  });
