function pointer () {
  document.body.addEventListener('mouseover', function (event) {
    var pointer = getStyle(event.target, 'cursor')
    if (pointer == 'pointer') {
      event.target.classList.add('fingerCursor')
    }
  })
}

function getStyle (element, property) {
  return (getComputedStyle(element, null).getPropertyValue(property))
}

pointer()
