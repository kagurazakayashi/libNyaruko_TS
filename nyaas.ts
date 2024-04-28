// 將網頁元素直接視為某種型別元素
import NyaLib from "./main";

export default class NyaAs extends NyaLib {
  /**
   * 視某個 HTMLElement 為 HTMLElement
   * @param {Element} element 元素物件
   * @return {HTMLElement} 網頁元素物件
   */
  static el(element: Element): HTMLElement {
    if (!element) {
      return new HTMLElement();
    }
    return element as HTMLElement;
  }
  /**
   * 視某個 NodeListOf<Element> 為 HTMLElement[]
   * @param {NodeListOf<Element>} element 元素节点列表
   * @return {HTMLElement[]} 網頁元素物件列表
   */
  static els(nodes: NodeListOf<Element>): HTMLElement[] {
    const elements: HTMLElement[] = [];
    for (const key in nodes) {
      if (Object.prototype.hasOwnProperty.call(nodes, key)) {
        const element = nodes[key];
        elements.push(this.el(element));
      }
    }
    return elements;
  }

  /**
   * 視某個 HTMLElement 為 HTMLDivElement (div)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLDivElement} 明確型別的網頁元素物件
   */
  static div(element?: HTMLElement | Element | null): HTMLDivElement {
    return this.asElement(element, "div") as HTMLDivElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLDivElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLDivElement[]} 明確型別的網頁元素物件列表
   */
  static divs(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLDivElement[] {
    return this.asElements(element, "div") as HTMLDivElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLSpanElement (span)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLSpanElement} 明確型別的網頁元素物件
   */
  static span(element?: HTMLElement | Element | null): HTMLSpanElement {
    return this.asElement(element, "span") as HTMLSpanElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLSpanElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLSpanElement[]} 明確型別的網頁元素物件列表
   */
  static spans(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLSpanElement[] {
    return this.asElements(element, "span") as HTMLSpanElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLParagraphElement (p)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLParagraphElement} 明確型別的網頁元素物件
   */
  static p(element?: HTMLElement | Element | null): HTMLParagraphElement {
    return this.asElement(element, "p") as HTMLParagraphElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLParagraphElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLParagraphElement[]} 明確型別的網頁元素物件列表
   */
  static ps(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLParagraphElement[] {
    return this.asElements(element, "p") as HTMLParagraphElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLAnchorElement (a)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLAnchorElement} 明確型別的網頁元素物件
   */
  static a(element?: HTMLElement | Element | null): HTMLAnchorElement {
    return this.asElement(element, "a") as HTMLAnchorElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLAnchorElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLAnchorElement[]} 明確型別的網頁元素物件列表
   */
  static as(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLAnchorElement[] {
    return this.asElements(element, "a") as HTMLAnchorElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableElement (table)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableElement} 明確型別的網頁元素物件
   */
  static table(element?: HTMLElement | Element | null): HTMLTableElement {
    return this.asElement(element, "table") as HTMLTableElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLTableElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLTableElement[]} 明確型別的網頁元素物件列表
   */
  static tables(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLTableElement[] {
    return this.asElements(element, "table") as HTMLTableElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableSectionElement (tbody)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableSectionElement} 明確型別的網頁元素物件
   */
  static tbody(
    element?: HTMLElement | Element | null
  ): HTMLTableSectionElement {
    return this.asElement(element, "tbody") as HTMLTableSectionElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLTableSectionElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLTableSectionElement[]} 明確型別的網頁元素物件列表
   */
  static tbodys(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLTableSectionElement[] {
    return this.asElements(element, "tbody") as HTMLTableSectionElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableRowElement (tr)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableRowElement} 明確型別的網頁元素物件
   */
  static tr(element?: HTMLElement | Element | null): HTMLTableRowElement {
    return this.asElement(element, "tr") as HTMLTableRowElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLTableRowElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLTableRowElement[]} 明確型別的網頁元素物件列表
   */
  static trs(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLTableRowElement[] {
    return this.asElements(element, "tr") as HTMLTableRowElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTableCellElement (td)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLTableCellElement} 明確型別的網頁元素物件
   */
  static td(element?: HTMLElement | Element | null): HTMLTableCellElement {
    return this.asElement(element, "td") as HTMLTableCellElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLTableCellElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLTableCellElement[]} 明確型別的網頁元素物件列表
   */
  static tds(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLTableCellElement[] {
    return this.asElements(element, "td") as HTMLTableCellElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLButtonElement (button)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLButtonElement} 明確型別的網頁元素物件
   */
  static button(element?: HTMLElement | Element | null): HTMLButtonElement {
    return this.asElement(element, "button") as HTMLButtonElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLButtonElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLButtonElement[]} 明確型別的網頁元素物件列表
   */
  static buttons(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLButtonElement[] {
    return this.asElements(element, "button") as HTMLButtonElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLHRElement (hr)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLHRElement} 明確型別的網頁元素物件
   */
  static hr(element?: HTMLElement | Element | null): HTMLHRElement {
    return this.asElement(element, "hr") as HTMLHRElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLHRElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLHRElement[]} 明確型別的網頁元素物件列表
   */
  static hrs(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLHRElement[] {
    return this.asElements(element, "hr") as HTMLHRElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLImageElement (img)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLImageElement} 明確型別的網頁元素物件
   */
  static img(element?: HTMLElement | Element | null): HTMLImageElement {
    return this.asElement(element, "img") as HTMLImageElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLImageElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLImageElement[]} 明確型別的網頁元素物件列表
   */
  static imgs(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLImageElement[] {
    return this.asElements(element, "img") as HTMLImageElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLInputElement (input)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLInputElement} 明確型別的網頁元素物件
   */
  static input(element?: HTMLElement | Element | null): HTMLInputElement {
    return this.asElement(element, "input") as HTMLInputElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLInputElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLInputElement[]} 明確型別的網頁元素物件列表
   */
  static inputs(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLInputElement[] {
    return this.asElements(element, "input") as HTMLInputElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLTextAreaElement (textarea)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @returns {HTMLTextAreaElement} 明確型別的網頁元素物件
   */
  static textarea(element?: HTMLElement | Element | null): HTMLTextAreaElement {
    return this.asElement(element, "textarea") as HTMLTextAreaElement;
  }

  /**
   * 視某個 HTMLElement 為 HTMLVideoElement (video)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLVideoElement} 明確型別的網頁元素物件
   */
  static video(element?: HTMLElement | Element | null): HTMLVideoElement {
    return this.asElement(element, "video") as HTMLVideoElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLVideoElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLVideoElement[]} 明確型別的網頁元素物件列表
   */
  static videos(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLVideoElement[] {
    return this.asElements(element, "video") as HTMLVideoElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLCanvasElement} 明確型別的網頁元素物件
   */
  static canvas(element?: HTMLElement | Element | null): HTMLCanvasElement {
    return this.asElement(element, "canvas") as HTMLCanvasElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLCanvasElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLCanvasElement[]} 明確型別的網頁元素物件列表
   */
  static canvases(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLCanvasElement[] {
    return this.asElements(element, "canvas") as HTMLCanvasElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (select)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLSelectElement} 明確型別的網頁元素物件
   */
  static select(element?: HTMLElement | Element | null): HTMLSelectElement {
    return this.asElement(element, "select") as HTMLSelectElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLSelectElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLSelectElement[]} 明確型別的網頁元素物件列表
   */
  static selects(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLSelectElement[] {
    return this.asElements(element, "select") as HTMLSelectElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLOptionElement} 明確型別的網頁元素物件
   */
  static option(element?: HTMLElement | Element | null): HTMLOptionElement {
    return this.asElement(element, "option") as HTMLOptionElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLOptionElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLOptionElement[]} 明確型別的網頁元素物件列表
   */
  static options(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLOptionElement[] {
    return this.asElements(element, "option") as HTMLOptionElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLOListElement (ol)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   * @return {HTMLOListElement} 明確型別的網頁元素物件
   */
  static ol(element?: HTMLElement | Element | null): HTMLOListElement {
    return this.asElement(element, "ol") as HTMLOListElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLOListElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLOListElement[]} 明確型別的網頁元素物件列表
   */
  static ols(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLOListElement[] {
    return this.asElements(element, "ol") as HTMLOListElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLUListElement (ul)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別的物件
   */
  static ul(element?: HTMLElement | Element | null): HTMLUListElement {
    return this.asElement(element, "ul") as HTMLUListElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLUListElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLUListElement[]} 明確型別的網頁元素物件列表
   */
  static uls(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLUListElement[] {
    return this.asElements(element, "ul") as HTMLUListElement[];
  }

  /**
   * 視某個 HTMLElement 為 HTMLLIElement (li)
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建這種型別
   * @return {HTMLLIElement} 明確型別的網頁元素物件
   */
  static li(element?: HTMLElement | Element | null): HTMLLIElement {
    return this.asElement(element, "li") as HTMLLIElement;
  }
  /**
   * 視某個 HTMLElement[] 或 Element[] 或 NodeListOf<Element> 為 HTMLLIElement[]
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>} element 網頁元素物件列表
   * @return {HTMLLIElement[]} 明確型別的網頁元素物件列表
   */
  static lis(
    element?: HTMLElement[] | Element[] | NodeListOf<Element> | null
  ): HTMLLIElement[] {
    return this.asElements(element, "li") as HTMLLIElement[];
  }

  /**
   * 檢查預期的物件是否存在，預期的型別是否正確
   * @param {HTMLElement|Element|null} element 網頁元素物件，不提供或找不到則新建預期型別的物件
   * @param {string}      tagName 預期的型別
   * @return {HTMLElement} 網頁元素物件
   */
  static asElement(
    element?: HTMLElement | Element | null,
    tagName = ""
  ): HTMLElement {
    if (!element || element.tagName.toLowerCase() != tagName) {
      element = document.createElement(tagName);
    }
    return element as HTMLElement;
  }
  /**
   * 檢查預期的物件是否存在，預期的型別是否正確
   * @param {HTMLElement[]|Element[]|NodeListOf<Element>|null} elements 網頁元素物件列表，不提供或找不到則新建預期型別的物件
   * @param {string}      tagName 預期的型別
   * @return {HTMLElement[]} 網頁元素物件列表
   */
  static asElements(
    elements?: HTMLElement[] | Element[] | NodeListOf<Element> | null,
    tagName = ""
  ): HTMLElement[] {
    const newElements: HTMLElement[] = [];
    if (!elements) {
      return newElements;
    }
    for (const key in elements) {
      if (Object.prototype.hasOwnProperty.call(elements, key)) {
        newElements[key] = this.asElement(elements[key], tagName);
      }
    }
    return newElements;
  }
}
