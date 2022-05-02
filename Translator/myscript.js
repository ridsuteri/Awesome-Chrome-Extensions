document.getElementById('id_button_trans').onclick = () => {
  let from_lang = document.getElementById('id_from_lang').value;
  let from_text = document.getElementById('id_from_text').value;
  let to_lang = document.getElementById('id_to_lang').value;
  let url = 'https://script.google.com/macros/s/AKfycbyIgrFqfMZcbCdcunVATUFq6yLC2yFXIRifkkRl7PzC6V38HEjG/exec';
  url += '?text=' + from_text + '&source=' + from_lang + '&target=' + to_lang;
  fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('Response was not ok.');
  })
  .then(data => {
    document.getElementById('id_to_text').value = data;
  })
 .catch(error => {
    document.getElementById('id_to_text').value = error;
  })
}