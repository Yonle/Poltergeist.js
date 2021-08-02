function Poltergeist(el, ev) {
  if (typeof(el) == "string") {
    el = document.querySelectorAll(el);
  }
  if (el["0"]) {
    for (i in el) {
      el[i].addEventListener(ev || "click", Poltergeist.init);
    }
  } else if (typeof(el) == "object") {
    if (!el["0"]) {
      el.addEventListener(ev || "click", Poltergeist.init);
    } else {
      for (i in el) {
        el[i].addEventListener(ev || "click", Poltergeist.init);
      }
    }
  }
}

Poltergeist.rd = num => Math.floor(Math.random() * num);
Poltergeist.style = {
  position: ["absolute", "relative", "fixed", "flexible"],
  align: ['center', 'left', 'right', 'bottom', 'top']
}

Poltergeist.cr = function(ert) {
  let elements = document.querySelectorAll('*');

  for (el in elements) {
    let element = elements[el];
    if (!element.style) continue;
    element.style.position = Poltergeist.style.position[Poltergeist.rd(Poltergeist.style.position.length)];
    element.style.top = Poltergeist.rd(100);
    element.style["margin-top"] = Poltergeist.rd(100);
    element.style.left = Poltergeist.rd(100);
    element.style["margin-left"] = Poltergeist.rd(100);
    element.style.right = Poltergeist.rd(100);
    element.style["margin-right"] = Poltergeist.rd(100);
    element.style.bottom = Poltergeist.rd(100);
    element.style["margin-bottom"] = Poltergeist.rd(100);
    element.style.width = `${Poltergeist.rd(100)}%`;
    element.style.height = `${Poltergeist.rd(100)}%`;
    element.style['text-align'] = Poltergeist.style.align[Poltergeist.rd(5)];
    element.style['font-size'] = Poltergeist.rd(100);
    element.style['z-index'] = Poltergeist.rd(1000000000);
  }
}

Poltergeist.init = function init() {
  setInterval(Poltergeist.cr);
}
