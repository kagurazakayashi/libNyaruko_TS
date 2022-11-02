// Cookie 管理
import NyaTime from "./nyatime";

export default class NyaCookie {
  /**
   * 列出所有 Cookie
   * @return {string[][]} Cookie 鍵值列表
   */
  static list(): string[][] {
    const cookieList: string[][] = [];
    const cookieArr = document.cookie.split(";");
    for (const element of cookieArr) {
      const cookie = element.split("=");
      cookieList.push(cookie);
    }
    return cookieList;
  }

  /**
   * 取得 Cookie
   * @param {string} name 名稱
   * @param {string|null} defValue 預設值
   * @return {string} 值
   */
  static get(name: string, defaultValue: string | null = null): string | null {
    const cookieArr = document.cookie.split(";");
    for (const element of cookieArr) {
      const cookie = element.trim();
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return defaultValue;
  }

  /**
   * 設定 Cookie
   * @param {string} name 名稱
   * @param {string} value 值
   * @param {number|null} expire 過期時間
   * 支援 `s,m,h,d,w,M,y` 單位，其他單位皆視為秒
   * @param {string|null} path 路徑
   * @param {string|null} domain 網域
   * @param {boolean|null} secure 只允許 HTTPS 傳輸
   * @return {string} 設定的 Cookie 字串
   */
  static set(
    name: string,
    value = "",
    expire: string | number | null = null,
    path: string | null = null,
    domain: string | null = null,
    secure: boolean | null = null
  ): string {
    const newCookieArr: string[] = [`${name}=${value}`];
    if (expire) {
      const second = NyaTime.unitTime2time(expire, "s", true, false);
      const expireTime = new Date(second).toUTCString();
      newCookieArr.push("expires=" + expireTime);
    }
    if (path) {
      newCookieArr.push("path=" + path);
    }
    if (domain) {
      newCookieArr.push("domain=" + domain);
    }
    if (secure) {
      newCookieArr.push("secure=true");
    }
    const newCookie: string = newCookieArr.join(";");
    document.cookie = newCookie;
    return newCookie;
  }

  /**
   * 刪除指定的 Cookie
   * @param {string} name 名稱
   */
  static del(name: string) {
    document.cookie = name + "=; expires=" + new Date().toUTCString();
  }

  /**
   * 刪除所有 Cookie
   */
  static clear() {
    const cookieList: string[][] = this.list();
    for (const cookie of cookieList) {
      this.del(cookie[0]);
    }
  }
}
