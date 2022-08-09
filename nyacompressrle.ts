// 壓縮: 行程長度壓縮(RLE)
// 記錄每個連續字元的出現次數來壓縮，適用於連續同一個字元出現次數較多的字串，否則會造成壓縮後反而更大。
// DEMO: abbcccdddd55555666666 -> 1a2b3c4d5566

import NyaCalc from './nyacalc';
import NyaStrings from './nyastrings';

export default class NyaCompressRLE {
    /**
     * 壓縮字串
     * @param {string} str 原文
     * @param {number} base 按進位制壓縮位數（可以利用的字元數，選項：10,16,32,62,64,96）
     * @param {number} offset 計數偏移（預設-1，可以利用字元0）
     * @return {string} 壓縮後的字串
     */
    static compression(str: string, base = 64, offset = -1): string {
        if (str.length == 0) return '';
        const result: string[] = [];
        let nowChar: string = '';
        let nowLen: number = 1 + offset;
        let nextLen: number = 0;
        let nowLenBase: string = '';
        let nextLenBase: string = '';
        for (const char of str) {
            if (nowChar.length == 0) {
                nowChar = char;
            } else {
                nowLenBase = NyaCalc.baseChar(nowLen, 10, base);
                if (char == nowChar) {
                    nextLen = nowLen + 1;
                    nextLenBase = NyaCalc.baseChar(nextLen, 10, base);
                    if (nextLenBase.length > 1) {
                        result.push(nowLenBase, nowChar);
                        nowLen = 0 + offset;
                        nowChar = char;
                    }
                    nowLen++;
                } else {
                    result.push(nowLenBase, nowChar);
                    nowLen = 1 + offset;
                    nowChar = char;
                }
            }
        }
        nowLenBase = NyaCalc.baseChar(nowLen, 10, base);
        return result.join('') + nowLenBase + nowChar;
    }

    /**
     * 解壓縮字串
     * @param {string} str 壓縮後的字串
     * @param {number} base 按進位制壓縮位數（可以利用的字元數，選項：10,16,32,62,64,96）
     * @param {number} offset 計數偏移（預設-1，可以利用字元0）
     * @return {string} 原文
     */
    static decompression(str: string, base = 64, offset = -1): string {
        if (str.length == 0) return '';
        const result: string[] = [];
        let isLen: boolean = true;
        let len: number = 0;
        let char10:string='';
        for (const char of str) {
            if (isLen) {
                char10 = NyaCalc.baseChar(char,base,10);
                len = parseInt(char10) + offset * -1;
            } else {
                result.push(NyaStrings.repeat(char, len));
            }
            isLen = !isLen;
        }
        return result.join('');
    }

    // /**
    //  * 單元測試
    //  * @param {string} str 要測試的原文字串
    //  */
    // static test(str: string) {
    //     let code: string = str;
    //     console.log('原文', str);
    //     code = NyaCompressRLE.compression(code);
    //     console.log('RLE 壓縮後', code);
    //     code = NyaCompressRLE.decompression(code);
    //     console.log('RLE 解壓後', code);
    //     // 校對
    //     if (str == code) {
    //         console.log('校對成功');
    //     } else {
    //         console.error('校對失敗');
    //     }
    // }
}
