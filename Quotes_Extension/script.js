
    function quotes(country){
      fetch("https://api.quotable.io/random")
      .then(data => data.json())
      .then(data => {const text=data.content;
        
        const quote=document.querySelector("#quote");
          
          quote.textContent = text;
      })
    }
    
 
      
 

  document.getElementById("next").addEventListener("click",()=>{
quotes(); 

    });

