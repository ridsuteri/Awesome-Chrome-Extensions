function see(country){
  fetch("https://restcountries.com/v3.1/name/"+country)
  .then(data => data.json())
  .then(data => {
      const text = data[0].area;
      const output = document.querySelector(".output");
      
      output.textContent = text +" sq. km";
  })
}

document.getElementById("clickme").addEventListener("click",()=>{
  const country=document.querySelector(".country").value;
  console.log(country);
see(country);});


  