function seeCap(country){
  fetch("https://restcountries.com/v3.1/name/"+country)
  .then(data => data.json())
  .then(data => {
      const text = data[0].maps.googleMaps;
      const output = document.querySelector(".output");
      
      output.textContent = text;
  })
}

document.getElementById("clickme").addEventListener("click",()=>{
  const country=document.querySelector(".country").value;
  console.log(country);
seeCap(country);});


  