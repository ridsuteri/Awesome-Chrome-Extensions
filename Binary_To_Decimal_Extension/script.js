function convert(num){const type= document.getElementById("type");
const typeData=type.value;
   
if(typeData === "binary")
{
output=document.querySelector(".output");
output.textContent= parseInt(num,2);
}
else{

    output=document.querySelector(".output");
    output.textContent= decimalToBinary(num); 
}
}

function decimalToBinary(num){
    if (num == 0)
    return 0;
else
    return ((num % 2) + 10 *decimalToBinary(parseInt(num / 2)));
 
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