document.getElementById('id_button_getAll').onclick = () => {
  chrome.cookies.getAll(getDetails('getAll'), ((cookies) => {
    let text ='Number of cookies=' + cookies.length + '\n';
    for (let cookie of cookies){
      text += 'domain=' + cookie.domain + ',path=' + cookie.path + ',name=' + cookie.name + ',value=' + cookie.value + '\n';
    }
    document.getElementById('id_text').value = text;
  }));
}

document.getElementById('id_button_set').onclick = () => {
  chrome.cookies.set(getDetails('set'));
}

document.getElementById('id_button_remove').onclick = () => {
  chrome.cookies.remove(getDetails('remove'));
}

function getDetails(kind){
  let domain =document.getElementById('id_domain').value;
  let path = document.getElementById('id_path').value;
  let name = document.getElementById('id_name').value;
  let value = document.getElementById('id_value').value;
  let details = {};

  switch(kind){
  case 'getAll':
    if (domain != ''){
      details['domain'] = domain;
    }
    if (name != ''){
      details['name'] = name;
    }
    break;
  case 'set':
    details['url'] = 'https://' + domain + path;
    details['name'] = name;
    details['value'] = value;
    break;
  case 'remove':
    details['url'] = 'https://' + domain + path;
    details['name'] = name;
    break;
  }
  return details;
}