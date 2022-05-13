var facts = [{
  "fact": "Glaciers and ice sheets hold about 69 percent of the world's freshwater."
}, {
  "fact": "	Hot water will turn into ice faster than cold water."
}, {
  "fact": "	The name of all the continents end with the same letter that they start with."
}, {
  "fact": "	There are only two words in the English language that have all five vowels in order: 'abstemious' and 'facetious.'"
}, {
  "fact": "Minus 40 degrees Celsius is exactly the same as minus 40 degrees Fahrenheit."
  },{
    "fact": "You can't kill yourself by holding your breath."
  } ,
  {
    "fact": "	If you sneeze too hard, you can fracture a rib. If you try to suppress a sneeze, you can rupture a blood vessel in your head or neck and die."
  }, {
    "fact": "	On average, people fear spiders more than they do death."
  }, {
    "fact": "Wearing headphones for just an hour will increase the bacteria in your ear by 700 times"
  }, {
    "fact": "It would take you approximately 18 months to walk all the way along The Great Wall of China. (It’s over 5,000 miles long)."
  }, {
    "fact": "The longest place name on the planet is 85 letters long. The place is Taumatawhakatangihanga-koauauotamateaturipukakapikimaung-ahoronukupokaiwhenuakitanatahu, New Zealand"
  },

 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*11);

  document.querySelector("#fact").textContent= facts[n].fact; 
 

    });

