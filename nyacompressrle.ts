// 壓縮: 行程長度壓縮(RLE)
// 記錄每個連續字元的出現次數來壓縮，適用於連續同一個字元出現次數較多的字串，否則會造成壓縮後反而更大。
// DEMO: abbcccdddd55555666666 -> 1a2b3c4d5566

import NyaStrings from './nyastrings';

export default class NyaCompressRLE {
    /**
     * 壓縮字串
     * @param {string} str 原文
     * @return {string} 壓縮後的字串
     */
    static compression(str: string): string {
        const result: string[] = [];
        let nowChar: string = '';
        let nowLen: number = 1;
        for (const char of str) {
            if (nowChar.length == 0) {
                nowChar = char;
            } else {
                if (char == nowChar) {
                    nowLen++;
                } else {
                    result.push(nowLen.toString(), nowChar);
                    nowLen = 1;
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
