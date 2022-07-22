// 壓縮: 行程長度壓縮(RLE)
// 記錄每個連續字元的出現次數來壓縮，適用於連續同一個字元出現次數較多的字串，否則會造成壓縮後反而更大。

import NyaStrings from './nyastrings';

export default class NyaCompressRLE {
    /**
     * 壓縮字串（重複字元長度最大為36，移位-1以利用0，可自動拆分)
     * @param {string} str 原文
     * @return {string} 壓縮後的字串
     */
    static compression(str: string, base = 64, shift = -1): string {
        const result: string[] = [];
        let nowChar: string = '';
        let nowLen: number = 1 + shift;
        for (const char of str) {
            if (nowChar.length == 0) {
                nowChar = char;
            } else {
                if (char == nowChar) {
                    nowLen++;
                } else {
                    result.push(nowLen.toString(), nowChar);
                    nowLen = 1 + shift;
                    nowChar = char;
                }
            }
        }
        return result.join('') + nowLen.toString() + nowChar;
    }

    /**
     * 解壓縮字串
     * @param {string} str 壓縮後的字串
     * @return {string} 原文
     */
    static decompression(str: string): string {
        const result: string[] = [];
        let isLen: boolean = true;
        let len: number = 0;
        for (const char of str) {
            if (isLen) {
                len = parseInt(char);
            } else {
                result.push(NyaStrings.repeat(char, len));
            }
            isLen = !isLen;
        }
        return result.join('');
    }

    /**
     * 壓縮字串(支援多位長度數字,但原文不能包含數字)
     * @param {string} str 原文
     * @return {string} 壓縮後的字串
     */
    static compressionEx(str: string): string {
        let pre: string = str[0];
        let res: string = '';
        let curNum: number = 1;
        for (let i = 1; i < str.length; i++) {
            const char = str[i];
            if (!isNaN(parseInt(char))) {
                console.error('sc', char);
                return '';
            }
            if (char === pre) {
                curNum++;
            } else {
                res += pre;
                res += curNum;
                pre = char;
                curNum = 1;
            }
        }
        res += pre;
        res += curNum;
        if (res.length > str.length) {
            console.warn('sc', str.length, res.length);
        } else {
            console.log('sc', str.length, res.length);
        }
        return res;
    }

    /**
     * 解壓縮字串(支援多位長度數字,但原文不能包含數字)
     * @param {string} str 壓縮後的字串
     * @return {string} 原文
     */
    static decompressionEx(str: string): string {
        let result: string = '';
        const strArr: string[] = (str + 'X').split('');
        let nowchar = '';
        let nownum = '';
        for (let i = 0; i < strArr.length; i++) {
            const char: string = strArr[i];
            const isNumber = !isNaN(parseInt(char));
            if (isNumber) {
                nownum += char;
            } else {
                if (nownum.length > 0) {
                    for (let j = 0; j < parseInt(nownum); j++) {
                        result += nowchar;
                    }
                    nownum = '';
                }
                nowchar = char;
            }
        }
        return result;
    }

    /**
     * 單元測試
     * @param {string} str 要測試的原文字串
     */
    /*
    static test(str: string) {
        let code: string = str;
        console.log('原文', str);
        code = NyaCompressRLE.compression(code);
        console.log('RLE 壓縮後', code);
        code = NyaCompressRLE.decompression(code);
        console.log('RLE 解壓後', code);
        // 校對
        if (str == code) {
            console.log('校對成功');
        } else {
            console.error('校對失敗');
        }
    }
    */
}
