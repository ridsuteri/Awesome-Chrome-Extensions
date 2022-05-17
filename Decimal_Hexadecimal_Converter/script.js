
function convert(num){const type= document.getElementById("type");
const typeData=type.value;
   
if(typeData === "hexadecimal")
{
output=document.querySelector(".output");
output.textContent= parseInt(num,16);
}
else if(typeData === "decimal"){

    output=document.querySelector(".output");
let number=parseInt(num);
    output.textContent= number.toString(16); 
    
}
}

/*function decimalToHexadec(num){
    if (num == 0)
    return 0;
else
    return ((num % 16) + 10 *decimalToBinary(parseInt(num / 16)));
 
}
   */
  document.getElementById("clickme").addEventListener("click",()=>{
    let num=document.querySelector(".num").value;
    console.log(num);
  convert(num);});

  document.getElementById("reset").addEventListener("click",()=>{
    const num=document.querySelector(".num");
    num.value=" ";
  const output=document.querySelector(".output");
  output.textContent= " "; 
    });

