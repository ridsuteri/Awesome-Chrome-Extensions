var riddles = [{
  "question": "What can you hold in your right hand but never in your left hand?",
  "answer": "Your left hand"
}, {
  "question": "What do you call a sad coffee?",
  "answer": "A depresso."
}, {
  "question": "What do you call a snowman in summer?",
  "answer": "Water"
}, {
  "question": "What is never hungry at Thanksgiving?",
  "answer": "The turkey because it is always stuffed"
}, {
  "question": "There is an apple tree on a cliff. If the wind is blowing 15mph to the West, where would the apple fall?",
   "answer": "Down!"
  },{
    "question": "What is the softest nut in the entire world?",
    "answer": "A Donut"
  } ,
  {
    "question": "What is the safest room to be in during a zombie apocalypse?",
    "answer": "The living room"
  }, {
    "question": "What do you call a group of a dozen atoms?",
    "answer": "Dozen matter."
  }, {
    "question": "What did the boy coffee say to the girl coffee?",
    "answer": "I love you a latte"
  }, {
    "question": "What do you call a fish with 4 eyes?",
    "answer": "Fiiiish"
  }, {
    "question": "How did the computer get drunk?",
    "answer": "It took too many screenshots!"
  },

 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*10);

  document.querySelector("#question").textContent= riddles[n].question; 
  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=riddles[n].answer ;

    });

    });

