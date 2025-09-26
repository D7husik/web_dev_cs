const colors = ["red","orange","yellow","green","blue","purple"];

function randomColor(current){
  let c;
  do { c = colors[Math.floor(Math.random()*colors.length)]; }
  while(c === current);
  return c;
}

const elements = [
  document.getElementById("circle"),
  document.getElementById("rect"),
  document.getElementById("ellipse")
];

elements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.dataset.old = el.getAttribute("fill");
    el.setAttribute("fill", randomColor(el.dataset.old));
  });

  el.addEventListener("mouseleave", () => {
    if (el.dataset.old) el.setAttribute("fill", el.dataset.old);
  });

  el.addEventListener("click", () => {
    el.setAttribute("fill", randomColor(el.getAttribute("fill")));
  });
});
