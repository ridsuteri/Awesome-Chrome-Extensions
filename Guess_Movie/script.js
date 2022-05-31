var lyrics = [{
  "question": "Mujhse hi aaj mujhko mila de, Dekhoon aadaton mein, tu hai ki nahi, Har saans se pooch ke bataa de, Inke faaslon mein, tu hai ki nahi",
  "answer": "Roy"
}, {
  "question": "Tujhe dekha to yeh jana sanam, Pyar hota hai deewana sanam,Tujhe dekha to yeh jana sanam, Pyar hota hai deewana sanam, Ab yahan se kahan jaayein hum,Teri baahon mein mar jaayein hum",
  "answer": "Dilwale Dulhania Le Jayenge"
}, {
  "question": "Maine uske shehar ko chooda, Uski gali mein dil ko toda, Phir bhi seene mein, Dhadakta hai yeh dil, Maine dil se usay nikaala,Jo na karna tha kar daala, Phir phi yaad usi ko karta hai yeh dil,Yeh dil deewana, Deewana ha hai yeh dil",
  "answer": "Pardes"
}, {
  "question": "Mere khaab mere khayaloon ki rani,Kisi din banegi humari kahani, Aye meri bekhudi, Ye kasam maine li, Pyar mein ek din, Meri jaan tujhe hai paana, O o jaane jaana",
  "answer": "Pyaar Kiya To Darna Kya"
}, {
  "question": "O.. meri har manmaani bas Tum tak,Baatein bachkaani bas tum tak,Meri nazar diwaani bas tum tak,Mere sukh dukh aate jaate saare,Tum tak, tum tak, tum tak soniya,Tum tak, tum tak, tum tak soniya",
   "answer": "Raanjhanaa"
  },{
    "question": "Bholi si surat aankhon mein masti aaye haaye,Arre bholi si surat aankhon mein masti,Door khadi sharmaye aaye haaye,Ek jhalak dikhlaye kabhi,Kabhi anchal mein chhup jaaye aaye haaye,Meri nazar se tum dekho to yaar nazar woh aaye",
    "answer": "Dil To Pagal Hai"
  } ,
  {
    "question": "Koi kahe kehta rahe,Kitna bhi humko deewana,Hum logon ki thokar mein hai yeh zamana,Jab saaz hai awaaz hai,Phir kis liye hichkichana,Jab saaz hai awaaz hai",
    "answer": "Dil Chahta Hai"
  }, {
    "question": "Tauba tumhare yeh ishare,Hum to deewane hain tumhare, Raaz yeh kaise khol rahi ho, Tum aankhon se bol rahi ho,Jaadu aate hain tumko saare",
    "answer": "Chalte Chalte"
  }, {
    "question": "Pyar jahan mein hota nahi,Toh phir bolo kya hota,Pyar jahan mein hota nahi,Toh phir bolo kya hota,Duniya mein dil koyi,Kabhi na dhadka hota,Dhadka hai dil a yar mil,Yeh pyar ka ijhar hai,Kaho na pyar hai",
    "answer": "Kaho Naa Pyaar Hai"
  }, {
    "question": "Haan hai koi to wajah,Jo jeena ka maza yun aane laga,Yeh hawaon mein hai kya,Thoda sa jo naasha yun chane laga,Pucho na pucha mujhe kya,Hua hai teri raahon mein,Aakar pucho na pucha na,Pucho na pucha mujhe kya,Milega teri bahon mein aakar,Yeh ishq haaye baithe bithaye,Jannat dikhaye haan o raama",
    "answer": "Jab We Met"
  }, {
    "question": "Dil duba dil duba neeli,Aankhon mein yeh dil duba,Mehbuba mehbuba bas,Yeh jaanle mehbuba,Dil duba dil duba,Neeli aankhon mein yeh dil duba,Mehbuba mehbuba bas yeh",
    "answer": "Khakee"
  },

 
]

 
    
 

  document.getElementById("next").addEventListener("click",()=>{let n=Math.floor(Math.random()*10);

  document.querySelector("#question").textContent= lyrics[n].question; 
  document.querySelector(".output").textContent=" " ;
  document.getElementById("clickme").addEventListener("click",()=>{
    document.querySelector(".output").textContent=lyrics[n].answer ;

    });

    });

