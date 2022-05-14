var vocab = [{
  "word": "narcissist- someone who is excessively self-centered "
}, {
  "word": "quixotic- not sensible about practical matters"
}, {
  "word": "abhorrent- offensive to the mind"
}, {
  "word": "actuarial- relating to statistics to calculate insurance premiums"
}, {
  "word": "perpetual- continuing forever or indefinitely"
  },{
    "word": "trepidation- a feeling of alarm or dread"
  } ,
  {
    "word": "benevolent- showing or motivated by sympathy and understanding"
  }, {
    "word": "benign- kind in disposition or manner"
  }, {
    "word": "impetuous- characterized by undue haste and lack of thought"
  }, {
    "word": "ineluctable- impossible to avoid or evade"
  }, {
    "word": "vexation- anger produced by some annoying irritation"
  },
  {
    "word": "peruse- examine or consider with attention and in detail"
  },
  {
    "word": "pernicious- exceedingly harmful"
  },
  {
    "word": "unfettered- not bound or restrained, as by shackles and chains"
  },

  {
    "word": "parity- functional equality"
  },
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*15);

  document.querySelector("#vocab").textContent= vocab[n].word; 
 

    });

