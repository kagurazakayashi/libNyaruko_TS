// 壓縮: 字串壓縮
// 基於 霍夫曼編碼(哈夫曼编码/Huffman Coding) + 二進位制轉置壓縮 對字串進行壓縮，輸出結果為減小的字串

import NyaCalc from './nyacalc';
import NyaCompressHuffman from './nyacompresshuffman';
import NyaStrings from './nyastrings';

export default class NyaCompress {
    /**
     * 測試能夠一次處理的極限字串尺寸
     * 以便作為字串分組的參考
     * @param {string} str 要測試壓縮的字串
     * @param {number} start 起始分片數量
     * @param {number} step 步進分片數量
     * @param {number} end 結束分片數量（預設為輸入的字串長度）
     * @return {string} 如果成功壓縮，返回壓縮後的字串
     */
    static pressure(str: string, start = 1, step = 1, end = -1): string {
        if (end <= 0) {
            end = str.length;
        }
        for (let t = start; t < end; t += step) {
            console.log('L=', t);
            const codeUnits: string[] = NyaCompress.subStringUnit(str, t);
            for (const unit of codeUnits) {
                const ziped: string = NyaCompress.compression(unit);
                if (NyaCompress.decompression(ziped) != unit) {
                    console.error('NG');
                    return '';
                }
            }
        }
        console.log('L=F');
        const zipedf: string = NyaCompress.compression(str);
        if (NyaCompress.decompression(zipedf) != str) {
            console.error('NG');
            return '';
        }
        console.log('OK');
        return zipedf;
    }

    /**
     * 將字串拆成每幾個字元一組
     * @param {string} str 字串
     * @param {number} len 每幾個字元一組
     * @return {string[]} 拆分後的字串陣列
     */
     static subStringUnit(str: string, len: number): string[] {
        let aStr: string[] = [];
        let nStr: string = '';
        let i: number = 0;
        for (const char of str) {
            nStr += char;
            i++;
            if (i > len) {
                aStr.push(nStr);
                nStr = '';
                i = 0;
            }
        }
        aStr.push(nStr);
        return aStr;
    }

    /**
     * 壓縮字串
     * @param {string} str 原始字串
     * @return {string} 壓縮後的字串
     */
    static compression(str: string): string {
        // Huffman 壓縮
        const ch: NyaCompressHuffman = new NyaCompressHuffman();
        ch.encode(str);
        // binCode 壓縮
        const binCode: string = NyaCompress.binaryEncode(ch.code);
        // keyMap 壓縮
        const keyMap: string = NyaCompress.keyCodeMapEncode(ch.keyCodeMap);
        // 合并数据
        return binCode + '@@' + keyMap;
    }

    /**
     * 解壓縮字串
     * @param {string} code 壓縮後的字串
     * @return {string} 原始字串
     */
    static decompression(code: string): string {
        const ch: NyaCompressHuffman = new NyaCompressHuffman();
        // 拆分数据
        const datas: string[] = code.split('@@');
        // binCode 解壓
        ch.code = NyaCompress.binaryDecode(datas[0]);
        // keyMap 解壓
        if (datas.length > 2) {
            datas[1] += '@';
            for (let i = 2; i < datas.length; i++) {
                datas[1] += '@' + datas[i];
            }
        }
        // Huffman 解壓
        return ch.decode();
    }

    /**
     * 壓縮二進位制數字字串
     * @param {string} binStr 由 0 和 1 組成的字串
     * @param {string} charsOrLevel 可用於編碼的字元列表
     * @param {number} charsOrLevel 生成用於編碼的字元列表（可以利用的字元數，選項：10,16,32,62,64,96）
     * @return {string} 壓縮後的字串
     */
    static binaryEncode(binStr: string, charsOrLevel: string | number = 64): string {
        const charBinDic: string[][] = NyaCompress.baseDic(charsOrLevel);
        const maxBin: string = charBinDic[charBinDic.length - 1][1];
        const maxBinLen: number = maxBin.toString().length;
        const chunks: string[] = [];
        let endChunksLen: number = 0;
        for (let i = 0; i < binStr.length; i += maxBinLen) {
            const chunk: string = binStr.substring(i, i + maxBinLen);
            endChunksLen = chunk.length;
            chunks.push(chunk);
        }
        const chunksLen: number = chunks.length;
        const encStrArr: string[] = new Array(chunksLen);
        for (let i = 0; i < chunksLen; i++) {
            const chunk: string = chunks[i];
            for (const chrBin of charBinDic) {
                if (parseInt(chunk) == parseInt(chrBin[1])) {
                    encStrArr[i] = chrBin[0];
                    // console.log('binaryEncode', chrBin[0], '->', chunk);
                    break;
                }
            }
            // if (!encStrArr[i]) {
            //     console.error('NODIC', chunk);
            // }
        }
        return endChunksLen.toString() + encStrArr.join('');
    }

