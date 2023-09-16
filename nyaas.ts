// 將網頁元素直接視為某種型別元素
import NyaLib from "./main";

export default class NyaAs extends NyaLib {
  /**
   * 視某個 HTMLElement 為 HTMLDivElement (div)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLDivElement} 明確型別的網頁元素物件
   */
  static div(element?: HTMLElement): HTMLDivElement {
    return this.asElement(element, "div") as HTMLDivElement;
  }
  static divs(element?: HTMLElement[]): HTMLDivElement[] {
    return this.asElements(element, "div") as HTMLDivElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLSpanElement (span)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLSpanElement} 明確型別的網頁元素物件
   */
  static span(element?: HTMLElement): HTMLSpanElement {
    return this.asElement(element, "span") as HTMLSpanElement;
  }
  static spans(element?: HTMLElement[]): HTMLSpanElement[] {
    return this.asElements(element, "span") as HTMLSpanElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLParagraphElement (p)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLParagraphElement} 明確型別的網頁元素物件
   */
  static p(element?: HTMLElement): HTMLParagraphElement {
    return this.asElement(element, "p") as HTMLParagraphElement;
  }
  static ps(element?: HTMLElement[]): HTMLParagraphElement[] {
    return this.asElements(element, "p") as HTMLParagraphElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLAnchorElement (a)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLAnchorElement} 明確型別的網頁元素物件
   */
  static a(element?: HTMLElement): HTMLAnchorElement {
    return this.asElement(element, "a") as HTMLAnchorElement;
  }
  static as(element?: HTMLElement[]): HTMLAnchorElement[] {
    return this.asElements(element, "a") as HTMLAnchorElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableElement (table)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableElement} 明確型別的網頁元素物件
   */
  static table(element?: HTMLElement): HTMLTableElement {
    return this.asElement(element, "table") as HTMLTableElement;
  }
  static tables(element?: HTMLElement[]): HTMLTableElement[] {
    return this.asElements(element, "table") as HTMLTableElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableSectionElement (tbody)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableSectionElement} 明確型別的網頁元素物件
   */
  static tbody(element?: HTMLElement): HTMLTableSectionElement {
    return this.asElement(element, "tbody") as HTMLTableSectionElement;
  }
  static tbodys(element?: HTMLElement[]): HTMLTableSectionElement[] {
    return this.asElements(element, "tbody") as HTMLTableSectionElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableRowElement (tr)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableRowElement} 明確型別的網頁元素物件
   */
  static tr(element?: HTMLElement): HTMLTableRowElement {
    return this.asElement(element, "tr") as HTMLTableRowElement;
  }
  static trs(element?: HTMLElement[]): HTMLTableRowElement[] {
    return this.asElements(element, "tr") as HTMLTableRowElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableCellElement (td)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableCellElement} 明確型別的網頁元素物件
   */
  static td(element?: HTMLElement): HTMLTableCellElement {
    return this.asElement(element, "td") as HTMLTableCellElement;
  }
  static tds(element?: HTMLElement[]): HTMLTableCellElement[] {
    return this.asElements(element, "td") as HTMLTableCellElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLButtonElement (button)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLButtonElement} 明確型別的網頁元素物件
   */
  static button(element?: HTMLElement): HTMLButtonElement {
    return this.asElement(element, "button") as HTMLButtonElement;
  }
  static buttons(element?: HTMLElement[]): HTMLButtonElement[] {
    return this.asElements(element, "button") as HTMLButtonElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLButtonElement (hr)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLButtonElement} 明確型別的網頁元素物件
   */
  static hr(element?: HTMLElement): HTMLButtonElement {
    return this.asElement(element, "hr") as HTMLButtonElement;
  }
  static hrs(element?: HTMLElement[]): HTMLButtonElement[] {
    return this.asElements(element, "hr") as HTMLButtonElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLImageElement (img)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLImageElement} 明確型別的網頁元素物件
   */
  static img(element?: HTMLElement): HTMLImageElement {
    return this.asElement(element, "img") as HTMLImageElement;
  }
  static imgs(element?: HTMLElement[]): HTMLImageElement[] {
    return this.asElements(element, "img") as HTMLImageElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLInputElement (input)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLInputElement} 明確型別的網頁元素物件
   */
  static input(element?: HTMLElement): HTMLInputElement {
    return this.asElement(element, "input") as HTMLInputElement;
  }
  static inputs(element?: HTMLElement[]): HTMLInputElement[] {
    return this.asElements(element, "input") as HTMLInputElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLVideoElement (video)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLVideoElement} 明確型別的網頁元素物件
   */
  static video(element?: HTMLElement): HTMLVideoElement {
    return this.asElement(element, "video") as HTMLVideoElement;
  }
  static videos(element?: HTMLElement[]): HTMLVideoElement[] {
    return this.asElements(element, "video") as HTMLVideoElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLCanvasElement} 明確型別的網頁元素物件
   */
  static canvas(element?: HTMLElement): HTMLCanvasElement {
    return this.asElement(element, "canvas") as HTMLCanvasElement;
  }
  static canvases(element?: HTMLElement[]): HTMLCanvasElement[] {
    return this.asElements(element, "canvas") as HTMLCanvasElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (select)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLSelectElement} 明確型別的網頁元素物件
   */
  static select(element?: HTMLElement): HTMLSelectElement {
    return this.asElement(element, "select") as HTMLSelectElement;
  }
  static selects(element?: HTMLElement[]): HTMLSelectElement[] {
    return this.asElements(element, "select") as HTMLSelectElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLOptionElement} 明確型別的網頁元素物件
   */
  static option(element?: HTMLElement): HTMLOptionElement {
    return this.asElement(element, "option") as HTMLOptionElement;
  }
  static options(element?: HTMLElement[]): HTMLOptionElement[] {
    return this.asElements(element, "option") as HTMLOptionElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLOListElement (ol)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLOListElement} 明確型別的網頁元素物件
   */
  static ol(element?: HTMLElement): HTMLOListElement {
    return this.asElement(element, "ol") as HTMLOListElement;
  }
  static ols(element?: HTMLElement[]): HTMLOListElement[] {
    return this.asElements(element, "ol") as HTMLOListElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLUListElement (ul)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   */
  static ul(element?: HTMLElement): HTMLUListElement {
    return this.asElement(element, "ul") as HTMLUListElement;
  }
  static uls(element?: HTMLElement[]): HTMLUListElement[] {
    return this.asElements(element, "ul") as HTMLUListElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLLIElement (li)
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別
   * @return {HTMLLIElement} 明確型別的網頁元素物件
   */
  static li(element?: HTMLElement): HTMLLIElement {
    return this.asElement(element, "li") as HTMLLIElement;
  }
  static lis(element?: HTMLElement[]): HTMLLIElement[] {
    return this.asElements(element, "li") as HTMLLIElement[];
  }

  /**
   * 檢查預期的物件是否存在，預期的型別是否正確
   * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建預期型別的物件
   * @param {string}      tagName 預期的型別
   * @return {HTMLElement} 網頁元素物件
   */
  static asElement(element?: HTMLElement, tagName = ""): HTMLElement {
    if (!element || element.tagName.toLowerCase() != tagName) {
      element = document.createElement(tagName);
    }
    return element;
  }
  static asElements(elements?: HTMLElement[], tagName = ""): HTMLElement[] {
    if (!elements) {
      elements = [];
    }
    return elements.map((element) => this.asElement(element, tagName));
  }
}
