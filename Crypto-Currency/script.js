const getData = () => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.coincap.io/v2/assets?limit=10", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tableContent = data.data
          .map((currentData) => {
            let priceUsd = parseFloat(currentData.priceUsd).toFixed(2);
            return `<tr>
                    <td>${currentData.rank}</td>
                    <td>${currentData.symbol}</td>
                    <td>${currentData.name}</td>
                    <td>${priceUsd}$</td>
                    <td><a target="_blank" href="${currentData.explorer}">More Info</a></td>
                  </tr>`;
          })
          .join("");
        console.log(tableContent);
        document
          .querySelector("tbody")
          .insertAdjacentHTML("beforeend", tableContent);
      })
      .catch((error) => console.log("error", error));
  } catch (error) {
    document.getElementById(
      "container"
    ).innerHTML = `<p>Error Fetching Data: ${error.message} </p>`;
  }
};
getData();
