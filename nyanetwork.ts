import NyaLib from "./main";

export default class NyaNetwork extends NyaLib {
    /**
     * 傳送 GET 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static get<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): void {
        this.ajax('GET', url, data, callback, async);
    }
    
    /**
     * 傳送 POST 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static post<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): void {
        this.ajax('POST', url, data, callback, async);
    }
    
    /**
     * 傳送請求
     * @param {string}   type     請求方式
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static ajax<T extends unknown>(type: string, url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): void {
        if (url.length == 0) {
            return;
        }
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        const dataArr: string[] = [];
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
        // this.log(`请求网址 ${url} , 数据 ${dataStr}`, this.nyaLibName);
        const isGET = type == 'GET';
        if (isGET && isArg) {
            url += '?' + dataStr;
        }
        xhr.open(type, url, async);
        xhr.onload = function () {
            // this.log(`请求网址 ${url} 成功，返回数据 ${this.responseText}`, this.nyaLibName);
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function () {
            // this.log(`请求网址 ${url} 失败，返回状态码 ${this.status}`, this.nyaLibName, -2);
            if (callback) {
                callback(null, this.status);
            }
        };
        if (isGET) {
            xhr.send();
        } else {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            if (isArg) {
                xhr.send(dataStr);
            } else {
                xhr.send();
            }
        }
    }
}