replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/frontend developer/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(frontend developer)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/frontend/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(frontend)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/backend/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(backend)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/HTML/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(HTML)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/CSS/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(CSS)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Javascript/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Javascript)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/programming language/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(programming language)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Web Developer/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(programming language)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    
    if (element.textContent.match(/App Developer/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(programming language)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/developer/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(programming language)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/API/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(API)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Bug/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Bug)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Cache/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Cache)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Cookie/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Cookie)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/DevOps/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(DevOps)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Domain/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Domain)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Firewall/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Firewall)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/GUI/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(GUI)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Responsive/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Responsive)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Server/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Server)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Client/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Client)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Database/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Database)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Wireframe/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Wireframe)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/UI/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(UI)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/UX/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(UX)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Deployment/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Deployment)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Documentation/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Documentation)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/HTTP/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(HTTP)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/Git/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(Git)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
    if (element.textContent.match(/GitHub/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(GitHub)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
  }
}
