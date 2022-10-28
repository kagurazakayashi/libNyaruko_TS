// 事件监听器对象
export class NyaEventListener {
  domObj: HTMLElement | null = null;
  type: string | null = null;
  listener: ((event: Event) => void) | null = null;
}

export default class NyaEvent {
  static nyaEventStr = "nyaevent";

  /**
   * 新增事件監聽
   * @param {HTMLElement} domObj 要被監聽的物件
   * @param {string|null} type 要監聽的事件，空字串為 'click'
   * @param {function} listener 要執行的函式
   * @param {boolean} only 每種型別事件只新增一次（防止重複監聽，如果已有相同監聽則取消本次新增）
   * @param {boolean|AddEventListenerOptions} options 可選事件監聽引數
   * @return {NyaEventListener|null} 如果新增監聽成功，返回事件監聽器物件；如果不成功（如重複新增），則返回空。
   */
  static addEventListener(
    domObj: HTMLElement,
    listener: (event: Event) => void,
    type = "click",
    only = true,
    options?: boolean | AddEventListenerOptions
  ): NyaEventListener | null {
    const nowEventStr: string | null = domObj.getAttribute(this.nyaEventStr);
    let nowEvents: string[] = [];
    if (nowEventStr != null) {
      nowEvents = nowEventStr.split(",");
      if (only) {
        for (const eventStr of nowEvents) {
          if (eventStr == type) {
            // 已經新增過這種型別的監聽
            return null;
          }
        }
      }
    }
    const event: NyaEventListener = new NyaEventListener();
    event.domObj = domObj;
    event.type = type;
    event.listener = listener;
    domObj.addEventListener(event.type, event.listener, options);
    nowEvents.push(event.type);
    domObj.setAttribute(this.nyaEventStr, nowEvents.join(","));
    return event;
  }

  /**
   * 查詢事件監聽名稱列表
   * 引數 eventListener 和 eventElement 根據需要傳 **其中之一**
   * @param {NyaEventListener} eventListener 事件監聽器物件
   * @param {HTMLElement} eventElement 網頁物件
   * @return {string[]} 事件監聽名稱列表陣列
   */
  static listEventListenerTypes(
    eventListener?: NyaEventListener | null,
    eventElement?: HTMLElement | null
  ): string[] {
    if (!eventElement) {
      if (!eventListener || !eventListener.domObj) {
        return [];
      }
      eventElement = eventListener.domObj;
    }
    const nowEventStr: string | null = eventElement.getAttribute(
      this.nyaEventStr
    );
    if (nowEventStr == null) {
      return [];
    }
    const nowEvents: string[] = nowEventStr.split(",");
    return nowEvents;
  }

  /**
   * 移除事件監聽器
   * @param {NyaEventListener} eventListener 事件監聽器物件
   * @param {boolean|AddEventListenerOptions} options 可選事件監聽引數
   * @return {boolean} 是否執行了事件監聽器移除
   */
  static removeEventListener(
    eventListener: NyaEventListener,
    options?: boolean | AddEventListenerOptions
  ): boolean {
    if (
      eventListener.type != null &&
      eventListener.listener != null &&
      eventListener.domObj != null
    ) {
      eventListener.domObj.removeEventListener(
        eventListener.type,
        eventListener.listener,
        options
      );
      const nowEventStr: string | null = eventListener.domObj.getAttribute(
        this.nyaEventStr
      );
      let nowEvents: string[] = [];
      if (nowEventStr) {
        nowEvents = nowEventStr.split(",");
        for (let i = 0; i < nowEvents.length; i++) {
          const eventStr = nowEvents[i];
          if (eventStr == eventListener.type) {
            nowEvents.splice(i, 1);
            break;
          }
        }
      }
      eventListener.domObj.setAttribute(this.nyaEventStr, nowEvents.join(","));
      return true;
    } else {
      return false;
    }
  }

  /**
   * 批次移除事件監聽器
   * @param {NyaEventListener[]} eventListeners 事件監聽器物件陣列
   * @param {boolean|AddEventListenerOptions} options 可選事件監聽引數
   * @return {boolean[]} 是否執行了事件監聽器移除陣列
   */
  static removeEventListeners(
    eventListeners: NyaEventListener[],
    options?: boolean | AddEventListenerOptions
  ): boolean[] {
    const isOK: boolean[] = [];
    for (const eventListener of eventListeners) {
      isOK.push(this.removeEventListener(eventListener, options));
    }
    return isOK;
  }
}
