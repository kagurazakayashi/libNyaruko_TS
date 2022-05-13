// 將網頁元素直接視為某種型別元素
import NyaLib from "./main";

export default class NyaAs extends NyaLib {

    /**
     * 視某個 HTMLElement 為 HTMLDivElement (div)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLDivElement} 明確型別的網頁元素物件
     */
    static div(element: HTMLElement): HTMLDivElement {
        return this.asElement(element,'div') as HTMLDivElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLSpanElement (span)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLSpanElement} 明確型別的網頁元素物件
     */
    static span(element: HTMLElement): HTMLSpanElement {
        return this.asElement(element,'span') as HTMLSpanElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLParagraphElement (p)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLParagraphElement} 明確型別的網頁元素物件
     */
    static p(element: HTMLElement): HTMLParagraphElement {
        return this.asElement(element,'p') as HTMLParagraphElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLTableElement (table)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLTableElement} 明確型別的網頁元素物件
     */
    static table(element: HTMLElement): HTMLTableElement {
        return this.asElement(element,'table') as HTMLTableElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLTableSectionElement (tbody)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLTableSectionElement} 明確型別的網頁元素物件
     */
    static tbody(element: HTMLElement): HTMLTableSectionElement {
        return this.asElement(element,'tbody') as HTMLTableSectionElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLTableRowElement (tr)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLTableRowElement} 明確型別的網頁元素物件
     */
    static tr(element: HTMLElement): HTMLTableRowElement {
        return this.asElement(element,'tr') as HTMLTableRowElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLTableCellElement (td)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLTableCellElement} 明確型別的網頁元素物件
     */
    static td(element: HTMLElement): HTMLTableCellElement {
        return this.asElement(element,'td') as HTMLTableCellElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLButtonElement (button)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLButtonElement} 明確型別的網頁元素物件
     */
    static button(element: HTMLElement): HTMLButtonElement {
        return this.asElement(element,'button') as HTMLButtonElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLButtonElement (hr)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLButtonElement} 明確型別的網頁元素物件
     */
    static hr(element: HTMLElement): HTMLButtonElement {
        return this.asElement(element,'hr') as HTMLButtonElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLImageElement (img)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLImageElement} 明確型別的網頁元素物件
     */
    static img(element: HTMLElement): HTMLImageElement {
        return this.asElement(element,'img') as HTMLImageElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLInputElement (input)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLInputElement} 明確型別的網頁元素物件
     */
    static input(element: HTMLElement): HTMLInputElement {
        return this.asElement(element,'input') as HTMLInputElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
     * @param {HTMLElement} element 網頁元素物件
     * @return {HTMLCanvasElement} 明確型別的網頁元素物件
     */
    static canvas(element: HTMLElement): HTMLCanvasElement {
        return this.asElement(element,'canvas') as HTMLCanvasElement;
    /**
     * 視某個 HTMLElement 為 HTMLCanvasElement (select)
     * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
     * @return {HTMLSelectElement} 明確型別的網頁元素物件
     */
    static select(element?: HTMLElement): HTMLSelectElement {
        return this.asElement(element, 'select') as HTMLSelectElement;
    }

    /**
     * 視某個 HTMLElement 為 HTMLCanvasElement (canvas)
     * @param {HTMLElement} element 網頁元素物件，不提供或找不到則新建這種型別的物件
     * @return {HTMLOptionElement} 明確型別的網頁元素物件
     */
    static option(element?: HTMLElement): HTMLOptionElement {
        return this.asElement(element, 'option') as HTMLOptionElement;
    }

    /**
     * 檢查預期的物件是否存在，預期的型別是否正確
     * @param {HTMLElement} element 網頁元素物件
     * @param {string}      tagName 預期的型別
     * @return {HTMLElement} 網頁元素物件
     */
    static asElement(element: HTMLElement,tagName :string): HTMLElement {
        if (!element || element.tagName.toLowerCase() != tagName) {
            this.log(element, this.nyaLibName, -2);
            element = document.createElement('tagName')
        }
        return element
    }
}