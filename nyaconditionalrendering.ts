// 處理嵌入到網頁元素屬性中的指令
import NyaLib from "./main";
import NyaDom from "./nyadom";
import NyaVisible from "./nyavisible"

export default class NyaConditionalRendering extends NyaLib {
    /**
     * 多語言：根據 HTML 元素中的 y-lang 屬性將語言文字呈現到該元素，應在 DOM 載入完成後使用。
     * 例如： <div y-lang="zh::正在加载::en::Loading"></div>
     * @param {string} language 語言名稱
     * @param {boolean} removeAttr 操作完成後移除屬性
     * @param {HTMLElement} parentDOM 只處理此指定元素中的內容
     * @return {number} 已處理的元素數量
    */
     static yLang(language: string, removeAttr = true, parentDOM = document.body): number {
        const attrName = 'y-lang';
        let ii = 0;
        const allAttr: HTMLElement[] = NyaDom.getHasAttribute(attrName, parentDOM);
        for (const nowDom of allAttr) {
            const attrInfo: string | null = nowDom.getAttribute(attrName);
            if (attrInfo == null || attrInfo.length == 0) {
                continue;
            }
            const langInfos: string[] = attrInfo.split('::');
            let langKey = '';
            let langVal = '';
            for (let i = 0; i < langInfos.length; i++) {
                if (i % 2 == 0) {
                    langKey = langInfos[i];
                } else {
                    langVal = langInfos[i];
                    // 填充語言文字
                    if (langKey == language) {
                        if (nowDom.innerText != langVal) {
                            nowDom.innerText = langVal;
                        }
                        if (removeAttr) {
                            nowDom.removeAttribute(attrName);
                        }
                        ii++;
                        break;
                    }
                }
            }
        }
        return ii;
    }

    /**
     * 根據 HTML 元素中的 y-if 或 y-show 屬性中的程式碼決定該元素是否應該存在或顯示，應在 DOM 載入完成後使用。
     *   y-if 或 y-show 中的程式碼必須能夠得出一個布林值，並且只能使用全域性和 vars 輸入的變數
     *   例如： <div y-if="vars[0] == 233"></div>
     * @param {HTMLElement} parentDOM 只處理此指定元素中的內容
     * @param {boolean} showMode 只控制該物件是否顯示，否則條件不成立時該物件會被徹底移除
     * @param {any[]} 傳入任意變數，供 y-if 屬性中的程式碼使用
     * @return {number} 已處理的元素數量
    */
    static yIfShow(parentDOM = document.body, ...vars: any[]): number {
        let ii = 0;
        const attrNameArr = ['y-if', 'y-show'];
        for (let i = 0; i < 2; i++) {
            const attrName = attrNameArr[i];
            const allAttr: HTMLElement[] = NyaDom.getHasAttribute(attrName, parentDOM);
            for (const nowDom of allAttr) {
                const attrInfo: string | null = nowDom.getAttribute(attrName);
                if (attrInfo == null || attrInfo.length == 0) {
                    continue;
                }
                const isOK: boolean = eval(attrInfo);
                // this.log(`${attrName} 执行 ${attrInfo} 结果为 ${isOK}`, this.nyaLibName);
                if (i == 1) {
                    if (isOK) {
                        NyaVisible.show(nowDom);
                    } else {
                        NyaVisible.hide(nowDom);
                    }
                } else if (!isOK) {
                    nowDom.remove();
                }
                ii++;
            }
        }
        return ii;
    }
}
