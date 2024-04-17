// 網頁元素的各種獲取、處理、查詢、檢查
import NyaLib from "./main";
import NyaCalc from "./nyacalc";
import { NyaDirection } from "./nyatypes";

export default class NyaDom extends NyaLib {
  static div = "div";
  /**
   * 獲取 HTML DOM 物件
   * @param {string} element 物件描述（NyaDom.div,'.divclass','#divid','[value]'）
   * @param {HTMLElement} parentDOM 要從哪個元素中獲取（若獲取目標是 ID 則無效）
   * @param {boolean} classOnlyFirst 如果是類，只獲取第一項
   * @return {HTMLElement|HTMLElement[]|null} HTML 物件/物件組/空
   */
  static dom(
    element: string,
    parentDOM = document.body,
    classOnlyFirst = false
  ): HTMLElement | HTMLElement[] | null {
    if (element.length == 0) {
      return null;
    }
    const mode: string = element.substring(0, 1);
    if (mode == ".") {
      element = element.substring(1);
      if (element.length == 0) {
        return null;
      }
      const elements: HTMLCollectionOf<Element> =
        parentDOM.getElementsByClassName(element);
      if (elements.length == 0) {
        return null;
      }
      const elementsArr = Array.prototype.slice.call(elements);
      if (classOnlyFirst) {
        return elementsArr[0];
      }
      return elementsArr; // Array
    } else if (mode == "#") {
      element = element.substring(1);
      if (element.length == 0) {
        return null;
      }
      return document.getElementById(element);
    } else if (mode == "[") {
      element = element.substring(1, element.length - 2);
      if (element.length == 0) {
        return null;
      }
      const elements: HTMLElement[] = this.getHasAttribute(element, parentDOM);
      if (elements.length == 0) {
        return null;
      }
      return elements; // HTMLElement[]
    } else if ((mode >= "a" && mode <= "z") || (mode >= "A" && mode <= "Z")) {
      const elements: HTMLCollectionOf<Element> =
        document.getElementsByTagName(element);
      if (elements.length == 0) {
        return null;
      }
      const elementsArr = Array.prototype.slice.call(elements);
      if (classOnlyFirst) {
        return elementsArr[0];
      }
      return elementsArr; // Array
    }
    return null;
  }

  /**
   * 獲取多層的 HTML DOM 物件
   * @param {string} element 物件描述（'.infoBox .info .title #text'））
   * @param {boolean} classOnlyFirst 如果是類，只獲取第一項
   * @return {HTMLElement|HTMLElement[]|null} HTML 物件/物件組/空
   */
  static doms(element: string): HTMLElement | HTMLElement[] | null {
    let elements: HTMLElement[] = [];
    const elementStrs: string[] = element.split(" ");
    const htmleleFunc = (htmlele: HTMLElement | HTMLElement[] | null) => {
      if (htmlele == null) {
        // continue;
      } else if ((htmlele as HTMLElement[]).length != undefined) {
        elements = htmlele as HTMLElement[];
      } else {
        elements = [htmlele as HTMLElement];
      }
    };
    elementStrs.forEach((elstr) => {
      if (elements.length == 0) {
        const htmlele: HTMLElement | HTMLElement[] | null = this.dom(elstr);
        htmleleFunc(htmlele);
      }
      elements.forEach((ele) => {
        const htmlele: HTMLElement | HTMLElement[] | null = this.dom(
          elstr,
          ele
        );
        htmleleFunc(htmlele);
      });
    });
    if (elements == null || elements.length == 0) {
      return null;
    } else if (elements.length == 1) {
      return elements[0];
    } else {
      return elements;
    }
  }

  /**
   * 根據 ID 獲取網頁物件（默認物件已存在）
   * @param {string} elementID 網頁元素的 ID
   * @param {Document|HTMLElement} parentElement 從哪個 DOM 搜尋
   * @return {HTMLElement} 網頁元素物件
   */
  static id(
    elementID: string,
    parentElement: Document | HTMLElement = document
  ): HTMLElement {
    const element: HTMLElement | null = NyaDom.idn(elementID, parentElement);
    if (element == null) {
      console.error(elementID);
      return new HTMLElement();
    }
    return element;
  }

