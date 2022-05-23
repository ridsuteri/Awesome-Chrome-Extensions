
function count(word){let sum=0;
  output=document.querySelector(".output");
  let split = word.split(' ');
  
  for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          sum += 1;
      }
  }
  output.textContent= sum;
  
  }
     
    document.getElementById("clickme").addEventListener("click",()=>{
      const word=document.querySelector(".word").value;
    
    count(word);});
  
    document.getElementById("reset").addEventListener("click",()=>{
      const word=document.querySelector(".word");
      word.value=" ";
    const output=document.querySelector(".output");
    output.textContent= " "; 
      });
  
  