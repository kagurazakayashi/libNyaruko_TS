// 網路請求和返回資訊處理
import NyaLib from './main';

export default class NyaNetwork extends NyaLib {
    /**
     * 傳送 GET 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 網路請求回撥函式
     * - {XMLHttpRequest|null} data 数据对象
     * - {number} status HTTP状态码
     * @param {boolean}  async    是否使用非同步請求
     */
    static get<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true, isblob: boolean = false): void {
        this.ajax('GET', url, data, callback, async, isblob);
    }

    /**
     * 傳送 POST 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 網路請求回撥函式
     * - {XMLHttpRequest|null} data 数据对象
     * - {number} status HTTP状态码
     * @param {boolean}  async    是否使用非同步請求
     */
    static post<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true, isblob: boolean = false): void {
        this.ajax('POST', url, data, callback, async, isblob);
    }

    /**
     * 傳送請求
     * @param {string}   type     請求方式
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 網路請求回撥函式
     * - {XMLHttpRequest|null} data 数据对象
     * - {number} status HTTP状态码
     * @param {boolean}  async    是否使用非同步請求
     */
    static ajax<T extends unknown>(type: string, url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true, isblob: boolean = false): void {
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
        // this.log(`請求網址 ${url} , 資料 ${dataStr}`, this.nyaLibName);
        const isGET = type == 'GET';
        if (isGET && isArg) {
            url += '?' + dataStr;
        }
        if (isblob) {
            xhr.responseType = 'blob';
            xhr.open(type, url, true);
        } else {
            xhr.open(type, url, async);
        }
        xhr.onload = function () {
            // this.log(`請求網址 ${url} 成功，返回資料 ${this.responseText}`, this.nyaLibName);
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function () {
            // this.log(`請求網址 ${url} 失敗，返回狀態碼 ${this.status}`, this.nyaLibName, -2);
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

    /**
     * 上傳一個或多個檔案，支援附加提交資料(POST)
     * @param {string} url 接收上傳檔案的網址
     * @param {HTMLInputElement} fileInput 網頁檔案上傳框 DOM 物件
     * @param {isMultiple} isMultiple 是否為多個檔案上傳，文件选择
     * @param {unknown} data 需要附加提交的引數
     * @param {function} progress 檔案請求回撥函式
     * - {number} status 文件上传状态 0正在上传 1上传完毕 -1取消 -2超时 -3错误
     * - {number} value 已上传字节
     * - {number} max 总计字节
     * - {number} percent 已完成百分比
     * @param {function} callback 網路請求回撥函式
     * - {XMLHttpRequest|null} data 数据对象
     * - {number} status HTTP状态码
     * @param {boolean} async 是否使用非同步請求
     * @returns {boolean} 创建上传任务是否成功
     */
    static uploadFile<T extends unknown>(url: string, fileInput: HTMLInputElement, isMultiple = false, data?: T, progress?: (status: number, value: number, max: number, percent: number) => void, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): boolean {
        const files: FileList | null = fileInput.files;
        if (files == null || files.length == 0) {
            return false; // 沒有需要上傳的檔案
        }
        const form: FormData = new FormData();
        if (data) {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const element: any = data[key];
                    form.append(key, element);
                }
            }
        }
        if (isMultiple) {
            for (const key in files) {
                if (Object.prototype.hasOwnProperty.call(files, key)) {
                    const file: File = files[key];
                    form.append('files', file, file.name);
                }
            }
        } else {
            form.append('file', files[0], files[0].name);
        }
        const xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open('post', url, async);
        xhr.onload = function (): void {
            // this.log(`請求網址、上傳 ${url} 成功，返回資料 ${this.responseText}`, this.nyaLibName);
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function (): void {
            if (callback) {
                callback(null, this.status);
            }
        };
        xhr.upload.onloadstart = function (): void {
            if (callback) {
                callback(null, this.status);
            }
        };
        xhr.upload.onprogress = function (evt): void {
            if (progress) {
                progress(0, evt.loaded, evt.total, Math.round((evt.loaded / evt.total) * 100));
            }
        };
        xhr.upload.onloadend = function (evt): void {
            if (progress) {
                progress(1, evt.loaded, evt.total, Math.round((evt.loaded / evt.total) * 100));
            }
        };
        xhr.upload.onabort = function (evt): void {
            if (progress) {
                progress(-1, evt.loaded, evt.total, Math.round((evt.loaded / evt.total) * 100));
            }
        };
        xhr.upload.ontimeout = function (evt): void {
            if (progress) {
                progress(-2, evt.loaded, evt.total, Math.round((evt.loaded / evt.total) * 100));
            }
        };
        xhr.upload.onerror = function (evt): void {
            if (progress) {
                progress(-3, evt.loaded, evt.total, Math.round((evt.loaded / evt.total) * 100));
            }
        };
        xhr.send(form);
        return true;
    }
}