  /**
   * 根據 ID 獲取網頁物件
   * @param {string} elementID 網頁元素的 ID
   * @param {Document|HTMLElement} parentElement 從哪個 DOM 搜尋
   * @return {HTMLElement} 網頁元素物件
   */
  static idn(
    elementID: string,
    parentElement: Document | HTMLElement = document
  ): HTMLElement | null {
    if (parentElement == document) {
      const element: HTMLElement | null = document.getElementById(elementID);
      if (element) {
        return element;
      }
      return null;
    }
    if (parentElement && parentElement.hasChildNodes()) {
      const children: NodeListOf<ChildNode> = parentElement.childNodes;
      for (let i = 0; i < children.length; i++) {
        const child: ChildNode = children[i];
        if (
          child.nodeType === Node.ELEMENT_NODE &&
          (child as HTMLElement).id === elementID
        ) {
          return child as HTMLElement;
        }
        const found: HTMLElement | null = NyaDom.idn(
          elementID,
          child as HTMLElement
        );
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  /**
   * 根據 Class 獲取網頁物件
   * @param {string} elementClass 網頁元素的 Class
   * @param {Document|HTMLElement} parentElement 從哪個 DOM 搜尋
   * @return {HTMLElement[]} 網頁元素物件列表
   */
  static class(
    elementClass: string,
    parentElement: Document | HTMLElement = document
  ): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const gets: HTMLCollectionOf<Element> =
      parentElement.getElementsByClassName(elementClass);
    for (const key in gets) {
      if (Object.prototype.hasOwnProperty.call(gets, key)) {
        const element = gets[key];
        elements.push(element as HTMLElement);
      }
    }
    return elements;
  }

  /**
   * 根據 Tag 獲取網頁物件
   * @param {string} elementTag 網頁元素的 Tag
   * @param {Document|HTMLElement} parentElement 從哪個 DOM 搜尋
   * @return {HTMLElement[]} 網頁元素物件列表
   */
  static tags(
    elementTag: string,
    parentElement: HTMLElement | Document = document
  ): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const gets: HTMLCollectionOf<Element> =
      parentElement.getElementsByTagName(elementTag);
    for (const key in gets) {
      if (Object.prototype.hasOwnProperty.call(gets, key)) {
        const element = gets[key];
        elements.push(element as HTMLElement);
      }
    }
    return elements;
  }

  /**
   * 根據 Name 獲取網頁物件
   * @param {string} elementName 網頁物件的 name
   * @param {Document|HTMLElement} parentElement 從哪個 DOM 搜尋
   * @return {HTMLElement[]} 網頁元素物件列表
   */
  static names(
    elementName: string,
    parentElement: Document | HTMLElement = document
  ): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const gets: NodeListOf<HTMLElement> =
      document.getElementsByName(elementName);
    for (const key in gets) {
      if (Object.prototype.hasOwnProperty.call(gets, key)) {
        if (parentElement == document || parentElement.contains(gets[key])) {
          elements.push(gets[key]);
        }
      }
    }
    return elements;
  }

  /**
   * 取出指定 DOM 元素中的所有包含指定屬性的元素
   * @param {boolean} attributeName 需要包含的屬性
   * @param {HTMLElement} parentDOM 要檢查的元素
   * @return {HTMLElement[]} 包含該屬性的元素列表
   */
  static getHasAttribute(
    attributeName: string,
    parentDOM = document.body
  ): HTMLElement[] {
    const childrens: HTMLElement[] = this.getChildrens(
      parentDOM,
      false
    ) as HTMLElement[];
    const childOK: HTMLElement[] = [];
    for (const children of childrens) {
      if (children.hasAttribute(attributeName)) {
        childOK.push(children);
      }
    }
    return childOK;
  }

