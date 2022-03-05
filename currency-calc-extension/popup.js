let name1 = "USD";
let name2 = "INR";
let data = {};

selectCurrency.addEventListener("click", () => {
  if (homepage.classList.contains("hide")) {
    dropdown1.classList.add("hide");
    dropdown2.classList.add("hide");
    homepage.classList.remove("hide");
    selectCurrencyPage.classList.add("hide");

    selectCurrency.textContent = `Pick Currency`;
  } else {
    homepage.classList.add("hide");
    selectCurrencyPage.classList.remove("hide");

    selectCurrency.textContent = `Go to Homepage`;
  }
});

selectCurrency1.addEventListener("click", (e) => {
  dropdown1.classList.toggle("hide");
});
selectCurrency2.addEventListener("click", (e) => {
  dropdown2.classList.toggle("hide");
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(
      "https://v6.exchangerate-api.com/v6/a9a368ea702b343f2df561e5/latest/USD"
    );
    data = await res.json();

    const countryCurrencyCodes = Object.keys(data["conversion_rates"]);
    await new Promise((resolve, reject) => {
      countryCurrencyCodes.forEach((code) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.appendChild(document.createTextNode(code));

        dropdown1.appendChild(div);
        const div2 = document.createElement("div");
        div2.classList.add("item");
        div2.appendChild(document.createTextNode(code));
        dropdown2.appendChild(div2);
      });
      resolve();
    });
    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.parentElement.id === "dropdown1") {
          selectCurrency1.textContent = item.textContent;
          currName1.textContent = item.textContent;
          name1 = item.textContent;
        } else {
          selectCurrency2.textContent = item.textContent;
          currName2.textContent = item.textContent;
          name2 = item.textContent;
        }
        calc()
      });
    });
  } catch (err) {
    console.log(err);
  }
});


const calc = () => {
    let val1 = currVal1.value;

    let val1USD;
    let val2USD;
    console.log(name1, name2);
    Object.entries(data['conversion_rates']).forEach(([key, value]) => {
        if(key === name2) {
            val2USD = value;
        }
        if(key === name1) {
            val1USD = value;
        }
    })
    currVal2.value = parseFloat(val2USD/val1USD * val1);
}

exchangeIcon.addEventListener("click", (e) => {
    let name = name1;
    name1 = name2;
    name2 = name;
    selectCurrency1.textContent = name1;
    selectCurrency2.textContent = name2;
    currName1.textContent = name1;
    currName2.textContent = name2;
    calc()
  });
convert.addEventListener('click', e => {
   calc()
})
reset.addEventListener('click', () => {
    currVal1.value = '0';
    calc()
})