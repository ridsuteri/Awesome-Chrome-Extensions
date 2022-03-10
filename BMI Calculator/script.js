//BMI = KG / (H/100 * H/100) 

let weightguide = document.getElementById('weightguide');
let factText = document.querySelectorAll('.factText');

document.getElementById("submit").addEventListener("click", bmiCalculator);
let input1=document.getElementById('cm');
let input2=document.getElementById('kg');


function bmiCalculator() {
	if(!isNotEmpty() || !isString()){
       showAlert();
	}

	else{
		
		weightguide.style.display = 'block';
	    var cm = parseInt(document.getElementById("cm").value);
	   var kg = parseFloat(document.getElementById("kg").value);
    
	var bmi;
	var newCm = parseFloat(cm / 100);

	bmi = kg / (newCm * newCm)
	bmi = bmi.toFixed(1);
	console.log(bmi);

	document.getElementById("result").innerHTML = "Your BMI is = " + bmi;
	document.getElementById("result").style.color = "white";

	
	}
	input1.value= " ";
	input2.value = " ";
	
}

function isString(){
	if((!isNaN(input1.value) && (!isNaN(input2.value)))){
		return true;
	}
	else{
		return false;
	}
}
function isNotEmpty() {
	if(input1.value && input2.value){
		return true;
	}
	else{
		return false;
	}
}


function showAlert(){
	const div = document.createElement('div');
	div.className = "validate";
	div.appendChild(document.createTextNode('Please Enter valid input'))
	const container = document.getElementById('container')
	const form = document.querySelector('.input-el')
	container.insertBefore(div, form);

	setTimeout(() => document.querySelector('.validate').remove(), 3000);
}

