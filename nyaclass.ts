// 提供相容並增強的 classList 處理功能

export default class NyaClass {
  /**
   * 取得類名列表
   * @param {HTMLElement} element 網頁元素物件
   * @return {string[]} 類名列表
   */
  static list(element: HTMLElement): string[] {
    if (!element) {
      return [];
    }
    return element.className.split(" ");
  }

  /**
   * 取得類名數量
   * @param {HTMLElement} element 網頁元素物件
   * @return {number} 類名數量
   */
  static len(element: HTMLElement): number {
    if (!element) {
      return 0;
    }
    return element.className.split(" ").length;
  }

  /**
   * 新增類名
   * @param {HTMLElement} element 網頁元素物件
   * @param {string[]} className 要新增的類名列表
   * @return {boolean} 是否有變更
   */
  static addClass(element: HTMLElement, ...className: string[]): boolean {
    if (!element) {
      return false;
    }
    // element.classList.add(className);
    const classNames: string[] = element.className.split(" ");
    for (let i = 0; i < className.length; i++) {
      if (!classNames.includes(className[i])) {
        classNames.push(className[i]);
      }
    }
    const newClassNames = classNames.join(" ");
    const isOK: boolean = element.className != newClassNames;
    element.className = newClassNames;
    return isOK;
  }

  /**
   * 批次新增類名
   * @param {HTMLElement[]} elements 網頁元素物件列表
   * @param {string[]} className 要新增的類名列表
   * @return {boolean[]} 是否有變更
   * @see addClass
   */
  static addClassMulti(
    elements: HTMLElement[],
    ...className: string[]
  ): boolean[] {
    const isOK: boolean[] = [];
    for (let i = 0; i < elements.length; i++) {
      isOK.push(this.addClass(elements[i], ...className));
    }
    return isOK;
  }

  /**
   * 移除類名
   * @param {HTMLElement} element 網頁元素物件
   * @param {string[]} className 要移除的類名列表
   * @return {boolean} 是否有變更
   */
  static removeClass(element: HTMLElement, ...className: string[]): boolean {
    if (!element) {
      return false;
    }
    // element.classList.remove(className);
    const classNames: string[] = element.className.split(" ");
    const newClassNames: string[] = [];
    for (let i = 0; i < classNames.length; i++) {
      if (!className.includes(classNames[i])) {
        newClassNames.push(classNames[i]);
      }
    }
    const newClassName: string = newClassNames.join(" ");
    const isOK: boolean = element.className != newClassName;
    element.className = newClassName;
    return isOK;
  }

  /**
   * 批次移除類名
   * @param {HTMLElement[]} elements 網頁元素物件列表
   * @param {string[]} className 要移除的類名列表
   * @return {boolean[]} 是否有變更
   * @see removeClass
   */
  static removeClassMulti(
    elements: HTMLElement[],
    ...className: string[]
  ): boolean[] {
    const isOK: boolean[] = [];
    for (let i = 0; i < elements.length; i++) {
      isOK.push(this.removeClass(elements[i], ...className));
    }
    return isOK;
  }

  /**
   * 切換類名
   * @param {HTMLElement} element 網頁元素物件
   * @param {string} className 要切換的類名
   * @return {boolean} True=進行了新增，False=進行了刪除或未找到
   */
  static toggleClass(element: HTMLElement, className: string): boolean {
    if (!element) {
      return false;
    }
    // element.classList.toggle(className);
    if (element.className.includes(className)) {
      this.removeClass(element, className);
      return false;
    } else {
      this.addClass(element, className);
      return true;
    }
  }

  /**
   * 批次切換類名
   * @param {HTMLElement[]} elements 網頁元素物件列表
   * @param {string} className 要切換的類名
   * @return {boolean[]} True=進行了新增，False=進行了刪除或未找到
   * @see toggleClass
   */
  static toggleClassMulti(
    elements: HTMLElement[],
    className: string
  ): boolean[] {
    const isOK: boolean[] = [];
    for (let i = 0; i < elements.length; i++) {
      isOK.push(this.toggleClass(elements[i], className));
    }
    return isOK;
  }

  /**
   * 檢查多個類名是否存在
   * @param {HTMLElement} element 網頁元素物件
   * @param {string} className 要檢查的類名
   * @return {boolean} 是否存在
   */
  static hasClasss(element: HTMLElement, ...className: string[]): boolean[] {
    // return element.classList.contains(className);
    const classNames: string[] = element.className.split(" ");
    const isOK: boolean[] = [];
    for (let i = 0; i < className.length; i++) {
      isOK.push(classNames.includes(className[i]));
    }
    return isOK;
  }

  /**
   * 檢查類名是否存在
   * @param {HTMLElement} element 網頁元素物件
   * @param {string} className 要檢查的類名
   * @return {boolean} 是否存在
   */
  static hasClass(element: HTMLElement, className: string): boolean {
    return this.hasClasss(element, className)[0];
  }

  /**
   * 批次檢查多個類名是否存在
   * @param {HTMLElement[]} elements 網頁元素物件列表
   * @param {string} className 要檢查的類名
   * @return {boolean[]} 是否存在
   * @see hasClass
   */
  static hasClasssMulti(
    elements: HTMLElement[],
    ...className: string[]
  ): boolean[][] {
    const isOK: boolean[][] = [];
    for (let i = 0; i < elements.length; i++) {
      isOK.push(this.hasClasss(elements[i], ...className));
    }
    return isOK;
  }

  /**
   * 取代類名
   * @param {HTMLElement} element 網頁元素物件
   * @param {string} oldClassName 要取代的類名
   * @param {string} newClassName 新的類名
   * @return {boolean} 是否有變更
   */
  static replaceClass(
    element: HTMLElement,
    oldClassName: string,
    newClassName: string
  ): boolean {
    if (!element) {
      return false;
    }
    // element.classList.replace(oldClassName, newClassName);
    const classNames: string[] = element.className.split(" ");
    for (let i = 0; i < classNames.length; i++) {
      if (classNames[i] == oldClassName) {
        classNames[i] = newClassName;
      }
    }
    const newClassNames: string = classNames.join(" ");
    element.className = newClassNames;
    return element.className != newClassNames;
  }

  /**
   * 批次取代類名
   * @param {HTMLElement[]} elements 網頁元素物件列表
   * @param {string} oldClassName 要取代的類名
   * @param {string} newClassName 新的類名
   * @return {boolean[]} 是否有變更
   * @see replaceClass
   */
  static replaceClassMulti(
    elements: HTMLElement[],
    oldClassName: string,
    newClassName: string
  ): boolean[] {
    const isOK: boolean[] = [];
    for (let i = 0; i < elements.length; i++) {
      isOK.push(this.replaceClass(elements[i], oldClassName, newClassName));
    }
    return isOK;
  }
}
