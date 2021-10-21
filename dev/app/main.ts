import "~/common/scss/main.scss";

const frame: any = document.querySelector(".ds-frame__svg");
const svg: any = document.querySelector(".ds-frame__svg svg");
const shadowSvg: any = document.createElement("svg");
shadowSvg.setAttribute("viewBox", "0 0 450 370");

frame.innerHTML = "";

frame.append(shadowSvg);

console.log(svg);
