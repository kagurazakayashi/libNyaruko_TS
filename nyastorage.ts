import NyaLib from "./main";

// 本地存储控制器
export default class NyaStorage extends NyaLib {
    /**
     * 儲存一個字串
     * @param {string} key 名稱
     * @param {string} value 字串
     * @param {boolean} persistent 持久儲存
     */
    static setString(key: string, value: string, persistent = false) {
        this.getStorage(persistent).setItem(key, value);
    }
    /**
     * 讀取一個字串
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {string} 字串
     */
    static getString(key: string, persistent = false): string {
        return this.getStorage(persistent).getItem(key);
    }

    /**
     * 儲存一個數字
     * @param {string} key 名稱
     * @param {number} value 數字
     * @param {boolean} persistent 持久儲存
     */
    static setNumber(key: string, value: number, persistent = false) {
        this.getStorage(persistent).setItem(key, value.toString());
    }
    /**
     * 讀取一個整數
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {number|null} 整數
     */
    static getInt(key: string, persistent = false): number | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return parseInt(sval);
    }
    /**
     * 讀取一個浮點數
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {number} 浮點數
     */
    static getFloat(key: string, persistent = false): number | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return parseFloat(sval);
    }

    /**
     * 儲存一個布林值
     * @param {string} key 名稱
     * @param {boolean} value 布林值
     * @param {boolean} persistent 持久儲存
     */
    static setBoolean(key: string, value: boolean, persistent = false) {
        if (value) {
            this.getStorage(persistent).setItem(key, '1');
        } else {
            this.getStorage(persistent).setItem(key, '0');
        }
    }
    /**
     * 讀取一個布林值
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {boolean} 布林值
     */
    static getBoolean(key: string, persistent = false): boolean | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval == '0') {
            return false;
        } else if (sval == '1') {
            return true;
        } else {
            return null;
        }
    }

    /**
     * 儲存陣列/字典
     * @param {string} key 名稱
     * @param {any} value 陣列/字典
     * @param {boolean} persistent 持久儲存
     */
    static setArray(key: string, value: any, persistent = false) {
        this.getStorage(persistent).setItem(key, JSON.stringify(value));
    }
    /**
     * 讀取一個陣列/字典
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {any} 陣列/字典
     */
    static getArray(key: string, persistent = false): any {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return JSON.parse(sval);
    }

    /**
     * 讀取一個字串陣列
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {string[]} 字串陣列
     */
    static getStringArray(key: string, persistent = false): string[] | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return JSON.parse(sval) as string[];
    }
    /**
     * 讀取一個數字陣列
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {number[]} 數字陣列
     */
    static getNumberArray(key: string, persistent = false): number[] | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return JSON.parse(sval) as number[];
    }
    /**
     * 讀取一個布林值陣列
     * @param {string} key 名稱
     * @param {boolean} persistent 持久儲存
     * @return {boolean[]} 布林值陣列
     */
    static getBooleanArray(key: string, persistent = false): boolean[] | null {
        const sval: string = this.getStorage(persistent).getItem(key);
        if (sval.length == 0) return null;
        return JSON.parse(sval) as boolean[];
    }

    /**
     * 獲取儲存的鍵總數或某個鍵的內容長度
     * @param {string} key 名稱（不提供則獲取儲存的鍵總數）
     * @param {boolean} persistent 持久儲存
     * @return {number} 儲存的鍵總數或某個鍵的內容長度
     */
    static getLength(key?: string, persistent = false): number {
        if (key) {
            return this.getStorage(persistent).getItem(key).length;
        } else {
            return this.getStorage(persistent).length;
        }
    }

    /**
     * 獲取已用儲存空間
     * @param {string} unit 返回單位
     * 0(null):B, 1:KB, 2:MB, 負數:設該數的整數為儲存空間總量估算剩餘空間(B)
     * @param {boolean} persistent 持久儲存
     * @return {number} 已用空間數值
     */
    static getSize(unit?: number, persistent = false): number {
        let size: number = 0;
        const storage: Storage = this.getStorage(persistent);
        for (const item in storage) {
            if (storage.hasOwnProperty(item)) {
                size += storage.getItem(item).length;
            }
        }
        if (unit == 1) {
            return size / 1024;
        } else if (unit == 2) {
            return size / 1024 / 1024; //toFixed(2);
        } else if (unit < 0) {
            return unit * (-1) - size;
        } else {
            return size
        }
    }

    /**
     * 獲取剩餘儲存空間
     * @param {boolean} persistent 持久儲存
     * @return {number} 剩餘空間數值(B)
     */
    static getFree(persistent = false): number {
        const testKey: string = 'storagetest';
        let size: number = 0;
        const storage: Storage = this.getStorage(persistent);
        storage.removeItem(testKey);
        for (let i = 0, data = "t"; i < 40; i++) {
            try {
                storage.setItem(testKey, data);
                data = data + data;
            } catch {
                const storageSize = JSON.stringify(storage).length;
                size = storageSize;
                break;
            }
        }
        storage.removeItem(testKey);
        return size;
    }

    /**
     * 獲取儲存空間物件
     * @param {boolean} isLocal 是否為 localStorage, 否則 sessionStorage
     * @return {Storage} 儲存空間物件
     */
    static getStorage(isLocal = false): Storage {
        this.chkSupport();
        if (isLocal) {
            return localStorage;
        } else {
            return sessionStorage;
        }
    }

    /**
     * 檢查瀏覽器是否支援 sessionStorage 和 localStorage
     * @param {boolean} printLog 如果不支援，在控制檯輸出錯誤
     * @return {boolean[]} [是否支援sessionStorage, 是否支援localStorage]
     */
    static chkSupport(printLog = true): boolean[] {
        let support: boolean[] = [true, true];
        const eStr: string[] = ['No ', 'Storage'];
        if (!window.sessionStorage) {
            if (printLog) {
                this.log(eStr[0] + 'session' + eStr[1], this.nyaLibName, -2);
            }
            support[0] = false;
        }
        if (!window.localStorage) {
            if (printLog) {
                this.log(eStr[0] + 'local' + eStr[1], this.nyaLibName, -2);
            }
            support[1] = false;
        }
        return support;
    }
}