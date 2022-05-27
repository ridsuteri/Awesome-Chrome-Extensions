var diy = [{
  "question": 'images/1.jpg',
  "answer": "Vertical Garden Wall- Of course, potted plants look great on an outdoor table, but there's also room for an unexpected display as well. Simply dress up a wooden slat with small potted plants to boost your deck's visual appeal."
}, {
  "question": 'images/2.jpg',
  "answer": "Rope Shelf- Hang gritty rope, like jute, from a Shaker rail with round pegs to create a shelf that fills a wall with style and function."
}, {
  "question": 'images/3.jpg',
  "answer": "Nautical Vase- Jute rope turns a cheap vase into a statement piece. It's as easy as it looks: Simply, hot-glue jute rope around a vessel for a beach-ready look."
}, {
  "question": 'images/4.jpg',
  "answer": "Blanket Ladder- Because your living room isn't complete unless it has at least three fuzzy throws. Before putting this wooden ladder on display, dress up a plain blanket by creating extra-large tassels and pom-poms from thick yarn and knotting them onto the end."
}, {
  "question": 'images/5.jpg',
   "answer": "Book Side Table- Put your dusty encyclopedias to good use with this side table. To assemble, cut trim to form a box frame that fits snugly around one book, nail it to the tabletop’s underside, and paint the top. Drill a hole the size of dowel through each book’s center and glue the dowel to the center of the table's underside. Stack encyclopedias, lining up holes, and twisting (as shown). Skewer the dowel through the holes to secure them to the tabletop"
  },{
    "question": 'images/6.jpg',
    "answer": "Pillow Pocket- Some call it a remote, others call it a clicker. No matter what you call it, store it in this no-sew pillow pocket. Start by cutting a pocket from an old pair of jeans. Then sandwich fusible fleece between the jean pocket and pillow cover, and iron the two layers together. Put the cover back on the pillow and cozy up for game day."
  } ,
  {
    "question": "images/7.jpg",
    "answer": "Wool Coasters- This simple craft turns your tattered cardigans and shrunken pullovers into coasters that you can use time and time again. Wash 100% wool in hot water, then dry with an agitator like jeans. After three rounds, sweaters should feel taut and felt-like. Use a pencil and a large-mouthed glass to trace circles onto the fabric and then snip out a set."
  }, {
    "question": "images/8.jpg",
    "answer": "Print-Out Art- Dress up bare walls with one of the photos on your camera roll. Get a favorite shot digitally enlarged and then add strips of wood along the top and bottom as a quick frame."
  }, {
    "question": "images/9.jpg",
    "answer": "Candle Lampshade- The dinner table shines brighter with a few clever lamps. Just pop a LED tea light in a wine glass and top it with a paper shade."
  }, {
    "question": "images/10.jpg",
    "answer": "Decorative Pinboard- Gather your favorite cards, photos or even your child's artwork for a seasonal display that'll add a personal touch to any room. Go for a store-bought frame or make your own. Start by hot-glueing small bulldog clips to a wooden frame, then place it in a spot that's easy to access so you can update the arrangement as often as you'd like."
  }
 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*10);

  document.querySelector("#question").innerHTML='<img src="'+diy[n].question+'">' ; 

  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=diy[n].answer ;

    });

    });

