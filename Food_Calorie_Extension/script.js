function seeVal(food){
fetch("https://api.edamam.com/api/food-database/v2/parser?app_id=a4603046&app_key=06b910d0a8c1ae0ab05a47d7027be00b&ingr="+food+"&nutrition-type=cooking")
  .then(data => data.json())
    .then(foodData => {
        const foodText = foodData.hints[0].food.nutrients.ENERC_KCAL;
        const values = document.querySelector(".values");
        
        values.textContent = foodText+ " cals";
    })
  }
  
  document.getElementById("clickme").addEventListener("click",()=>{
    const food=document.querySelector(".food").value;
    console.log(food);
  seeVal(food);});
  
  
    