const frame = document.querySelector(".ds-frame__svg");
const svg = document.querySelector(".ds-frame__svg svg");
const shadowSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

shadowSvg.setAttribute("viewBox", "0 0 450 370");
shadowSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
const shadowPath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
shadowPath.setAttribute(
  "d",
  "M438.244 279.345L438 279.627V280V359.133L428.572 369H16.4283L1 352.816V18.1283L16.4448 1H436.549L449 15.0856V266.934L438.244 279.345Z"
);
shadowPath.setAttribute("fill", "inherit");
shadowPath.setAttribute("stroke", "inherit");
shadowPath.setAttribute("stroke-width", "inherit");

frame.innerHTML = "";

shadowSvg.append(shadowPath);
frame.append(shadowSvg);

console.log(svg);
