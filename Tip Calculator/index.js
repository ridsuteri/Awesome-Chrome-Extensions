let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let alert=document.getElementById('alert');
    let amount = document.getElementById('amount').value;
    let rate = document.getElementById('rate').value;
    let people = document.getElementById('people').value;
    let ans = document.getElementById('ans');
    let myAmount=Number(amount);
    let myRate=Number(rate);
    let myPeople=Number(people);
    let tipAmount=(myRate/100)*myAmount;
    let tipPerPerson=tipAmount/myPeople;
    let totalPerPerson=myAmount/myPeople + tipPerPerson;
    if(amount!='' && rate!=''&& people!='' && amount>0 && people>0){
    ans.style.display="block";
    ans.innerHTML=`<p >Tip amount per person : <b>₹${tipPerPerson.toFixed(2)}</b></p>
    <p style="margin-bottom:0px">Total amount per person : <b>₹${totalPerPerson.toFixed(2)}</b></p>`;
    }
    else{
        alert.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Please enter valid bill amount, tip percent and number of people.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }
    setTimeout(() => {
        alert.innerHTML='';
    }, 4000);
})
