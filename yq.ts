/**
 * 雅詩TS工具類
 * by 神楽坂雅詩
 */
export default class YQ {
    static yqStr = 'YQ';

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
     * 快捷通过 id 获取取 div（假设该 id 一定存在）
     * @param {string} element div 的 id
     * @return {HTMLDivElement} div 物件
     */
    static divById(element: string): HTMLDivElement {
        const divdom: HTMLElement | null = document.getElementById(element);
        if (!divdom) {
            YQ.log(element + ' Not Found', YQ.yqStr, -2);
            return document.createElement('div');
        }
        return document.getElementById(element) as HTMLDivElement;
    }

    /**
     * 傳送 GET 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static get<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): void {
        YQ.ajax('GET', url, data, callback, async);
    }
    /**
     * 傳送 POST 請求
     * @param {string}   url      請求網址
     * @param {unknown}   data     需要提交的資料
     * @param {function} callback 回撥函式
     * @param {boolean}  async    是否使用非同步請求
     */
    static post<T extends unknown>(url: string, data?: T, callback?: (data: XMLHttpRequest | null, status: number) => void, async = true): void {
        YQ.ajax('POST', url, data, callback, async);
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
        // YQ.log(`请求网址 ${url} , 数据 ${dataStr}`, YQ.yqStr);
        const isGET = type == 'GET';
        if (isGET && isArg) {
            url += '?' + dataStr;
        }
        xhr.open(type, url, async);
        xhr.onload = function () {
            // YQ.log(`请求网址 ${url} 成功，返回数据 ${this.responseText}`, YQ.yqStr);
            if (callback) {
                callback(this, this.status);
            }
        };
        xhr.onerror = function () {
            // YQ.log(`请求网址 ${url} 失败，返回状态码 ${this.status}`, YQ.yqStr, -2);
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
    static log(info: unknown, module = '', level = 0): void {
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
    static fadeIn(obj: HTMLElement, speed = 1, callback?: () => void): void {
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
    static fadeOut(obj: HTMLElement, speed = 1000, callback?: () => void): void {
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
    static show(obj: HTMLElement): void {
        obj.style.display = '';
    }
    /**
     * 立即隱藏
     * @param {HTMLElement} obj 要操作的 DOM 物件
     */
    static hide(obj: HTMLElement): void {
        obj.style.display = 'none';
    }

    /**
     * 遍歷 DOM 物件
     * @param {string} selector 要操作的 DOM 物件描述
     * @param {function} callback 處理遍歷物件的函式
     */
    static each(selector: string, callback: (el: unknown, i: number) => void): void {
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
                let nowVal = '';
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
        if (startIndex < 0) {
            return strSource;
        }
        const noStartText = strSource.substring(startIndex);
        const endIndex: number = noStartText.indexOf(strEnd);
        if (endIndex < 0) {
            return strSource;
        }
        return noStartText.substring(0, endIndex);
    }

    /**
     * 讀入模板網頁
     * @param {string} templateFileCode 模板檔案內容
     * @param {string} replaceList [["把哪塊","裡的內容替換成什麼"]]，塊名不能重複
     * @param {string} templateID 取出模板檔案中的哪個模板ID
     * @return {string} 从模板生成的 HTML
     */
    static loadTemplateHtml(templateFileCode: string, replaceList: string[][], templateID = ''): string {
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

    /**
     * 粗略時間差描述文字
     * @param {number} time 時間戳（預設用秒級）
     * @param {number[]} timeArr 自定義時間分隔
     * @param {string[]} timeUnitStr 自定義時間分隔文字
     * @return {string} 描述文字
     */
    static timeDiffStr(time: number, timeArr: number[] = [525600, 262080, 43200, 1440, 60], timeUnitStr: string[] = ['年', '半年', '月', '日', '小时', '前']): string {
        let tTime = 0;
        let tStr = '';
        for (let i = 0; i < timeArr.length; i++) {
            if (time > timeArr[i]) {
                tTime = time / timeArr[i];
                tStr = timeUnitStr[i];
                break;
            }
        }
        const tf: string[] = tTime.toString().split('.');
        return tf[0] + '' + tStr + timeUnitStr.pop();
    }

    /**
     * 從物件中查詢屬性並返回，並確定每個屬性是否存在，否則提供預設值
     * @param {unknown} obj 要從哪個元素查詢
     * @param {string} property 屬性路徑 obj1.obj2.obj3
     * @param {unknown} defaultVal 沒有找到時返回的預設值
     * @param {boolean} showWarn 是否在瀏覽器控制檯顯示找不到物件的資訊
     * @return {boolean} isok 是否有擁有此屬性
     * @return {string} path 物件路徑
     * @return {string} type 物件型別
     * @return {unknown} obj 找到的屬性物件或預設值
    */
    static getProperty(obj: unknown, property: string, defaultVal: unknown = null, showWarn = false): {
        isok: boolean;
        path: string;
        type: string;
        obj: unknown;
    } {
        const propertys: string[] = property.split('.');
        let path = 'obj';
        let type = 'undefined';
        for (let i = 0; i < propertys.length; i++) {
            const prop = propertys[i];
            path = path + '.' + prop;
            type = typeof eval(path);
            if (type == 'undefined') {
                if (showWarn) {
                    console.warn('Cannot read property "' + path + '"');
                }
                return {
                    isok: false,
                    path: path,
                    type: type,
                    obj: defaultVal,
                };
            }
        }
        const isOK = type != 'undefined';
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
    static getProp(obj: unknown, property: string, defaultVal: unknown = null, showWarn = true): unknown {
        const prop: { isok: boolean; path: string; type: string; obj: unknown; } = YQ.getProperty(obj, property, defaultVal, showWarn);
        return prop.obj;
    }

    /**
     * 檢查數值是否在區間中
     * @param {string | number[]} scope
     * string:   區間描述文字，如 "(0,10)"
     *     "(,100]"  : ∞ < x ≤ 100
     *     "[0,100)" : 0 ≤ x < 100
     * number[]: 區間數字陣列 [最小值,最大值]
     * @param {number} value 要被測量的數字
     * @param {boolean} isNewNum 返回符合範圍的 ±1 數字 (value 必須輸入整數)
     * @return {number} isNewNum ? 符合範圍的 ±1 數字 : (-1小於 0正常 1大於)
     */
    static scopeCalc(scope: string | number[], value: number, isNewNum = false): number {
        const isNumArr = scope instanceof Array;
        const incStart: boolean = isNumArr ? true : ((scope as string).substring(0, 1) == '[');
        const incEnd: boolean = isNumArr ? true : ((scope as string).substring(scope.length - 1) == ']');
        const scopeArr: string[] = isNumArr ? [] : (scope as string).substring(1, scope.length - 1).split(',');
        if (isNumArr || scopeArr[0].length > 0) {
            const minVal: number = isNumArr ? (scope as number[])[0] : parseFloat(scopeArr[0]);
            if (incStart) {
                if (value < minVal) {
                    // YQ.log(`数值 ${value} 小于等于 标准值 ${scope} 中的 ${minVal}`, YQ.yqStr);
                    return isNewNum ? minVal : -1;
                }
            } else {
                if (value <= minVal) {
                    // YQ.log(`数值 ${value} 小于 标准值 ${scope} 中的 ${minVal}`, YQ.yqStr);
                    return isNewNum ? minVal + 1 : -1;
                }
            }
        }
        if (isNumArr || scopeArr[1].length > 0) {
            const maxVal: number = isNumArr ? (scope as number[])[1] : parseFloat(scopeArr[1]);
            if (incEnd) {
                if (value > maxVal) {
                    // YQ.log(`数值 ${value} 大于等于 标准值 ${scope} 中的 ${maxVal}`, YQ.yqStr);
                    return isNewNum ? maxVal : 1;
                }
            } else {
                if (value >= maxVal) {
                    // YQ.log(`数值 ${value} 大于 标准值 ${scope} 中的 ${maxVal}`, YQ.yqStr);
                    return isNewNum ? maxVal - 1 : 1;
                }
            }
        }
        // YQ.log(`数值 ${value} 在此区间 ${scope}`, YQ.yqStr);
        return isNewNum ? value : 0;
    }

    /**
     * 物件的長度
     * @param {object} obj 要檢查的物件 [] 或 {}
     * @return {number} 物件的長度
    */
    static count(obj: object): number {
        const objKeys: Array<any> = Object.keys(obj);
        // YQ.log('对象列表：', YQ.yqStr);
        // console.log(YQ.yqStr, objKeys);
        return objKeys.length;
    }
    /**
     * 從物件陣列中移除所有長度為 0 的物件 {}
     * @param {object[]} obj 要檢查的物件陣列
     * @return {object[]} 清理後的物件陣列
    */
    static clearEmpty(obj: object[]): object[] {
        let newObj: object[] = [];
        for (const nowObj of obj) {
            if (YQ.count(nowObj) > 0) {
                newObj.push(nowObj);
            }
        }
        return newObj;
    }
}
