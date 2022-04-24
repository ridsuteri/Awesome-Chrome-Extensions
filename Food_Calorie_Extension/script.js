function seeVal(food){
fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=a4603046&app_key=06b910d0a8c1ae0ab05a47d7027be00b&ingr="+food+"&nutrition-type=cooking")
  .then(data => data.json())
    .then(foodData => {
        const foodText = foodData.hints[0];
       // const foodMiss= foodData.hints;
        const values = document.querySelector(".values");
        if(foodText)
        values.textContent = foodText.food.nutrients.ENERC_KCAL+ " cals";
        else
        values.textContent = "Please type the correct food item";
        document.getElementsByClassName("loader")[0].style.display = "none";
    })
  }
  function spinner() {
    document.getElementsByClassName("loader")[0].style.display = "block";
}
  document.getElementById("clickme").addEventListener("click",()=>{
    const food=document.querySelector(".food").value;
    console.log(food);
  seeVal(food);
spinner();});

    