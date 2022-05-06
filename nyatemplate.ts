// HTML/CSS 模板載入功能
// 可專門做一個 `html` 檔案或 `css` 檔案存放一個或多個模板程式碼。
// 有关详细信息，请阅读 Wiki 「模板功能」
import NyaLib from './main';
import NyaNetwork from './nyanetwork';
import NyaStrings from './nyastrings';

// 可選配置
export interface NyaTemplateConfig {
    templateID?: string; // 取出模板檔案中的哪個模板ID
    replaceList?: string[][]; // [["把哪塊","裡的內容替換成什麼"]]，塊名不能重複
    replaceAll?: boolean; // 是否全部替換（僅在模板裡有同名變數時開啟以免浪費效能）
}
// 可選配置的預設設定
export const NyaTemplateConfigDefault: NyaTemplateConfig = {
    templateID: '',
    replaceList: [],
    replaceAll: false,
};

// 模板物件，在第一次從網路下載後，將會得到此物件。
// 再次載入內容時，直接用此物件的 loadTo 函式載入，可以避免重複下載。
export class NyaTemplateElement extends NyaLib {
    code: string = '';
    isHTML: boolean = false;
    status: number = 0; // -1错误 0未完成 1完成
    nullAlert = 'TEMP NULL';

    loadTo(dom: HTMLElement, isAppend = false, config: NyaTemplateConfig = NyaTemplateConfigDefault) {
        if (this.code.length == 0) {
            NyaLib.log(this.nullAlert, NyaTemplateElement.nyaLibName, -2);
        }
        if (this.isHTML) {
            const add: string = NyaTemplate.loadTemplateHtml(this.code, config);
            if (isAppend) {
                dom.innerHTML += add;
            } else {
                dom.innerHTML = add;
            }
        } else {
            const add: string = NyaTemplate.loadTemplateCss(this.code, config);
            if (add.length == 0) {
                return;
            }
            let cssattr: string[] = ['<', '/', 'style>'];
            cssattr = [cssattr[0] + cssattr[2], cssattr[0] + cssattr[1] + cssattr[2]];
            if (isAppend) {
                dom.innerHTML += cssattr[0] + add + cssattr[1];
            } else {
                dom.innerHTML = cssattr[0] + add + cssattr[1];
            }
        }
    }

    codeByID(templateID: string, replaceList: string[][] = [], replaceAll = false): string {
        if (this.code.length == 0) {
            NyaLib.log(this.nullAlert, NyaTemplateElement.nyaLibName, -2);
        }
        const config: NyaTemplateConfig = {
            templateID: templateID,
            replaceList: replaceList,
            replaceAll: replaceAll,
        };
        return this.isHTML ? NyaTemplate.loadTemplateHtml(this.code, config) : NyaTemplate.loadTemplateCss(this.code, config);
    }
}

// HTML/CSS 模板載入功能
export default class NyaTemplate extends NyaLib {
    /**
     * 下載模板並部署到指定位置
     * @param {string} templateURL 模板檔案的網址（必須以 GET/POST 結尾）
     * @param {string} dom 要將讀入的模板嵌入到哪裡（可選，不指定則視為只下載）
     * @param {function} callback 下載並嵌入完成後呼叫，可以获得包含数据的 NyaTemplateElement （可選）
     * @param {NyaTemplateConfig} config 更多可選引數，見 NyaTemplateConfig 的註釋
     * @return {NyaTemplateElement} 本次建立的 NyaTemplateElement 物件。NyaTemplateElement 物件可以使用 loadTo 函式再次部署模板而無需再次下載 。
     * 注：返回的 NyaTemplateElement 還未包含下載後的模板資料，如需完整的 NyaTemplateElement 請使用 callback 獲取。
     */
    static loadTemplate(templateURL: string, dom?: HTMLElement, callback?: (templateElement: NyaTemplateElement) => void, config: NyaTemplateConfig = NyaTemplateConfigDefault): NyaTemplateElement {
        const templateElement: NyaTemplateElement = new NyaTemplateElement();
        const extName: string = templateURL.split('.').pop() ?? '';
        templateElement.isHTML = extName.toLowerCase().indexOf('htm') != -1;
        NyaNetwork.get(
            templateURL,
            undefined,
            (data: XMLHttpRequest | null, status: number) => {
                if (data == null) {
                    NyaLib.log(status.toString() + ':' + templateURL, this.nyaLibName, -2);
                    templateElement.status = -1;
                } else {
                    templateElement.code = data.responseText;
                    templateElement.status = 1;
                    if (dom) {
                        templateElement.loadTo(dom, false, config);
                    }
                }
                if (callback) {
                    callback(templateElement);
                }
            },
            false
        );
        return templateElement;
    }

    /**
     * 讀入模板網頁
     * @param {string} templateFileCode 模板檔案內容（示例见 README.md ）
     * @param {NyaTemplateConfig} config 更多可選引數，見 NyaTemplateConfig 的註釋
     * @return {string} 從模板生成的 HTML
     */
    static loadTemplateHtml(templateFileCode: string, config: NyaTemplateConfig = NyaTemplateConfigDefault): string {
        let fStart = '';
        const template: string = 'template';
        const fEnd = '</' + template + '>';
        if (!config.templateID || config.templateID.length == 0) {
            fStart = '<' + template + '>';
        } else {
            fStart = '<' + template + ' id="' + config.templateID + '">';
        }
        let templateHTML = NyaStrings.stringNode(templateFileCode, fStart, fEnd);
        if (config.replaceList) {
            for (const replaceKV of config.replaceList) {
                const replaceK: string = '{{ ' + replaceKV[0] + ' }}';
                const replaceV: string = replaceKV[1];
                templateHTML = config.replaceAll ? NyaStrings.replaceAll(templateHTML, replaceK, replaceV) : templateHTML.replace(replaceK, replaceV);
            }
        }
        return templateHTML;
    }

    /**
     * 讀入模板 CSS 樣式
     * @param {string} templateFileCode 模板檔案內容（示例见 README.md ）
     * @param {NyaTemplateConfig} config 更多可選引數，見 NyaTemplateConfig 的註釋
     * @return {string} 從模板生成的 HTML
     */
    static loadTemplateCss(templateFileCode: string, config: NyaTemplateConfig = NyaTemplateConfigDefault): string {
        const tempName = '@-template-' + config.templateID;
        const fStart: number = templateFileCode.indexOf(tempName);
        if (fStart == -1) {
            return '';
        }
        let tempCSS = templateFileCode.substring(fStart);
        tempCSS = NyaStrings.substrPair(tempCSS);
        if (tempCSS.length == 0) {
            return '';
        }
        if (config.replaceList) {
            for (const replaceKV of config.replaceList) {
                const replaceK: string = '{{ ' + replaceKV[0] + ' }}';
                const replaceV: string = replaceKV[1];
                if (config.replaceAll === true) {
                    tempCSS = NyaStrings.replaceAll(tempCSS, replaceK, replaceV);
                }
                tempCSS = tempCSS.replace(replaceK, replaceV);
            }
        }
        return tempCSS;
    }
}
