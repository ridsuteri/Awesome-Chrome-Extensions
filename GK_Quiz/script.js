var riddles = [{
  "question": "Grand Central Terminal, Park Avenue, New York is the world's",
  "answer": "largest railway station"
}, {
  "question": "Entomology is the science that studies",
  "answer": "Insects"
}, {
  "question": "Hitler party which came into power in 1933 is known as",
  "answer": "Nazi Party"
}, {
  "question": "Galileo was an Italian astronomer who",
  "answer": "developed the telescope"
}, {
  "question": "Famous sculptures depicting art of love built some time in 950 AD - 1050 AD are",
   "answer": "Khajuraho temples"
  },{
    "question": "For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having",
    "answer": "low melting point"
  } ,
  {
    "question": "Golden Temple, Amritsar is India's",
    "answer": "largest Gurdwara"
  }, {
    "question": "During World War I Germany was defeated in the Battle of Verdun on the western front and Romania declared war on the eastern front in the year",
    "answer": "1916 AD"
  }, {
    "question": "Fa-Hien was",
    "answer": "the first Buddhist pilgrim of China to visit India during the reign of Chandragupta Vikramaditya"
  }, {
    "question": "The chief constituent of gobar gas is",
    "answer": "methane"
  }, {
    "question": "The chief purpose of crop rotation is to check the loss of top soil",
    "answer": "of its mineral content"
  },

 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*11);

  document.querySelector("#question").textContent= riddles[n].question; 
  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=riddles[n].answer ;

    });

    });

