const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");
const company_name = document.getElementById("company_name");
const domain = document.getElementById("domain");
const year = document.getElementById("year");
const industry = document.getElementById("industry");
const employee = document.getElementById("employee");
const locality = document.getElementById("locality");
const country = document.getElementById("country");
const connection = document.getElementById("connection");
const linkedin = document.getElementById("linkedin");
const results = document.getElementById("results");

inputText.onchange = function () {
  console.log(inputText.value);
  let company = inputText.value.toLowerCase();
  upload.innerHTML = "Company Name Entered Successfully!";

  prediction.innerHTML = "Company Details Loading ...";

  //Loading location
  fetch(
    `https://companyenrichment.abstractapi.com/v1/?api_key=d764be3e7a4a4ecf87f9f701ad89eff3&domain=${company}.com`
  )
    .then((data) => data.json())
    .then((companyData) => {
      console.log(companyData);
      prediction.innerHTML = "";
      results.style.display = "block";

      company_name.innerHTML = "Name : " + companyData.name;
      domain.innerHTML = "Domain : " + companyData.domain;
      year.innerHTML = "Founded in : " + companyData.year_founded;
      industry.innerHTML = "Industry : " + companyData.industry;
      employee.innerHTML =
        "Number of Employees : " + companyData.employees_count;
      locality.innerHTML = "Locality : " + companyData.locality;
      country.innerHTML = "Country : " + companyData.country;
      linkedin.innerHTML = "LinkedIn: " + companyData.linkedin_url;
      linkedin.href = companyData.linkedin_url;
    });
};
