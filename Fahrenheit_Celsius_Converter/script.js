function convert(num){const type= document.getElementById("type");
const typeData=type.value;
output=document.querySelector(".output");
if(typeData === "fahrenheit")
{let c=((num-32)*5)/9;
output.textContent= c.toFixed(3) + " °C";}

else{let f=((num*9)/5)+32;
    output.textContent= f.toFixed(3) + " °F"; 
}
}
   
  document.getElementById("clickme").addEventListener("click",()=>{
    const num=document.querySelector(".num").value;
    console.log(num);
  convert(num);});

  document.getElementById("reset").addEventListener("click",()=>{
    const num=document.querySelector(".num");
    num.value=" ";
  const output=document.querySelector(".output");
  output.textContent= " "; 
    });


