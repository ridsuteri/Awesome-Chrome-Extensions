document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			telephone: document.getElementById('telephone').value,
			address1: document.getElementById('address1').value,
			address2: document.getElementById('address2').value,
			address3: document.getElementById('address3').value,
			city: document.getElementById('city').value,
			postcode: document.getElementById('postcode').value,
			cardnumber: document.getElementById('card-number').value,
			month: document.getElementById('month').value,
			year: document.getElementById('year').value,
			cvv: document.getElementById('cvv').value
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('telephone').value = '';
	document.getElementById('address1').value = '';
	document.getElementById('address2').value = '';
	document.getElementById('address3').value = '';
	document.getElementById('city').value = '';
	document.getElementById('postcode').value = '';
	document.getElementById('card-number').value = '';
	document.getElementById('cvv').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		telephone: document.getElementById('telephone').value,
		address1: document.getElementById('address1').value,
		address2: document.getElementById('address2').value,
		address3: document.getElementById('address3').value,
		city: document.getElementById('city').value,
		postcode: document.getElementById('postcode').value,
		cardnumber: document.getElementById('card-number').value,
		month: document.getElementById('month').value,
		year: document.getElementById('year').value,
		cvv: document.getElementById('cvv').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'name',
		'email',
		'telephone',
		'address1',
		'address2',
		'address3',
		'city',
		'postcode',
		'cardnumber',
		'month',
		'year',
		'cvv'
	], function(result) {
		document.getElementById('name').value = result.name;
		document.getElementById('email').value = result.email;
		document.getElementById('telephone').value = result.telephone;
		document.getElementById('address1').value = result.address1;
		document.getElementById('address2').value = result.address2;
		document.getElementById('address3').value = result.address3;
		document.getElementById('city').value = result.city;
		document.getElementById('postcode').value = result.postcode;
		document.getElementById('card-number').value = result.cardnumber;
		document.getElementById('month').value = result.month,
		document.getElementById('year').value = result.year,
		document.getElementById('cvv').value = result.cvv;
	});
});
