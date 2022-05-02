//Iput Vars
const loanForm = document.querySelector('#loan-form');
const loanInput = document.querySelector('#loan-amount');
const percentInput = document.querySelector('#percent-amount');
const monthsInput = document.querySelector('#months-amount');
const submit = document.querySelector('#submit');

//Output Vars
const amountTotal = document.querySelector('#amount-total');
const interestTotal = document.querySelector('#amount-interest');
const mothly = document.querySelector('#amount-monthly');


loanForm.addEventListener('submit', calcLoanAmount);

// Calculate Loan Amount
function calcLoanAmount(e) {
    const interest = (loanInput.value * (percentInput.value / 100) * monthsInput.value / 12).toFixed(2);
    document.querySelector('.form-loading').setAttribute("style", "display: block");
    document.querySelector('.form-results').setAttribute("style", "display: none");
    setTimeout(() => {
        document.querySelector('.form-loading').setAttribute("style", "display: none");
    }, 1000);
    setTimeout(() => {
        document.querySelector('.form-results').setAttribute("style", "display: flex");
        interestTotal.innerText = interest;
        amountTotal.innerText = (interest * 1 + loanInput.value * 1).toFixed(2);
        mothly.innerText = (amountTotal.innerText * 1 / monthsInput.value).toFixed(2)
    }, 1050);


    e.preventDefault();

}
