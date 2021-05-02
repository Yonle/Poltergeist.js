function Earthquake(el, ev) {
  if (typeof(el) == "string") {
    el = document.querySelectorAll(el);
  }
  if (el["0"]) {
    for (i in el) {
      el[i].addEventListener(ev || "click", Earthquake.init);
    }
  } else if (typeof(el) == "object") {
    if (!el["0"]) {
      el.addEventListener(ev || "click", Earthquake.init);
    } else {
      for (i in el) {
        el[i].addEventListener(ev || "click", Earthquake.init);
      }
    }
  }
}

Earthquake.rd = num => Math.floor(Math.random() * num);
Earthquake.style = {
  position: ["absolute", "relative", "fixed", "flexible"],
  align: ['center', 'left', 'right', 'bottom', 'top']
}

Earthquake.cr = function(ert) {
  let elements = document.querySelectorAll('*');

  for (el in elements) {
    let element = elements[el];
    if (!element.style) continue;
    element.style.position = Earthquake.style.position[Earthquake.rd(Earthquake.style.position.length)];
    element.style.top = Earthquake.rd(100);
    element.style["margin-top"] = Earthquake.rd(100);
    element.style.left = Earthquake.rd(100);
    element.style["margin-left"] = Earthquake.rd(100);
    element.style.right = Earthquake.rd(100);
    element.style["margin-right"] = Earthquake.rd(100);
    element.style.bottom = Earthquake.rd(100);
    element.style["margin-bottom"] = Earthquake.rd(100);
    element.style.width = `${Earthquake.rd(100)}%`;
    element.style.height = `${Earthquake.rd(100)}%`;
    element.style['text-align'] = Earthquake.style.align[Earthquake.rd(5)];
    element.style['font-size'] = Earthquake.rd(100);
    element.style['z-index'] = Earthquake.rd(1000000000);
  }
}

Earthquake.init = function init() {
  setInterval(Earthquake.cr);
}