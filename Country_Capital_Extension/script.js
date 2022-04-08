/*async function fetchData(){const country=document.frm.country.value;
try{const res=await fetch("https://restcountries.com/v3.1/name/"+ country );
const record=await res.json();
document.getElementById("capital").innerHTML=record.capital;}
catch (err) {
    console.error(err);
  }
}
document.getElementById("btn").onclick=fetchData();
*/
function yu(){let clk=country.value;
  console.log(clk);
   capital.textContent =clk;}
//const form = document.querySelector('form');
const btn = document.querySelector(".btn");
const country = document.querySelector(".country");
const capital = document.querySelector(".capital");
btn.addEventListener("click", yu);
  /*  fetch("https://api.kanye.rest/")
    .then(data => data.json())
    .then(capitalData => {
        const capitalText = capitalData.quote;

        capital.textContent = capitalText;
    });*/

   // results.textContent = "Please enter a valid number!";
  //  let totalInches = fetch("https://restcountries.com/v3.1/name/"+ feet );
    //let totalInchess=totalInches.json();
   // capital.textContent = `${api[0].capital}`;
    //document.querySelector('#country').value = '';
//})
