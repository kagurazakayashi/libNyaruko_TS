// 字串相關處理，提取、生成等
import NyaLib from "./main"

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
     * 粗略時間差描述文字
     * @param {number} time 時間戳（預設用秒級）
     * @param {number[]} timeArr 自定義時間分隔
     * @param {string[]} timeUnitStr 自定義時間分隔文字（s結尾複數需要帶上s，輸出時會自動增減）
     * @return {string} 描述文字
     */
    static timeDiffStr(time: number, timeArr: number[] = [525600, 262080, 43200, 1440, 60, 1, 0], timeUnitStr: string[] = ['年', '半年', '月', '日', '小时', '分钟', '刚刚', '前']): string {
        let tTime = 0;
        let tStr = '';
        for (let i = 0; i < timeArr.length; i++) {
            if (time > timeArr[i]) {
                tTime = time / timeArr[i];
                tStr = timeUnitStr[i];
                break;
            }
        }
        if (tTime == Infinity) {
            tTime = 0;
        } else {
            tTime = Math.floor(tTime);
        }
        if (tTime == 1 && tStr && tStr.length > 0 && tStr.substr(tStr.length - 1) == 's') {
            tStr = tStr.substr(0, tStr.length - 1);
        }
        if (tTime == 0) {
            return timeUnitStr[timeUnitStr.length - 2];
        }
        return tTime.toString() + ' ' + tStr + timeUnitStr[timeUnitStr.length - 1];
    }
}