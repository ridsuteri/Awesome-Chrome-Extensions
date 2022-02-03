let qrcode = document.querySelector("img");
let text = document.querySelector("textarea");
let btn = document.querySelector("button");

btn.addEventListener("click",generateQR);

function generateQR(){
    let data = text.value;
    let baseURL = 'https://api.qrserver.com/v1/create-qr-code/';
    let url = `${baseURL}?data=${data}`;
    qrcode.src = url;
}
