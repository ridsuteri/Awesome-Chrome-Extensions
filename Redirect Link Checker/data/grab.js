'use strict';
({
  links: [...document.querySelectorAll('a')].filter(a => a.href).map(a => {
    const b = a.getBoundingClientRect();
    return {
      link: a.href,
      inspect: Boolean(b.width && b.height)
    };
  }),
  origin: location.href
})
