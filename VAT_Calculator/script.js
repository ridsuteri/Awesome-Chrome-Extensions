const netPrice = document.getElementById("net-price");
const vatRate = document.getElementById("vat-rate");
const vatAdded = document.getElementById("vat-added");
const incAmount = document.getElementById("inc-amount");
const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");

let calculateVAT = (price, rate) => {
	let vatAddedPrice = Number((price * (rate / 100)));
	vatAdded.value = vatAddedPrice.toFixed(2);
	let totalAmount = Number(price) + vatAddedPrice;
	return totalAmount;
}

// Shows a red border as a warning for 2 seconds
let redBorder = () => {
  netPrice.style.border = "1px solid red";
  setTimeout(function() {
    netPrice.style.border = "1px solid transparent";
  }, 2000);
}

let greenBorder = () => {
  vatAdded.style.border = "1px solid green";
  incAmount.style.border = "1px solid green";
  setTimeout(function() {
    vatAdded.style.border = "1px solid transparent";
    incAmount.style.border = "1px solid transparent";
  }, 2000);
}

calcBtn.addEventListener('click', function() {
	if (netPrice.value === "" || isNaN(netPrice.value)) {
    redBorder();
		netPrice.value = "";
	}

	else if (vatRate.value === "" || isNaN(vatRate.value)) {
		redBorder();
		vatRate.value = "";
	}

  else{
    let finalAmount = calculateVAT(netPrice.value, vatRate.value);
    incAmount.value = finalAmount;
    greenBorder();
  }
})

resetBtn.addEventListener("click", function() {
  // Resets all the values
	netPrice.value = "";
	vatRate.value = "";
	vatAdded.value = "";
	incAmount.value = "";
})