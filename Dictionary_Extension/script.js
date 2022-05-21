 function diction(word){
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
    .then(data => data.json())
    .then(wordData => {
        const text = wordData[0].meanings[0].definitions[0].definition;
        const text1 = wordData[0].meanings[0].definitions[1].definition;
        const text2 = wordData[0].meanings[0].definitions[2].definition;

        output=document.querySelector(".output");
        output1=document.querySelector(".output1");
        output2=document.querySelector(".output2");
        output.textContent ="1. "+ text;
        output1.textContent ="2. "+text1;
        output2.textContent ="3. "+text2;

    })
  }
  
    document.getElementById("clickme").addEventListener("click",()=>{
      const word=document.querySelector(".word").value;
    
    diction(word);});
  
    document.getElementById("reset").addEventListener("click",()=>{
      const word=document.querySelector(".word");
      word.value=" ";
    const output=document.querySelector(".output");
    output.textContent= " "; 
    const output1=document.querySelector(".output1");
    output1.textContent= " "; 
    const output2=document.querySelector(".output2");
    output2.textContent= " "; 
      });
  
  