// 生成球形的旋轉詞雲

/* 基於網路上的開源 js 程式碼改寫
<style>
#wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  user-select: none;
}
.wrapword {
  display: inline-block;
  position: absolute;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #888;
  pointer-events: none;
}
</style>
*/

class Nya3DBallTagCloudItem {
  offsetWidth = 0;
  offsetHeight = 0;
  x = 0;
  y = 0;
  cx = 0;
  cy = 0;
  cz = 0;
  xz = 0;
  scale = 0;
  alpha = 0;
  constructor(offsetWidth: number, offsetHeight: number) {
    this.offsetWidth = offsetWidth;
    this.offsetHeight = offsetHeight;
  }
}

export default class Nya3DBallTagCloud {
  fps = 0; // 重新整理率（渲染次數/秒，影響效能）
  tspeed = 0; // 旋轉速度（每次刷新移動多少）
  radius = 0; // 球體大小（半徑）
  distr = false; // 均勻鋪滿球體
  active = false; // 保持動畫
  mouseX = 0; // 初始模擬滑鼠位置x（要 active=true ）
  mouseY = 0; // 初始模擬滑鼠位置u（要 active=true ）
  mouseE = false; // 是否響應滑鼠移過
  sort = true; // 是否隨機重新排序
  lightNum = 0; // 高亮顯示前端最大的幾個詞的數量(-1為所有)
  lightColor = ""; // 高亮顯示前端最大的幾個詞的顏色

  dtr = Math.PI / 180;
  d = 500;
  mcList: Nya3DBallTagCloudItem[] = [];
  lasta = 0;
  lastb = 0;
  size = 250;
  howElliptical = 1;
  ca = 0;
  cb = 0;
  cc = 0;
  sa = 0;
  sb = 0;
  sc = 0;
  aA: HTMLCollectionOf<HTMLSpanElement>;
  oDiv: HTMLElement;
  isPause = false;
  enableDisplay = "";

  /**
   * 根据词典生成词块（在 new 之前，需要先生成词块）
   * @param {HTMLElement} container 容器
   * @param {string} elementClassName 词条对象的类名称
   * @param {string[]} dictionary 词典
   * @param {number} repeat 词典重复次数
   */
  static createWords(container:HTMLElement, elementClassName:string, dictionary:string[], repeat:number) {
    for (let x = 0; x < repeat; x++) {
      for (let i = 0; i < dictionary.length; i++) {
        const word: HTMLSpanElement = document.createElement("span");
        word.className = elementClassName;
        word.id = elementClassName + i.toString();
        word.innerHTML = dictionary[i];
        container.appendChild(word);
      }
    }
  }

  /**
   * 生成球形的旋轉詞雲
   * @param {HTMLElement} element 詞雲容器
   * @param {number} size 球體大小（直徑）
   * @param {number} speed 旋轉速度（每次刷新移動多少）
   * @param {number} fps 重新整理率（渲染次數/秒，影響效能）
   * @param {string} light 高亮顯示前端最大的幾個詞的數量(-1為所有)和顏色，例如 3#FFFFFF
   * @param {boolean} mouseMove 是否響應滑鼠移過
   * @param {boolean} keep 是否保持動畫
   * @param {number[]} toX 初始模擬滑鼠位置xy（要 keep=true ）
   * @param {boolean} sort 是否隨機重新排序
   * @param {boolean} tile 是否均勻鋪滿球體
   * @return {Nya3DBallTagCloud} 旋轉詞雲實例
   */
  constructor(
    element: HTMLElement,
    size = 400,
    speed = 10,
    fps = 15,
    light = "",
    mouseMove = false,
    keep = true,
    mouseTo = [-5, -5],
    sort = true,
    tile = true
  ) {
    this.radius = size / 2;
    this.tspeed = speed;
    this.fps = fps;
    this.mouseE = mouseMove;
    this.active = keep;
    this.mouseX = mouseTo[0];
    this.mouseY = mouseTo[1];
    this.sort = sort;
    this.distr = tile;
    this.oDiv = element;
    this.enableDisplay = element.style.display;
    const lightSplit = light.split("#");
    if (lightSplit.length == 2) {
      this.lightNum = parseInt(lightSplit[0]);
      this.lightColor = "#" + lightSplit[1];
    }
    let i = 0;
    this.aA = this.oDiv.getElementsByTagName("span");
    for (i = 0; i < this.aA.length; i++) {
      const oTag: Nya3DBallTagCloudItem = new Nya3DBallTagCloudItem(
        this.aA[i].offsetWidth,
        this.aA[i].offsetHeight
      );
      this.mcList.push(oTag);
    }
    this.sineCosine(0, 0, 0);
    this.positionAll();
    if (this.mouseE) {
      this.oDiv.onmouseover = () => {
        this.active = true;
      };
      this.oDiv.onmouseout = () => {
        this.active = false;
      };
      this.oDiv.onmousemove = (ev) => {
        this.mouseX =
          ev.clientX - (this.oDiv.offsetLeft + this.oDiv.offsetWidth / 2);
        this.mouseY =
          ev.clientY - (this.oDiv.offsetTop + this.oDiv.offsetHeight / 2);
        this.mouseX /= 5;
        this.mouseY /= 5;
      };
    }
    setInterval(() => {
      if (!this.isPause) {
        this.update();
      }
    }, (1 / this.fps) * 1000);
  }

