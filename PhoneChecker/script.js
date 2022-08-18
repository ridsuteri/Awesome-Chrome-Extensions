const inputText = document.getElementById("input");

const prediction = document.getElementById("prediction");
const phone_valid = document.getElementById("phone_valid");
const phone_country = document.getElementById("phone_country");
const carrier = document.getElementById("carrier");
const phone_type = document.getElementById("phone_type");
const international_number = document.getElementById("international_number");
const local_number = document.getElementById("local_number");
const e164 = document.getElementById("e164");
const phone_region = document.getElementById("phone_region");
const phone_country_prefix = document.getElementById("phone_country_prefix");

inputText.onchange = function () {
  console.log(inputText.value);
  let phone = inputText.value;

  prediction.innerHTML = "Fetching phone details ...";

  fetch(
    `https://api.veriphone.io/v2/verify?phone=%2B${phone}&key=FCD85F132C1A4F3BA3FD76DA11BA059F`
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.error) {
        prediction.innerHTML = response.message;
      } else {
        prediction.innerHTML = "Phone Details displayed below";
        phone_valid.innerHTML = response.phone_valid;
        phone_country.innerHTML = response.country;
        carrier.innerHTML = response.carrier;
        phone_type.innerHTML = response.phone_type;
        international_number.innerHTML = response.international_number;
        local_number.innerHTML = response.local_number;
        e164.innerHTML = response.e164;
        phone_region.innerHTML = response.phone_region;
        phone_country_prefix.innerHTML = response.country_prefix;
      }
    })
    .catch((err) => console.error(err));
};
