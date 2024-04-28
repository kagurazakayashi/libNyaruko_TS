export default class NyaRandomImage {
  static generateRandomImg(
    img: HTMLImageElement,
    width = 0,
    height = 0,
    density = 100,
    radiusX = 100,
    sizeW = 100,
    sizeH = 100
  ) {
    img.src = this.generateRandomPattern(
      width > 0 ? width : img.clientWidth,
      height > 0 ? height : img.clientHeight,
      density,
      radiusX,
      sizeW,
      sizeH
    );
  }
  static generateRandomPattern(
    width: number,
    height: number,
    density = 100,
    radiusX = 100,
    sizeW = 100,
    sizeH = 100
  ): string {
    if (width == 0) {
      width = 500;
    }
    if (height == 0) {
      height = 500;
    }
    // 動態建立畫布
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) {
      return "";
    }

    // 生成隨機背景顏色
    const backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    // 新增隨機形狀
    for (let i = 0; i < density; i++) {
      const shapeType = Math.random() < 0.5 ? "circle" : "rect";
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      context.fillStyle = color;

      if (shapeType === "circle") {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * radiusX;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
      } else {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const w = Math.random() * sizeW;
        const h = Math.random() * sizeH;
        context.fillRect(x, y, w, h);
      }
    }

    // 將 Canvas 轉為影象 URL
    const dataURL = canvas.toDataURL("image/png");
    canvas.remove();
    return dataURL;
    // document.getElementById("randomImage").src = dataURL;
  }
}
