function seeCode(country){
  fetch("https://restcountries.com/v3.1/name/"+country)
  .then(data => data.json())
  .then(data => {
      const outputText = data[0].cca3;
      const output = document.querySelector(".code");
      
      output.textContent = outputText;
  })
}

document.getElementById("clickme").addEventListener("click",()=>{
  const country=document.querySelector(".country").value;
  console.log(country);
seeCode(country);});


  