  /**
   * 取出指定 DOM 元素中的所有子元素
   * @param {HTMLElement} parentDOM 要檢查的元素
   * @param {boolean} structure 子元素陣列是否需要具有層次結構
   * @return {HTMLElement[]} 子元素陣列（不帶有層次結構，一維）
   * {HTMLElement[][]} 子元素多維陣列（帶有層次結構，不定維度）
   */
  static getChildrens(
    parentDOM = document.body,
    structure = false
  ): HTMLElement[] | HTMLElement[][] {
    const clilds: HTMLElement[] = [];
    const getChildrenFunc = (
      parent: HTMLElement,
      struct: boolean
    ): HTMLElement[][] => {
      const childDoms: HTMLElement[] | HTMLElement[][] | HTMLElement[][][] = [];
      if (struct) {
        (childDoms as HTMLElement[]).push(parent);
      } else {
        clilds.push(parent);
      }
      if (parent.children.length > 0) {
        const children: HTMLCollection = parent.children;
        const childrenLen: number = children.length;
        for (let i = 0; i < childrenLen; i++) {
          const childrenElement: HTMLElement = children[i] as HTMLElement;
          const nowChildrens: HTMLElement[][] = getChildrenFunc(
            childrenElement,
            struct
          );
          if (struct) (childDoms as HTMLElement[][][]).push(nowChildrens);
        }
      }
      return childDoms as HTMLElement[][];
    };
    if (structure) {
      return getChildrenFunc(parentDOM, structure);
    } else {
      getChildrenFunc(parentDOM, structure);
      return clilds;
    }
  }

