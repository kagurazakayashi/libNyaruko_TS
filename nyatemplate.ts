import NyaLib from "./main";
import NyaStrings from "./nyastrings";

export default class NyaTemplate extends NyaLib {
    /**
     * 讀入模板網頁
     * @param {string} templateFileCode 模板檔案內容（示例见 README.md ）
     * @param {string} templateID 取出模板檔案中的哪個模板ID
     * @param {string} replaceList [["把哪塊","裡的內容替換成什麼"]]，塊名不能重複
     * @param {boolean} replaceAll 是否全部替換（僅在模板裡有同名變數時開啟以免浪費效能）
     * @return {string} 從模板生成的 HTML
     */
     static loadTemplateHtml(templateFileCode: string, templateID: string = '', replaceList: string[][] = [], replaceAll: boolean = false): string {
        let fStart = '';
        const template: string = 'template';
        const fEnd = '</' + template + '>';
        if (templateID.length == 0) {
            fStart = '<' + template + '>';
        } else {
            fStart = '<' + template + ' id="' + templateID + '">';
        }
        let templateHTML = NyaStrings.stringNode(templateFileCode, fStart, fEnd);
        for (const replaceKV of replaceList) {
            const replaceK: string = '{{ ' + replaceKV[0] + ' }}';
            const replaceV: string = replaceKV[1];
            templateHTML = replaceAll ? NyaStrings.replaceAll(templateHTML, replaceK, replaceV) : templateHTML.replace(replaceK, replaceV);
        }
        return templateHTML;
    }

    /**
     * 讀入模板 CSS 樣式
     * @param {string} templateFileCode 模板檔案內容（示例见 README.md ）
     * @param {string} templateID 取出模板檔案中的哪個模板ID
     * @param {string} replaceList [["把哪塊","裡的內容替換成什麼"]]，塊名不能重複
     * @param {boolean} replaceAll 是否全部替換（僅在模板裡有同名變數時開啟以免浪費效能）
     * @return {string} 從模板生成的 HTML
     */
    static loadTemplateCss(templateFileCode: string, templateID: string = '', replaceList: string[][] = [], replaceAll: boolean = false): string {
        const tempName = '@-template-' + templateID;
        const fStart: number = templateFileCode.indexOf(tempName);
        if (fStart == -1) {
            return '';
        }
        let tempCSS = templateFileCode.substring(fStart);
        tempCSS = NyaStrings.substrPair(tempCSS);
        if (tempCSS.length == 0) {
            return '';
        }
        for (const replaceKV of replaceList) {
            const replaceK: string = '{{ ' + replaceKV[0] + ' }}';
            const replaceV: string = replaceKV[1];
            tempCSS = replaceAll ? NyaStrings.replaceAll(tempCSS, replaceK, replaceV) : tempCSS.replace(replaceK, replaceV);
        }
        return tempCSS;
    }
}