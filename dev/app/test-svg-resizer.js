// const frame = document.querySelector(".ds-frame__svg");
// const svg = document.querySelector(".ds-frame__svg svg");
// const path = document.querySelector(".ds-frame__svg svg path");
// const d = path.getAttribute("d");

// const preparingForSplit = d => {
//   let newD;
//   let length = d.length;
//   for (let i = 0; i < length; i++) {
//     if (d[i] === "M") newD += "|M";
//     else if (d[i] === "V") newD += "|V";
//     else if (d[i] === "L") newD += "|L";
//     else if (d[i] === "H") newD += "|H";
//     else newD += d[i];
//   }
//   return newD;
// };

// console.log(preparingForSplit(d));

// const virtualD = d => {
//   const arr = [];
//   let length = d.length;
//   for (let i = 0; i < length; i++) {
//     if (d[i] === "M") console.log("M");
//     if (d[i] === "V") console.log("V");
//     if (d[i] === "L") console.log("L");
//     if (d[i] === "H") console.log("H");
//   }
//   console.log(length);
//   return d;
// };

// const shadowSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// shadowSvg.setAttribute("viewBox", "0 0 450 370");
// shadowSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// const shadowPath = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "path"
// );
// shadowPath.setAttribute("d", `${virtualD(d)}`);
// shadowPath.setAttribute("fill", "inherit");
// shadowPath.setAttribute("stroke", "inherit");
// shadowPath.setAttribute("stroke-width", "inherit");

// // RENEW SVG
// frame.innerHTML = "";
// shadowSvg.append(shadowPath);
// frame.append(shadowSvg);

// console.log(svg);

// const divElem = document.querySelector(".ds-frame__svg");

// const resizeObserver = new ResizeObserver(entry => {
//   console.log("Size changed");
//   const w = entry[0].target.clientWidth;
//   const h = entry[0].target.clientHeight;
//   console.log(w);
//   console.log(h);
//   // RENEW SVG
//   shadowSvg.setAttribute("viewBox", `0 0 ${w} ${h}`);
//   shadowSvg.append(shadowPath);
//   frame.append(shadowSvg);
// });

// resizeObserver.observe(divElem);
