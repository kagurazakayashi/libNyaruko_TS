// 字串相關處理，提取、生成等
import NyaLib from './main';

export default class NyaStrings extends NyaLib {
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
     * 取兩個字元之間的內容，這兩個字元有層級配對的關係
     * 例如： xx{a{}b{}}yy 會取出 a{}b{}
     * @param {string} str 要處理的字串
     * @param {string} startChar 開始字元（不要輸入字串）
     * @param {string} endChar 結束字元（不要輸入字串）
     * @return {string} 取出的字串
     */
    static substrPair(str: string, startChar = '{', endChar = '}'): string {
        if (str.length < 3) {
            return '';
        }
        let lc: number = -1;
        let start: number = -1;
        let sLen: number = 0;
        for (let i = 0; i < str.length; i++) {
            const char: string = str.charAt(i);
            if (lc > 0) {
                sLen++;
            }
            if (char == startChar) {
                if (lc < 0) {
                    lc = 0;
                }
                lc++;
                if (start < 0) {
                    start = i;
                }
            } else if (char == endChar) {
                lc--;
            }
            if (lc == 0) {
                return str.substr(start + 1, sLen - 1);
            }
        }
        return '';
    }

    /**
     * 替換字串中的所有指定字串
     * @param {string} str 要處理的字串
     * @param {string} searchValue 要查詢的字串
     * @param {string} replaceValue 要替換成的字串
     * @return {string} 修改後的字串
     */
    static replaceAll(str: string, searchValue: string, replaceValue: string): string {
        if (str.length == 0) {
            return '';
        }
        const sa: string[] = str.split(searchValue);
        if (sa.length <= 1) {
            return str;
        }
        return sa.join(replaceValue);
    }

    /**
     * 在長度不足的字串前補指定字元（通常用於在數字前補0）
     * @param {number|string} str 要處理的數字或字串
     * @param {number} minLength 要保證的最小長度
     * @param {string} addChar 不足位補什麼字元
     * @param {boolean} addToEnd 是否將補位的字元新增到字串末尾（否則放在開頭）
     * @return {string} 補位後的字串
     */
    static addZeroToString(str: number | string, minLength = 2, addChar = '0', addToEnd = false): string {
        let nowStr: string = typeof str == 'number' ? str.toString() : str;
        let zeros: string = '';
        const strLen = nowStr.length;
        if (strLen < minLength) {
            const addZeroCharLen: number = minLength - strLen;
            for (let i = 0; i < addZeroCharLen; i++) {
                zeros += addChar;
            }
        }
        if (addToEnd) {
            return str + zeros;
        } else {
            return zeros + str;
        }
    }
}
