import { Node } from "typescript";

/**
 * 雅詩TS工具類
 * by 神楽坂雅詩
 */
export default class YQ {
    /**
     * 獲取 HTML DOM 物件
     * @param {string} element 物件描述（'div',','.divclass','#divid'）
     * @return {HTMLElement|HTMLCollectionOf<Element>|null} HTML 物件/物件組/空
     */
    static dom(element: string): HTMLElement | HTMLCollectionOf<Element> | null {
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
     * @param {boolean}  async    是否使用非同步請求
     */
    static get<T extends object>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async: boolean = true): void {
        YQ.ajax('GET', url, data, callback);
    }
    /**
     * 傳送 POST 請求
     * @param {string}   url      請求網址
     * @param {object}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static post<T extends object>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async: boolean = true): void {
        YQ.ajax('POST', url, data, callback);
    }
    /**
     * 傳送請求
     * @param {string}   type     請求方式
     * @param {string}   url      請求網址
     * @param {object}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static ajax<T extends object>(type: string, url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async: boolean = true): void {
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
        const isGET = type == 'GET';
        if (isGET && isArg) {
            url += '?' + dataStr;
        }
        xhr.open(type, url, true);
        xhr.onload = function () {
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function () {
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
     * 輸出日誌
     * @param {any}    info   要輸出的物件
     * @param {string} module 模組
     * @param {object} level  警告等級 0普通 -1警告 -2錯誤
     */
    static log(info: any, module: string = '', level: number = 0): void {
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
    /**
     * 逐漸顯示
     * @param {HTMLElement} obj      要操作的 DOM 物件
     * @param {number}      speed    動畫速度(毫秒)
     * @param {function}    callback 動畫完成之後的回撥
     */
    static fadeIn(obj: HTMLElement, speed: number = 1, callback?: () => void) {
        obj.style.opacity = '1';
        obj.style.animation = 'show ' + speed.toString() + 'ms';
        if (callback) {
            setTimeout(callback, speed);
        }
    }
    /**
     * 逐漸隱藏
     * @param {HTMLElement} obj      要操作的 DOM 物件
     * @param {number}      speed    動畫速度(毫秒)
     * @param {function}    callback 動畫完成之後的回撥
     */
    static fadeOut(obj: HTMLElement, speed: number = 1000, callback?: () => void) {
        obj.style.opacity = '0';
        obj.style.animation = 'hide ' + speed.toString() + 'ms';
        if (callback) {
            setTimeout(callback, speed);
        }
    }
    /**
     * 立即顯示
     * @param {HTMLElement} obj 要操作的 DOM 物件
     */
    static show(obj: HTMLElement) {
        obj.style.display = '';
    }
    /**
     * 立即隱藏
     * @param {HTMLElement} obj 要操作的 DOM 物件
     */
    static hide(obj: HTMLElement) {
        obj.style.display = 'none';
    }
    /**
     * 遍歷 DOM 物件
     * @param {string} selector 要操作的 DOM 物件描述
     * @param {function} callback 處理遍歷物件的函式
     */
    static each(selector: string, callback: (el: any, i: number) => void): void {
        const elements: NodeListOf<Element> = document.querySelectorAll(selector);
        Array.prototype.forEach.call(elements, callback);
    }
    /**
     * 獲得網址中 # 後面的引數
     * @param {string} getKey 獲取指定的鍵（返回 string），若不提供此值，則返回鍵值陣列（string[][]）
     * @return {string[]|string} 取得的鍵值或值
     */
    static argv(getKey?: string): string[][] | string {
        const argvs: string[][] = [];
        const argStr: string = window.location.hash;
        if (argStr.length <= 1) {
            return argvs;
        }
        const argArr: string[] = argStr.substring(1).split('&');
        for (const key in argArr) {
            if (Object.prototype.hasOwnProperty.call(argArr, key)) {
                const nowArg: string = argArr[key];
                const nowArr: string[] = nowArg.split('=');
                const nowKey: string = nowArr[0];
                let nowVal: string = '';
                if (nowArr.length > 0) {
                    nowVal = nowArr[1];
                }
                if (getKey && getKey == nowKey) {
                    return nowVal;
                } else {
                    argvs.push([nowKey, nowVal]);
                }
            }
        }
        if (getKey) {
            return '';
        }
        return argvs;
    }
    /**
     * 將 HTML 字串轉換為 DOM
     * @param {string} dom DOM 字串
     * @return {NodeListOf<ChildNode>} DOM
     */
    static stringToDOM(dom: string): NodeListOf<ChildNode> {
        const saveElement: HTMLDivElement = document.createElement('div');
        saveElement.innerHTML = dom;
        return saveElement.childNodes;
    }
    /**
     * 將 DOM 轉換為 HTML 字串
     * @param {NodeListOf<ChildNode>} node DOM
     * @return {string} HTML 字串
     */
    static domToString(node: globalThis.Node): string {
        const saveElement: HTMLDivElement = document.createElement('div');
        saveElement.appendChild(node);
        return saveElement.innerHTML;
    }
    /**
     * 獲取兩字串之間的內容
     * @param {string} strSource 原始字串
     * @param {string} strStart 起始字串
     * @param {string} strEnd 結束字串
     * @return {string} 兩字串之間的內容
     */
    static stringNode(strSource: string, strStart: string, strEnd: string): string {
        const startIndex: number = strSource.indexOf(strStart) + strStart.length;
        const endIndex: number = strSource.indexOf(strEnd);
        if (startIndex >= 0 && endIndex >= 0) {
            return strSource.substring(startIndex, endIndex - startIndex);
        }
        return '';
    }
    /**
     * 讀入模板網頁
     * @param {string} templateFileCode 模板檔案內容
     * @param {string} replaceList [["把哪塊","裡的內容替換成什麼"]]，塊名不能重複
     * @param {string} templateID 取出模板檔案中的哪個模板ID
     * @return {string} 从模板生成的 HTML
     */
    static loadTemplateHtml(templateFileCode: string, replaceList: string[][], templateID: string = ''): string {
        let fStart = '';
        const fEnd = '</template>';
        if (templateID.length == 0) {
            fStart = '<template>';
        } else {
            fStart = '<template id="' + templateID + '">';
        }
        let templateHTML = YQ.stringNode(templateFileCode, fStart, fEnd);
        for (let i = 0; i < replaceList.length; i++) {
            const replaceKV: string[] = replaceList[i];
            const replaceK: string = '{{ ' + replaceKV[0] + ' }}';
            const replaceV: string = replaceKV[1];
            templateHTML = templateHTML.replace(replaceK, replaceV);
        }
        return templateHTML;
    }
}
