const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    //grab content from feet input
    let feet = document.querySelector('#feet');
    const results = document.querySelector('#results');
    e.preventDefault();

    feet = parseFloat(feet.value);

    results.textContent = "Please enter a valid number!";
    let totalInches = (feet * 30.48);
    results.textContent = `${totalInches} cm`;
    document.querySelector('#feet').value = '';
})