    /**
     * 建立字元對照值的字典
     * @param {string} charsOrLevel 可用於編碼的字元列表
     * @param {number} charsOrLevel 生成用於編碼的字元列表（可以利用的字元數，選項：10,16,32,62,64,96）
     * @param {number} valBase 對應值的進位制
     * @returns 字元對照值字典
     */
    static baseDic(charsOrLevel: string | number = 64, valBase = 2): string[][] {
        const chars = isNaN(Number(charsOrLevel)) ? (charsOrLevel as string) : NyaStrings.chars(charsOrLevel as number);
        const chLen = chars.length;
        const charBinDic: string[][] = new Array(chLen);
        for (let i = 0; i < chLen; i++) {
            charBinDic[i] = [chars[i], i.toString(valBase)];
            // console.log(char, charBin); 輸出生成的字典
        }
        return charBinDic;
    }

    /**
     * 解壓縮二進位制數字字串
     * @param {string} cStr 壓縮後的字串
     * @param {string} charsOrLevel 可用於編碼的字元列表
     * @param {number} charsOrLevel 生成用於編碼的字元列表（可以利用的字元數，選項：10,16,32,62,64,96）
     * @return {string} 由 0 和 1 組成的字串
     */
    static binaryDecode(cStr: string, charsOrLevel: string | number = 64): string {
        const charBinDic: string[][] = NyaCompress.baseDic(charsOrLevel);
        const maxBin: string = charBinDic[charBinDic.length - 1][1];
        const maxBinLen: number = maxBin.toString().length;
        const endChunksLen = parseInt(cStr.substring(0, 1));
        cStr = cStr.substring(1);
        const chunkLen: number = cStr.length;
        const binArr: string[] = new Array(chunkLen);
        for (let i = 0; i < chunkLen; i++) {
            const char: string = cStr[i];
            for (const charBin of charBinDic) {
                if (char == charBin[0]) {
                    let binStr: string = charBin[1];
                    const diffLen: number = i == chunkLen - 1 ? endChunksLen - binStr.length : maxBinLen - binStr.length;
                    for (let j = 0; j < diffLen; j++) {
                        binStr = '0' + binStr;
                    }
                    binArr[i] = binStr;
                    // console.log('binaryDecode', char, '->', binStr);
                    break;
                }
            }
            // if (!binArr[i]) {
            //     console.error('NODIC', chunk);
            // }
        }
        return binArr.join('');
    }

    /**
     * 壓縮字元對應二進位制字典
     * @param {string:string} dic 字元對應二進位制字典
     * @return {string} 字元對應二進位制字典壓縮後的字串
     */
    static keyCodeMapEncode(dic: any): string {
        let max36Len: number = 0;
        let maxLenLen: number = 0;
        const keys: string[] = [];
        const vals: string[] = [];
        const lens: string[] = [];
        let i = 0,
            j = 0;
        for (const key in dic) {
            const val2str: string = dic[key]; // 2 val
            const val10num: number = parseInt(val2str, 2); // 2 -> 10
            // const val36str: string = val10num.toString(36); // 10 -> 36
            const val36str: string = NyaCalc.baseChar(val10num, 10, 64); // 10 -> 64
            const val36len: number = val36str.length; // 36 len
            if (val36len > max36Len) {
                max36Len = val36len;
            }
            const len10num: number = val2str.length; // 2 len
            const len36str: string = len10num.toString(36); // 10 -> 36
            const len36len: number = len36str.length; // lenlen
            if (len36len > maxLenLen) {
                maxLenLen = len36len;
            }
            keys.push(key);
            vals.push(val36str);
            lens.push(len36str);
            i++;
        }
        for (i = 0; i < vals.length; i++) {
            let val: string = vals[i];
            let len: string = lens[i];
            let diff: number = max36Len - val.length;
            for (j = 0; j < diff; j++) {
                val += '.';
            }
            diff = maxLenLen - len.length;
            for (j = 0; j < diff; j++) {
                len = '0' + len;
            }
            vals[i] = len + val;
        }
        return maxLenLen.toString() + max36Len.toString() + keys.join('') + '@' + vals.join('');
    }

