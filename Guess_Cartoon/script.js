var riddles = [{
  "question": 'images/1.png',
  "answer": "Chota Bheem"
}, {
  "question": 'images/2.png',
  "answer": "Doraemon"
}, {
  "question": 'images/3.jpg',
  "answer": "Perman"
}, {
  "question": 'images/4.png',
  "answer": "Ninja Hattori"
}, {
  "question": 'images/5.png',
   "answer": "Ben 10"
  },{
    "question": 'images/6.png',
    "answer": "Dora The Explorer"
  } ,
  {
    "question": "images/7.png",
    "answer": "Powerpuff Girls"
  }, {
    "question": "images/8.png",
    "answer": "Popeye"
  }, {
    "question": "images/9.png",
    "answer": "Looney Tunes"
  }, {
    "question": "images/10.png",
    "answer": "Thomas And His Friends"
  }
 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*10);

  document.querySelector("#question").innerHTML='<img src="'+riddles[n].question+'">' ; 

  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=riddles[n].answer ;

    });

    });

