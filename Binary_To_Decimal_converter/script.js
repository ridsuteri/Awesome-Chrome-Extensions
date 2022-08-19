const convertFromTo = (num) => {
  const input = num.toLowerCase();

  const from = document.getElementById("from");
  const fromData = from.value;

  const to = document.getElementById("to");
  const toData = to.value;

  output = document.getElementById("output");

  if (fromData === toData) {
    output.innerHTML = input.toUpperCase();
  }
  
  else if (fromData == "decimal") {
    if (toData == "binary") output.innerHTML = decimalToBinary(input);
    else if (toData == "octal") output.innerHTML = decimalToOctal(input);
    else if (toData == "hexadecimal")
      output.innerHTML = decimalToHexadecimal(input);
  }

  else if (fromData == "binary") {
    const B2D = parseInt(input, 2);
    if (toData == "octal") {
      output.innerHTML = decimalToOctal(B2D);
    } else if (toData == "decimal") {
      output.innerHTML = B2D;
    } else if (toData == "hexadecimal") {
      output.innerHTML = decimalToHexadecimal(B2D);
    }
  }

  else if (fromData == "octal") {
    const O2D = parseInt(input, 8);
    if (toData == "binary") {
      output.innerHTML = decimalToBinary(O2D);
    } else if (toData == "decimal") {
      output.innerHTML = O2D;
    } else if (toData == "hexadecimal") {
      output.innerHTML = decimalToHexadecimal(O2D);
    }
  }

  else if (fromData == "hexadecimal") {
    const H2D = parseInt(input, 16);
    if (toData == "binary") {
      output.innerHTML = decimalToBinary(H2D);
    } else if (toData == "octal") {
      output.innerHTML = decimalToOctal(H2D);
    } else if (toData == "decimal") {
      output.innerHTML = H2D;
    }
  }

  else {
    output.innerHTML = "output...";
  }
};

document.getElementById("clickme").addEventListener("click", ()=> {
  const input = document.querySelector("#input").value;
  convertFromTo(input);
})

document.getElementById("reset").addEventListener("click", ()=> {
  const input = document.querySelector('#input');
  const output = document.querySelector('#output');
  input.value = "";
  output.innerHTML = "output...";
})

const decimalToBinary = (input) => {
  if (input == 0) return 0;
  else return (input % 2) + 10 * decimalToBinary(parseInt(input / 2));
};

const decimalToOctal = (input) => {
  if (input == 0) return 0;
  else return (input % 8) + 10 * decimalToOctal(parseInt(input / 8));
};

const decimalToHexadecimal = (input) => {
  return Number(input).toString(16).toUpperCase();
}