  /**
   * 暫停或繼續
   * @param pause 是否暫停
   * @param hidden 暫停時是否隱藏
   */
  pause(pause: boolean, hidden = true) {
    if (this.isPause != pause) {
      this.isPause = pause;
      if (hidden) {
        this.oDiv.style.display = pause ? "none" : this.enableDisplay;
      }
    }
  }

  /**
   * 每幀的更新內容
   */
  update() {
    let a;
    let b;
    if (this.active) {
      a =
        (-Math.min(Math.max(-this.mouseY, -this.size), this.size) /
          this.radius) *
        this.tspeed;
      b =
        (Math.min(Math.max(-this.mouseX, -this.size), this.size) /
          this.radius) *
        this.tspeed;
    } else {
      a = this.lasta * 0.98;
      b = this.lastb * 0.98;
    }
    this.lasta = a;
    this.lastb = b;
    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
      return;
    }
    const c = 0;
    this.sineCosine(a, b, c);
    for (let j = 0; j < this.mcList.length; j++) {
      const rx1 = this.mcList[j].cx;
      const ry1 = this.mcList[j].cy * this.ca + this.mcList[j].cz * -this.sa;
      const rz1 = this.mcList[j].cy * this.sa + this.mcList[j].cz * this.ca;
      const rx2 = rx1 * this.cb + rz1 * this.sb;
      const ry2 = ry1;
      const rz2 = rx1 * -this.sb + rz1 * this.cb;
      const rx3 = rx2 * this.cc + ry2 * -this.sc;
      const ry3 = rx2 * this.sc + ry2 * this.cc;
      const rz3 = rz2;
      this.mcList[j].cx = rx3;
      this.mcList[j].cy = ry3;
      this.mcList[j].cz = rz3;
      const per = this.d / (this.d + rz3);
      this.mcList[j].x =
        this.howElliptical * rx3 * per - this.howElliptical * 2;
      this.mcList[j].y = ry3 * per;
      this.mcList[j].scale = per;
      this.mcList[j].alpha = per;
      this.mcList[j].alpha = (this.mcList[j].alpha - 0.6) * (10 / 6);
    }
    this.doPosition();
    if (this.sort) {
      this.depthSort();
    }
    if (this.lightNum != 0 && this.lightColor.length > 0) {
      this.lightNow();
    }
  }

  /**
   * 深度排序
   */
  depthSort() {
    let i = 0;
    const aTmp: HTMLSpanElement[] = [];
    for (i = 0; i < this.aA.length; i++) {
      aTmp.push(this.aA[i]);
    }
    aTmp.sort(function (vItem1, vItem2) {
      const cz1: number = parseInt(vItem1.style.zIndex);
      const cz2: number = parseInt(vItem2.style.zIndex);
      if (cz1 > cz2) {
        return -1;
      } else if (cz1 < cz2) {
        return 1;
      } else {
        return 0;
      }
    });
    for (i = 0; i < aTmp.length; i++) {
      aTmp[i].style.zIndex = i.toString();
    }
  }

  /**
   * 高亮顯示前端最大的幾個詞
   */
  lightNow() {
    let maxSize = 0;
    let maxSpans: HTMLSpanElement[] = [];
    for (let i = 0; i < this.aA.length; i++) {
      const now: HTMLSpanElement = this.aA[i];
      const fontSize = parseInt(now.style.fontSize);
      if (fontSize > maxSize) {
        maxSize = fontSize;
        maxSpans = [];
      } else if (fontSize === maxSize) {
        maxSpans.push(now);
      }
      if (now.style.color !== "") {
        now.style.color = "";
      }
    }
    let ii = maxSpans.length;
    if (this.lightNum >= 0 && this.lightNum < ii) {
      ii = this.lightNum;
      // const oldArr: HTMLSpanElement[] = maxSpans.slice();
      // for (let j = 0; j < ii; j++) {
      //   const random = Math.floor(Math.random() * oldArr.length);
      //   oldArr[random].style.color = this.lightColor;
      //   oldArr.splice(random, 1);
      // }
      // } else {
    }
    for (let i = 0; i < ii; i++) {
      maxSpans[i].style.color = this.lightColor;
    }
  }

  /**
   * 設定所有詞的位置
   */
  positionAll() {
    let phi = 0;
    let theta = 0;
    const max = this.mcList.length;
    let i = 0;
    const aTmp = [];
    const oFragment = document.createDocumentFragment();
    for (i = 0; i < this.aA.length; i++) {
      aTmp.push(this.aA[i]);
    }
    aTmp.sort(function () {
      return Math.random() < 0.5 ? 1 : -1;
    });
    for (i = 0; i < aTmp.length; i++) {
      oFragment.appendChild(aTmp[i]);
    }
    this.oDiv.appendChild(oFragment);
    for (let i = 1; i < max + 1; i++) {
      if (this.distr) {
        phi = Math.acos(-1 + (2 * i - 1) / max);
        theta = Math.sqrt(max * Math.PI) * phi;
      } else {
        phi = Math.random() * Math.PI;
        theta = Math.random() * (2 * Math.PI);
      }
      this.mcList[i - 1].cx = this.radius * Math.cos(theta) * Math.sin(phi);
      this.mcList[i - 1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
      this.mcList[i - 1].cz = this.radius * Math.cos(phi);
      this.aA[i - 1].style.left =
        this.mcList[i - 1].cx +
        this.oDiv.offsetWidth / 2 -
        this.mcList[i - 1].offsetWidth / 2 +
        "px";
      this.aA[i - 1].style.top =
        this.mcList[i - 1].cy +
        this.oDiv.offsetHeight / 2 -
        this.mcList[i - 1].offsetHeight / 2 +
        "px";
    }
  }

  /**
   * 設定旋轉角度
   */
  doPosition() {
    const l = this.oDiv.offsetWidth / 2;
    const t = this.oDiv.offsetHeight / 2;
    for (let i = 0; i < this.mcList.length; i++) {
      this.aA[i].style.left =
        this.mcList[i].cx + l - this.mcList[i].offsetWidth / 2 + "px";
      this.aA[i].style.top =
        this.mcList[i].cy + t - this.mcList[i].offsetHeight / 2 + "px";
      this.aA[i].style.fontSize =
        Math.ceil((12 * this.mcList[i].scale) / 2) + 8 + "px";
      this.aA[i].style.filter =
        "alpha(opacity=" + 100 * this.mcList[i].alpha + ")";
      this.aA[i].style.opacity = this.mcList[i].alpha.toString();
    }
  }

  /**
   * 設定旋轉角度
   * @param {number} a 旋轉角度
   * @param {number} b 旋轉角度
   * @param {number} c 旋轉角度
   */
  sineCosine(a: number, b: number, c: number) {
    this.sa = Math.sin(a * this.dtr);
    this.ca = Math.cos(a * this.dtr);
    this.sb = Math.sin(b * this.dtr);
    this.cb = Math.cos(b * this.dtr);
    this.sc = Math.sin(c * this.dtr);
    this.cc = Math.cos(c * this.dtr);
  }
}
