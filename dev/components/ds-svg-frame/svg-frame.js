const defaultConfig = {
  dots: ["1,1", "100%,1", "100%,100%", "1,100%"],
  wrapper: ".ds-svg-frame__wrapper"
};

const svgFrame = config => {
  let dots = defaultConfig.dots;
  let wrapper = defaultConfig.wrapper;
  const WrElement = document.querySelector(wrapper) || "";
  const canvas = document.getElementById("dsSvgFrameCanvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  if (config) {
    dots = config.dots || defaultConfig.dots;
    wrapper = config.wrapper || defaultConfig.wrapper;
  }

  if (WrElement) {
    const resizeObserver = new ResizeObserver(entry => {
      const w = WrElement.clientWidth || 0;
      const h = WrElement.clientHeight || 0;
      canvas.width = w;
      canvas.height = h;
      ctx.beginPath();

      dots.map((coord, i) => {
        let x = coord.split(",")[0];
        let y = coord.split(",")[1];
        if (x === "w" || x === "100%") x = w - 1;
        if (y === "h" || y === "100%") y = h - 2;
        if (x[x.length - 1] === "%") x = (w * parseInt(x)) / 100;
        if (y[y.length - 1] === "%") y = (h * parseInt(y)) / 100;
        if (y[2] + y[3] === "%+") {
          const t = y.split("%+");
          y = (h * parseInt(t[0])) / 100 + parseInt(t[1]);
        }
        if (x[0] === "-") x = w + Number(x) || w;
        if (y[0] === "-") y = h + Number(y) || h;
        x = Math.floor(x);

        if (i === 0) ctx.moveTo(parseInt(x), parseInt(y));
        else ctx.lineTo(parseInt(x), parseInt(y));
        console.log(x);
        console.log(y);

        // return [x, y].join(",");
      });

      ctx.closePath();
      ctx.stroke();

      // console.log(frame);
      // const svg = `<svg class="frame" viewBox="0 0 ${w} ${h}"><polygon points="${frame}" fill="inherit" stroke-width="inherit" stroke="inherit"/></svg>`;
      // WrElement.innerHTML = svg;
    });
    resizeObserver.observe(WrElement);
  }
};

export default svgFrame;
