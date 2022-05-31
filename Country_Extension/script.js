function seeCoun(capital){
  fetch("https://restcountries.com/v3.1/capital/" +capital)
  .then(data => data.json())
  .then(data => {
      const text = data[0].name.common;
      const output = document.querySelector(".output");
      
      output.textContent = text;
  })
}

document.getElementById("clickme").addEventListener("click",()=>{
  const capital=document.querySelector(".capital").value;
 
seeCoun(capital);});


  