/**
 * 雅詩TS工具類
 * by 神楽坂雅詩
 */
 export default class YQ {
    d: HTMLElement | HTMLCollectionOf<Element> | null = null;
    debug: boolean = false;
    constructor(element?: string) {
        if (element) {
            this.d = this.dom(element);
        }
    }
    /**
     * 獲取 HTML DOM 物件
     * @param {string} element 物件描述（"div",",".divclass","#divid"）
     * @return {HTMLElement|HTMLCollectionOf<Element>|null} HTML 物件/物件組/空
     */
    dom(element: string): HTMLElement | HTMLCollectionOf<Element> | null {
        if (element.length == 0) {
            return null;
        }
        const mode: string = element.substr(0, 1);
        if (mode == '.') {
            element = element.substr(1);
            if (element.length == 0) {
                return null;
            }
            const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(element);
            if (elements.length == 0) {
                return null;
            }
            return elements;
        } else if (mode == '#') {
            element = element.substr(1);
            if (element.length == 0) {
                return null;
            }
            return document.getElementById(element);
        } else if ((mode >= 'a' && mode <= 'z') || (mode >= 'A' && mode <= 'Z')) {
            const elements: HTMLCollectionOf<Element> = document.getElementsByTagName(element);
            if (elements.length == 0) {
                return null;
            }
            return elements;
        }
        return null;
    }
    /**
     * 傳送 GET 請求
     * @param {string}   url      請求網址
     * @param {object}   data     需要提交的資料
     * @param {function} callback 回撥函式
     */
    get<T extends object>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void): void {
        this.ajax('GET', url, data, callback);
    }
    /**
     * 发送 POST 请求
     * @param {string}   url      請求網址
     * @param {object}   data     需要提交的資料
     * @param {function} callback 回撥函式
     */
    post<T extends object>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void): void {
        this.ajax('POST', url, data, callback);
    }
    /**
     * 发送请求
     * @param {string}   type     请求方式
     * @param {string}   url      請求網址
     * @param {object}   data     需要提交的資料
     * @param {function} callback 回撥函式
     */
    ajax<T extends object>(type: string, url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void): void {
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        let dataArr: string[] = [];
        if (data) {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    dataArr.push(key + '=' + element);
                }
            }
        }
        const isArg = dataArr.length > 0;
        const dataStr = isArg ? dataArr.join('&') : '';
        const isGET = type == 'GET'
        if (isGET && isArg) {
            url += '?' + dataStr;
        }
        xhr.open(type, url, true);
        const that = this;
        xhr.onload = function () {
            if (that.debug) {
                that.log({
                    responseText: this.responseText,
                    responseLength: this.responseText.length,
                    status: this.status,
                    statusText: this.statusText
                }, "YQ/NET", 0);
            }
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function () {
            if (that.debug) {
                that.log({
                    status: this.status,
                    statusText: this.statusText
                }, "YQ/NET", -2);
            }
            if (callback) {
                callback(null, this.status);
            }
        };
        if (isGET) {
            xhr.send();
        } else {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if (isArg) {
                xhr.send(dataStr);
            } else {
                xhr.send();
            }
        }
    }
    /**
     * 输出日志
     * @param {any}    info   要輸出的物件
     * @param {string} module 模組
     * @param {object} level  警告等級 0普通 -1警告 -2錯誤
     */
    log(info: any, module: string = "", level: number = 0): void {
        const date: Date = new Date();
        const dateStr = date.toLocaleTimeString();
        if (module.length > 0) {
            module = '[' + module + ']';
        }
        module = '[' + dateStr + ']' + module;
        if (level == 0) {
            console.log(module, info);
        } else if (level == -1) {
            console.warn(module, info);
        } else if (level == -2) {
            console.error(module, info);
        }
    }
}
