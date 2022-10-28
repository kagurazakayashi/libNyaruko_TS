// 顯示/隱藏元素
import NyaLib from "./main";

export default class NyaVisible extends NyaLib {
  /**
   * 立即顯示
   * @param {HTMLElement} obj 要操作的 DOM 物件
   */
  static show(obj: HTMLElement): void {
    const displayName = "y-display";
    const nowDisplay: string = obj.style.display;
    if (nowDisplay.length > 0 && nowDisplay != "none") {
      return;
    }
    const newStyle = obj.hasAttribute(displayName)
      ? (obj.getAttribute(displayName) as string)
      : "block";
    obj.removeAttribute(displayName);
    if (nowDisplay != newStyle) {
      obj.style.display = newStyle;
    }
  }

  /**
   * 立即隱藏
   * @param {HTMLElement} obj 要操作的 DOM 物件
   */
  static hide(obj: HTMLElement): void {
    const displayName = "y-display";
    const nowDisplay: string = obj.style.display;
    const none = "none";
    if (nowDisplay.length > 0 && nowDisplay != none) {
      obj.setAttribute(displayName, nowDisplay);
    }
    const newStyle: string = none;
    if (nowDisplay != newStyle) {
      obj.style.display = newStyle;
    }
  }

  /**
   * 如果已顯示則隱藏，如果已隱藏則顯示
   * @param {HTMLElement} obj 要操作的 DOM 物件
   * @return {boolean} 現在應該是顯示還是隱藏的
   */
  static autoShowHide(obj: HTMLElement): boolean {
    const nowDisplay: string = obj.style.display;
    const isShow: boolean = nowDisplay.length > 0 && nowDisplay != "none";
    if (isShow) {
      this.hide(obj);
    } else {
      this.show(obj);
    }
    return !isShow;
  }
}
