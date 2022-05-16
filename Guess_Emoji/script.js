var riddles = [{
  "question": 'images/1.jpg',
  "answer": "Fireman"
}, {
  "question": 'images/2.jpg',
  "answer": "iPad"
}, {
  "question": 'images/3.jpg',
  "answer": "Death Note"
}, {
  "question": 'images/4.jpg',
  "answer": "Hot Dog"
}, {
  "question": 'images/5.jpg',
   "answer": "Burger King"
  },{
    "question": 'images/6.jpg',
    "answer": "Spain"
  } ,
  {
    "question": "images/7.jpg",
    "answer": "Pokemon"
  }, {
    "question": "images/8.jpg",
    "answer": "Jerry"
  }, {
    "question": "images/9.jpg",
    "answer": "Fanta"
  }, {
    "question": "images/10.jpg",
    "answer": "Uber"
  }
 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*10);

  document.querySelector("#question").innerHTML='<img src="'+riddles[n].question+'">' ; 

  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=riddles[n].answer ;

    });

    });

