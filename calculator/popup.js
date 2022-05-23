document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("7b").addEventListener("click", () => des(7));
document.getElementById("8b").addEventListener("click", () => des(8));
document.getElementById("9b").addEventListener("click", () => des(9));
document.getElementById("4b").addEventListener("click", () => des(4));
document.getElementById("5b").addEventListener("click", () => des(5));
document.getElementById("6b").addEventListener("click", () => des(6));
document.getElementById("1b").addEventListener("click", () => des(1));
document.getElementById("2b").addEventListener("click", () => des(2));
document.getElementById("3b").addEventListener("click", () => des(3));
document.getElementById("0b").addEventListener("click", () => des(0));
document.getElementById("+b").addEventListener("click", () => des("+"));
document.getElementById("/b").addEventListener("click", () => des("/"));
document.getElementById("-b").addEventListener("click", () => des("-"));
document.getElementById("dot").addEventListener("click", () => des("."));
document.getElementById("perc").addEventListener("click", () => des("%"));
document.getElementById("*b").addEventListener("click", () => des("*"));

document.getElementById("C").addEventListener("click", () => del("C"));

function calculate() {
  var input = document.getElementById("textField").value;
  const value = eval(input);
  document.getElementById("textField").value = value;
}

function des(val) {
  document.getElementById("textField").value += val;
}

function del(val) {
  document.getElementById("textField").value = " ";
}