    /**
     * 解壓縮字元對應二進位制字典
     * @param {string} str 字元對應二進位制字典壓縮後的字串
     * @return {string:string} 字元對應二進位制字典
     */
    static keyCodeMapDecode(str: string): any {
        const maxLenLen: number = parseInt(str[0]);
        const len36str: string = str.substring(1, maxLenLen + 1);
        const max10len: number = parseInt(len36str, 36);
        const unitLen: number = max10len + 1;
        let unitArr: string[] = str.substring(maxLenLen + 1).split('@');
        if (unitArr.length > 2) {
            const end = unitArr.pop() as string;
            unitArr = [unitArr.join('@'), end];
        }
        const unitArrLi: number = unitArr.length - 1;
        let keys: string[] = [];
        let vals: string[] = [];
        for (let i = 0; i < unitArrLi; i++) {
            const datas: string = unitArr[i];
            keys.push(...datas.split(''));
        }
        const dataStr: string = unitArr[unitArrLi];
        for (let i = 0; i < dataStr.length; i += unitLen) {
            let val36str: string = dataStr.substring(i, i + unitLen);
            val36str = val36str.replace('.', '');
            const len10num: number = parseInt(val36str[0], 36);
            val36str = val36str.substring(1);
            // const val10num: number = parseInt(val36str, 36); // 36 -> 10
            const val10num: number = parseInt(NyaCalc.baseChar(val36str, 64, 10)); // 64 -> 10
            let val2str: string = val10num.toString(2); // 10 -> 2
            for (let i = val2str.length; i < len10num; i++) {
                val2str = '0' + val2str;
            }
            vals.push(val2str);
        }
        let dic: any = {};
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const val = vals[i];
            dic[k] = val;
        }
        return dic;
    }

    // /**
    //  * 單元測試
    //  * @param {string} str 要測試的原文字串
    //  */
    // static test(str: string): boolean {
    //     console.log('原文', str);
    //     // H 壓縮
    //     const ch: NCH = new NCH();
    //     ch.encode(str);
    //     console.log('H 壓縮後', ch.code, ch.keyCodeMap);
    //     // binCode 壓縮
    //     const binCode = NC.binaryEncode(ch.code);
    //     console.log('binCode 壓縮後', binCode);
    //     // keyMap 壓縮
    //     const keyMap = NC.keyCodeMapEncode(ch.keyCodeMap);
    //     console.log('keyMap 壓縮後', keyMap);
    //     const uh: NCH = new NCH();
    //     // binCode 解壓
    //     uh.code = NC.binaryDecode(binCode);
    //     console.log('binCode 解壓後', uh.code);
    //     if (uh.code != ch.code) {
    //         console.error('校對失敗: binCode');
    //         console.log('ch.code', ch.code);
    //         console.log('uh.code', uh.code);
    //         return false;
    //     }
    //     // keyMap 解壓
    //     uh.keyCodeMap = NC.keyCodeMapDecode(keyMap);
    //     console.log('keyMap 解壓後', uh.keyCodeMap);
    //     if (JSON.stringify(uh.keyCodeMap) != JSON.stringify(ch.keyCodeMap)) {
    //         console.error('校對失敗: keyMap');
    //         console.log('ch.keyCodeMap', JSON.stringify(ch.keyCodeMap));
    //         console.log('uh.keyCodeMap', JSON.stringify(uh.keyCodeMap));
    //         return false;
    //     }
    //     // H 解壓
    //     uh.decode();
    //     console.log('H 解壓後', uh.str);
    //     // 校對
    //     if (str == ch.str) {
    //         console.log('校對A:成功');
    //     } else {
    //         console.error('校對A:失敗');
    //         return false;
    //     }
    //     // 函式測試
    //     const compressed = NC.compression(str);
    //     if (NC.decompression(compressed) == str) {
    //         console.log('校對B:成功');
    //     } else {
    //         console.error('校對B:失敗', NC.decompression(compressed), str);
    //         return false;
    //     }
    //     return true;
    // }
}
