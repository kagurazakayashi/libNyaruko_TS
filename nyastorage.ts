// 本地儲存控制器
import NyaLib from "./main";

export default class NyaStorage extends NyaLib {
  /**
   * 刪除一個儲存項
   * @param {string} key
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static remove(key: string, storage = 3): number {
    return NyaStorage.setItem(key, null, storage);
  }

  /**
   * 儲存一個字串
   * @param {string} key 名稱
   * @param {string|null} value 字串（提供 null 則刪除該儲存項）
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setString(key: string, value: string | null, storage = 3): number {
    return NyaStorage.setItem(key, value, storage);
  }
  /**
   * 讀取一個字串
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {string} 字串
   */
  static getString(key: string, storage = 3): string {
    return NyaStorage.getItem(key, storage) ?? "";
  }

  /**
   * 儲存一個數字
   * @param {string} key 名稱
   * @param {number} value 數字
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setNumber(key: string, value: number, storage = 3): number {
    return NyaStorage.setItem(key, value.toString(), storage);
  }
  /**
   * 讀取一個整數
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number|null} 整數
   */
  static getInt(key: string, storage = 3): number | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return parseInt(sval);
  }
  /**
   * 讀取一個浮點數
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 浮點數
   */
  static getFloat(key: string, storage = 3): number | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return parseFloat(sval);
  }

  /**
   * 儲存一個布林值
   * @param {string} key 名稱
   * @param {boolean} value 布林值
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setBoolean(key: string, value: boolean, storage = 3): number {
    if (value) {
      return NyaStorage.setItem(key, "1", storage);
    } else {
      return NyaStorage.setItem(key, "0", storage);
    }
  }
  /**
   * 讀取一個布林值
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {boolean} 布林值
   */
  static getBoolean(key: string, storage = 3): boolean | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (sval == "0") {
      return false;
    } else if (sval == "1") {
      return true;
    } else {
      return null;
    }
  }

  /**
   * 儲存陣列/字典
   * @param {string} key 名稱
   * @param {any} value 陣列/字典
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setArray(key: string, value: any, storage = 3): number {
    return NyaStorage.setItem(key, JSON.stringify(value), storage);
  }
  /**
   * 讀取一個陣列/字典
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {any} 陣列/字典
   */
  static getArray(key: string, storage = 3): any {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return JSON.parse(sval);
  }

  /**
   * 讀取一個字串陣列
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {string[]} 字串陣列
   */
  static getStringArray(key: string, storage = 3): string[] | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return JSON.parse(sval) as string[];
  }
  /**
   * 讀取一個數字陣列
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number[]} 數字陣列
   */
  static getNumberArray(key: string, storage = 3): number[] | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return JSON.parse(sval) as number[];
  }
  /**
   * 讀取一個布林值陣列
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {boolean[]} 布林值陣列
   */
  static getBooleanArray(key: string, storage = 3): boolean[] | null {
    const sval: string | null = NyaStorage.getItem(key, storage);
    if (!sval || sval.length == 0) return null;
    return JSON.parse(sval) as boolean[];
  }

  /**
   * 獲取儲存的鍵總數或某個鍵的內容長度
   * @param {string} key 名稱（不提供則獲取儲存的鍵總數）
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 儲存的鍵總數或某個鍵的內容長度
   */
  static getLength(key = "", storage = 3): number {
    if (key.length > 0) {
      return (NyaStorage.getItem(key, storage) ?? "").length;
    } else {
      const useStorage: Storage =
        storage == 1 || storage == 3 ? sessionStorage : localStorage;
      return useStorage.length;
    }
  }

  /**
   * 獲取已用儲存空間
   * @param {string} unit 返回單位
   * 0:B, 1:KB, 2:MB, 負數:設該數的整數為儲存空間總量估算剩餘空間(B)
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存
   * @return {number} 已用空間數值
   */
  static getSize(storage = 1, unit = 0): number {
    let size = 0;
    const useStorage: Storage = storage == 1 ? sessionStorage : localStorage;
    for (const item in useStorage) {
      if (Object.prototype.hasOwnProperty.call(useStorage, item)) {
        size += (useStorage.getItem(item) ?? "").length;
      }
    }
    if (unit != 0) {
      if (unit == 1) {
        return size / 1024;
      } else if (unit == 2) {
        return size / 1024 / 1024; //toFixed(2);
      } else if (unit < 0) {
        return unit * -1 - size;
      }
    }
    return size;
  }

  /**
   * 獲取剩餘儲存空間
   * @param {string} unit 返回單位
   * 0:B, 1:KB, 2:MB, 負數:設該數的整數為儲存空間總量估算剩餘空間(B)
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存
   * @return {number} 剩餘空間數值(B)
   */
  static getFree(storage = 3, unit = 0): number {
    const testKey = "storagetest";
    let size = 0;
    const useStorage: Storage = storage == 1 ? sessionStorage : localStorage;
    useStorage.removeItem(testKey);
    for (let i = 0, data = "t"; i < 40; i++) {
      try {
        useStorage.setItem(testKey, data);
        data = data + data;
      } catch {
        const storageSize = data.length;
        size = storageSize;
        break;
      }
    }
    if (unit != 0) {
      if (unit == 1) {
        return size / 1024;
      } else if (unit == 2) {
        return size / 1024 / 1024; //toFixed(2);
      } else if (unit < 0) {
        return unit * -1 - size;
      }
    }
    useStorage.removeItem(testKey);
    return size;
  }

  /**
   * 保存
   * @param {string} key 名稱
   * @param {string|null} value 值（提供 null 則刪除該儲存項）
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setItem(
    key: string,
    value: string | null = null,
    storage = 2
  ): number {
    switch (storage) {
      case 1:
        return NyaStorage.setOrDeleteItem(sessionStorage, key, value);
      case 2:
        return NyaStorage.setOrDeleteItem(localStorage, key, value);
      case 3:
        if (sessionStorage.getItem(key)) {
          return NyaStorage.setOrDeleteItem(sessionStorage, key, value);
        } else if (localStorage.getItem(key)) {
          return NyaStorage.setOrDeleteItem(localStorage, key, value);
        } else {
          return NyaStorage.setOrDeleteItem(sessionStorage, key, value);
        }
      case 4:
        if (localStorage.getItem(key)) {
          return NyaStorage.setOrDeleteItem(localStorage, key, value);
        } else if (sessionStorage.getItem(key)) {
          return NyaStorage.setOrDeleteItem(sessionStorage, key, value);
        } else {
          return NyaStorage.setOrDeleteItem(localStorage, key, value);
        }
      default:
        return 0;
    }
  }

  /**
   * 讀取
   * @param {string} key 名稱
   * @param {boolean} storage 使用儲存 1會話儲存 2永久儲存 3會話儲存優先 4永久儲存優先
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static getItem(key: string, storage = 2): string | null {
    switch (storage) {
      case 1:
        return sessionStorage.getItem(key);
      case 2:
        return localStorage.getItem(key);
      case 3:
        return sessionStorage.getItem(key) ?? localStorage.getItem(key);
      case 4:
        return localStorage.getItem(key) ?? sessionStorage.getItem(key);
      default:
        return null;
    }
  }

  /**
   * 设置或删除存储值
   * @param {Storage} useStorage 使用儲存
   * @param {string} key 名稱
   * @param {string|null} value 值（提供 null 則刪除該儲存項）
   * @return {number} 操作結果:  0:沒有進行任何操作
   * -1:會話儲存失敗 -2 永久儲存失敗 -3:會話儲存刪除失敗 -4 永久儲存刪除失敗
   *  1:會話儲存成功  2:永久儲存成功  3:刪除會話儲存成功  4:刪除永久儲存成功
   */
  static setOrDeleteItem(
    useStorage: Storage,
    key: string,
    value: string | null = null
  ): number {
    if (value === null) {
      try {
        useStorage.removeItem(key);
      } catch {
        return useStorage === sessionStorage ? -3 : -4;
      }
      return useStorage === sessionStorage ? 3 : 4;
    } else {
      try {
        useStorage.setItem(key, value);
      } catch {
        return useStorage === sessionStorage ? -1 : -2;
      }
      return useStorage === sessionStorage ? 1 : 2;
    }
  }

  /**
   * 檢查瀏覽器是否支援 sessionStorage 和 localStorage
   * @param {boolean} printLog 如果不支援，在控制檯輸出錯誤
   * @return {boolean[]} [是否支援sessionStorage, 是否支援localStorage]
   */
  static chkSupport(printLog = true): boolean[] {
    const support: boolean[] = [true, true];
    const eStr: string[] = ["No ", "Storage"];
    if (!window.sessionStorage) {
      if (printLog) {
        this.log(eStr[0] + "session" + eStr[1], this.nyaLibName, -2);
      }
      support[0] = false;
    }
    if (!window.localStorage) {
      if (printLog) {
        this.log(eStr[0] + "local" + eStr[1], this.nyaLibName, -2);
      }
      support[1] = false;
    }
    return support;
  }
}
