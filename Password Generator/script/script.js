const genBtn = document.getElementById("generatebtn");
const copyBtn = document.getElementById("copyBtn");
const textField = document.getElementById("textField");

copyBtn.addEventListener("click", copyPassword);
genBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789+_=!@#$%^&*";
  const passLength = 16;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let index = Math.random() * characters.length;
    password += characters.charAt(index);
  }
  textField.value = password;
}

function copyPassword() {
  if (textField.value != "") {
    navigator.clipboard.writeText(textField.value);
    genBtn.textContent = "Copied";
    setTimeout(() => {
      genBtn.textContent = "Generate";
    },00);
  }
  else {
    window.alert("Click the generate button");
  }
}