  /**
   * 遍歷 DOM 物件
   * @param {string} selector 要操作的 DOM 物件描述
   * @param {static} callback 處理遍歷物件的函式
   */
  static each(
    selector: string,
    callback: (el: unknown, i: number) => void
  ): void {
    const elements: NodeListOf<Element> = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, callback);
  }

  /**
   * 將 HTML 字串轉換為 DOM
   * @param {string} dom DOM 字串
   * @return {NodeListOf<ChildNode>} DOM
   */
  static stringToDOM(dom: string): NodeListOf<ChildNode> {
    const saveElement: HTMLElement = document.createElement(NyaDom.div);
    saveElement.innerHTML = dom;
    return saveElement.childNodes;
  }

  /**
   * 將 DOM 轉換為 HTML 字串
   * @param {NodeListOf<ChildNode>} node DOM
   * @return {string} HTML 字串
   */
  static domToString(node: globalThis.Node): string {
    const saveElement: HTMLElement = document.createElement(NyaDom.div);
    saveElement.appendChild(node);
    return saveElement.innerHTML;
  }

  /**
   * 從物件中查詢屬性並返回，並確定每個屬性是否存在，否則提供預設值
   * @param {unknown} obj 要從哪個元素查詢
   * @param {string} property 屬性路徑 'obj1.obj2.obj3'
   * @param {unknown} defaultVal 沒有找到時返回的預設值
   * @param {boolean} showWarn 是否在瀏覽器控制檯顯示找不到物件的資訊
   * @return {boolean} isok 是否有擁有此屬性
   * @return {string} path 物件路徑
   * @return {string} type 物件型別
   * @return {unknown} obj 找到的屬性物件或預設值
   */
  static getProperty(
    obj: unknown,
    property: string,
    defaultVal: unknown = null,
    showWarn = false
  ): {
    isok: boolean;
    path: string;
    type: string;
    obj: unknown;
  } {
    const propertys: string[] = property.split(".");
    let path = "obj";
    let type = "undefined";
    for (const prop of propertys) {
      path = path + "." + prop;
      type = typeof eval(path);
      if (type == "undefined") {
        if (showWarn) {
          this.log(path, this.nyaLibName, -1);
        }
        return {
          isok: false,
          path: path,
          type: type,
          obj: defaultVal,
        };
      }
    }
    const isOK = type != "undefined";
    const rObj = eval(path);
    return {
      isok: isOK,
      path: path,
      type: type,
      obj: rObj,
    };
  }

  /**
   * 從物件中查詢屬性並返回，並確定每個屬性是否存在，否則提供預設值（只返回精簡資訊）
   * @param {unknown} obj 要從哪個元素查詢
   * @param {string} property 屬性路徑 obj1.obj2.obj3
   * @param {unknown} defaultVal 沒有找到時返回的預設值
   * @param {boolean} showWarn 是否在瀏覽器控制檯顯示找不到物件的資訊
   * @return {any} 找到的屬性物件或預設值
   */
  static getProp(
    obj: unknown,
    property: string,
    defaultVal: unknown = null,
    showWarn = true
  ): unknown {
    const prop: { isok: boolean; path: string; type: string; obj: unknown } =
      this.getProperty(obj, property, defaultVal, showWarn);
    return prop.obj;
  }

  /**
   * 新增/修改/刪除 <meta> 資訊
   * @param {string} name meta 標籤的 name
   * @param {string} content meta 標籤的 content 值，留空為刪除
   * @return {number} 處理結果： 0刪除 1新增 2修改
   */
  static metaSet(name: string, content?: string): number {
    const isDelete: boolean = content == null || content.length == 0;
    const head: HTMLHeadElement = document.head;
    const metaStr = "meta";
    const metas: HTMLCollectionOf<Element> = head.getElementsByTagName(metaStr);
    for (const key in metas) {
      if (Object.prototype.hasOwnProperty.call(metas, key)) {
        const meta: HTMLMetaElement = metas[key] as HTMLMetaElement;
        if (meta.getAttribute("name") === name) {
          if (isDelete) {
            meta.remove();
            return 0;
          } else {
            meta.content = content ?? "";
            return 2;
          }
        }
      }
    }
    const meta: HTMLMetaElement = document.createElement(
      metaStr
    ) as HTMLMetaElement;
    meta.name = name;
    meta.content = content ?? "";
    head.appendChild(meta);
    return 1;
  }

  /**
   * 獲取 <meta> 資訊
   * @param {string} name meta 標籤的 name
   * @return {string} meta 標籤的 content 值
   */
  static metaGet(name: string): string {
    const metas: HTMLCollectionOf<HTMLMetaElement> =
      document.getElementsByTagName("meta");
    for (const key in metas) {
      if (Object.prototype.hasOwnProperty.call(metas, key)) {
        const meta: HTMLMetaElement = metas[key] as HTMLMetaElement;
        if (meta.getAttribute("name") === name) {
          return meta.getAttribute("content") ?? "";
        }
      }
    }
    return "";
  }

  /**
   * 物件的長度
   * @param {object} obj 要檢查的物件 [] 或 {}
   * @return {number} 物件的長度
   */
  static count(obj: object): number {
    const objKeys: Array<any> = Object.keys(obj);
    return objKeys.length;
  }

  /**
   * 從物件陣列中移除所有長度為 0 的物件 {}
   * @param {object[]} obj 要檢查的物件陣列
   * @return {object[]} 清理後的物件陣列
   */
  static clearEmpty(obj: object[]): object[] {
    const newObj: object[] = [];
    for (const nowObj of obj) {
      if (nowObj && this.count(nowObj) > 0) {
        newObj.push(nowObj);
      }
    }
    return newObj;
  }

  /**
   * 從 DOM 物件陣列中刪除所有樣式為隱藏的 DOM 物件
   * @param {HTMLElement[]} elements DOM 物件陣列
   * @return {HTMLElement[]} 清理後的 DOM 物件陣列
   */
  static removeHiddenElement(elements: HTMLElement[]): HTMLElement[] {
    const nowElements: HTMLElement[] = [];
    for (const element of elements) {
      if (element.style.display != "none") {
        nowElements.push(element);
      }
    }
    return nowElements;
  }

  /**
   * 新增子 DOM 物件
   * @param {HTMLElement} fatherDOM 父級 DOM
   * @param {HTMLElement} thisDOM 當前要新增的 DOM
   * @param {boolean} isBefore 在 DOM 的前端新增
   */
  static addChildNode(
    fatherDOM: HTMLElement,
    thisDOM: HTMLElement,
    isBefore = false
  ) {
    if (isBefore && fatherDOM.childNodes.length > 0) {
      fatherDOM.insertBefore(thisDOM, fatherDOM.childNodes[0]);
    } else {
      fatherDOM.appendChild(thisDOM);
    }
  }

  /**
   * 獲取物件距離頂部的距離
   * @param {HTMLElement} element 物件
   * @return {number} 距離(px)
   */
  static getTop(element: HTMLElement): number {
    let offset: number = element.offsetTop;
    if (element.offsetParent != null) {
      offset += NyaDom.getTop(element.offsetParent as HTMLElement);
    }
    return offset;
  }

  /**
   * 獲取物件距離左側的距離
   * @param {HTMLElement} element 物件
   * @return {number} 距離(px)
   */
  static getLeft(element: HTMLElement) {
    let offset: number = element.offsetLeft;
    if (element.offsetParent != null) {
      offset += NyaDom.getLeft(element.offsetParent as HTMLElement);
    }
    return offset;
  }

  /**
   * 獲取捲軸距離頂部的距離
   * @param {HTMLElement} element 物件
   * @return {number} 距離(px)
   */
  static getScrollTop(
    element = document.documentElement ?? document.body
  ): number {
    let scrollTop = 0;
    if (element.scrollTop) {
      scrollTop = element.scrollTop;
    } else if (element.parentElement) {
      scrollTop = NyaDom.getScrollTop(element.parentElement);
    }
    return scrollTop;
  }

  /**
   * 獲取捲軸距離左側的距離
   * @param {HTMLElement} element 物件
   * @return {number} 距離(px)
   */
  static getScrollLeft(
    element = document.documentElement ?? document.body
  ): number {
    let scrollLeft = 0;
    if (element.scrollLeft) {
      scrollLeft = element.scrollLeft;
    } else if (element.parentElement) {
      scrollLeft = NyaDom.getScrollLeft(element.parentElement);
    }
    return scrollLeft;
  }

  /**
   * 獲取當前可視範圍的高度
   * @return {number} 高度(px)
   */
  static getClientHeight(): number {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    } else {
      clientHeight = Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    }
    return clientHeight;
  }

  /**
   * 獲取當前可視範圍的寬度
   * @return {number} 寬度(px)
   */
  static getClientWidth(): number {
    let clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
      clientWidth = Math.min(
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    } else {
      clientWidth = Math.max(
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }
    return clientWidth;
  }

  /**
   * 計算物件相對於網頁當前滾動進入的分比
   * 可以使用 NyaCalc.scrollElementSize 計算物件基於容器的尺寸
   * @param {HTMLElement} element 物件
   * @param {NyaDirection} containerBaseline 基線相對於網頁的哪個邊（上下左右，默认下方）
   * top   : 0 為元素頂部在視窗頂部(視窗內上面), 1 為元素底部在視窗頂部(視窗外上面)
   * bottom: 0 為元素頂部在視窗底部(視窗外下面), 1 為元素底部在視窗底部(視窗內下面)
   * left  : 0 為元素左側在視窗左側(視窗內左側), 1 為元素右側在視窗左側(視窗外左側)
   * right : 0 為元素左側在視窗右側(視窗外右側), 1 為元素右側在視窗右側(視窗內右側)
   * @return {number} 比例(float 0 - 1)
   */
  static scrollElementPageSize(
    element: HTMLElement = document.body,
    containerBaseline = NyaDirection.bottom
  ): number {
    const isHeight =
      containerBaseline == NyaDirection.top ||
      containerBaseline == NyaDirection.bottom;
    const scrollSize = isHeight
      ? NyaDom.getScrollTop()
      : NyaDom.getScrollLeft();
    const clientSize = isHeight
      ? NyaDom.getClientHeight()
      : NyaDom.getClientWidth();
    const elementStart = isHeight
      ? NyaDom.getTop(element)
      : NyaDom.getLeft(element);
    const elementSize = isHeight ? element.clientHeight : element.clientWidth;
    const scroll: {
      start: number;
      end: number;
      object: number;
      objectEnd: number;
      scroll: number;
    } = NyaCalc.scrollElementSize(
      containerBaseline,
      scrollSize,
      elementStart,
      elementSize,
      clientSize
    );
    return scroll.scroll;
  }
}
