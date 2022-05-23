// 計算相關
import NyaLib from './main';

// 包含尺寸和位置的結構體
export interface NyaRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default class NyaCalc extends NyaLib {
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
        const scopeStr = (scopes: string | number[]): string => {
            return scopes as string;
        };
        const scopeNum = (scopes: string | number[]): number[] => {
            return scopes as number[];
        };
        const incStart: boolean = isNumArr ? true : scopeStr(scope).substring(0, 1) == '[';
        const incEnd: boolean = isNumArr ? true : scopeStr(scope).substring(scope.length - 1) == ']';
        const scopeArr: string[] = isNumArr
            ? []
            : scopeStr(scope)
                  .substring(1, scope.length - 1)
                  .split(',');
        if (isNumArr || scopeArr[0].length > 0) {
            const minVal: number = isNumArr ? scopeNum(scope)[0] : parseFloat(scopeArr[0]);
            if (incStart) {
                if (value < minVal) {
                    return isNewNum ? minVal : -1;
                }
            } else {
                if (value <= minVal) {
                    // this.log(`数值 ${value} 小于 标准值 ${scope} 中的 ${minVal}`, this.nyaLibName);
                    return isNewNum ? minVal + 1 : -1;
                }
            }
        }
        if (isNumArr || scopeArr[1].length > 0) {
            const maxVal: number = isNumArr ? scopeNum(scope)[1] : parseFloat(scopeArr[1]);
            if (incEnd) {
                if (value > maxVal) {
                    // this.log(`数值 ${value} 大于等于 标准值 ${scope} 中的 ${maxVal}`, this.nyaLibName);
                    return isNewNum ? maxVal : 1;
                }
            } else {
                if (value >= maxVal) {
                    // this.log(`数值 ${value} 大于 标准值 ${scope} 中的 ${maxVal}`, this.nyaLibName);
                    return isNewNum ? maxVal - 1 : 1;
                }
            }
        }
        // this.log(`数值 ${value} 在此区间 ${scope}`, this.nyaLibName);
        return isNewNum ? value : 0;
    }

    /**
     * 計算元素铺满（填充）某个容器所需的位置和尺寸（內容鋪滿螢幕，多出的邊被裁去）
     * @param {number} width 元素的寬度
     * @param {number} height 元素的高度
     * @param {number} boxWidth 容器的寬度
     * @param {number} boxHeight 容器的高度
     * @return {NyaRect} 需要將元素設定為此位置和尺寸
     */
    static sizeFill(width: number, height: number, boxWidth = document.body.clientWidth, boxHeight = document.body.clientHeight): NyaRect {
        let x = 0;
        let y = 0;
        let w = 0;
        let h = 0;
        const wh = width / height;
        const cw = boxWidth - width;
        const ch = boxHeight - height;
        const cwh = cw / ch;
        if (cw > ch) {
            w = boxWidth;
            h = w / wh;
            y = (boxHeight - h) / 2;
        } else {
            h = boxHeight;
            w = h * wh;
            x = (boxWidth - w) / 2;
        }
        if (wh > 1) {
            if (cwh > 1.01 && cwh < wh) {
                if (cw < ch) {
                    w = boxWidth;
                    h = w / wh;
                    y = (boxHeight - h) / 2;
                    x = 0;
                } else {
                    h = boxHeight;
                    w = h * wh;
                    x = (boxWidth - w) / 2;
                    y = 0;
                }
            }
        } else {
            if (cwh > wh && cwh < 1) {
                if (cw < ch) {
                    w = boxWidth;
                    h = w / wh;
                    y = (boxHeight - h) / 2;
                    x = 0;
                } else {
                    h = boxHeight;
                    w = h * wh;
                    x = (boxWidth - w) / 2;
                    y = 0;
                }
            }
        }
        return {
            x: x,
            y: y,
            width: w,
            height: h,
        };
    }

    /**
     * 將 NyaRect 的位置寬高應用到某個物件
     * @param {HTMLElement} parentDOM 指定元素
     * @param {NyaRect} rect 位置寬高
     */
    static setRect(parentDOM: HTMLElement, rect: NyaRect) {
        const px: string = 'px';
        parentDOM.style.left = rect.x + px;
        parentDOM.style.top = rect.y + px;
        parentDOM.style.width = rect.width + px;
        parentDOM.style.height = rect.height + px;
    }

    /**
     * 將資料大小位元組數轉換為具有最接近單位的字串
     * @param {number} bytes 位元組數
     * @param {number} ary 每單位進位數量 ( 1000 或 1024 )
     * @param {number} fixed 小數位數
     * @param {string} units 單位單字母陣列字串，會在每個字母后自動加 'B' 。
     * 最小單位強制是 'B' ，因此無需將 'B' 加入列表。
     * @return {string} 帶有單位的檔案大小描述（如 '56 B' , '12 KB' , '1 GB' ）
     */
    static dataSizeStr(bytes: number, ary: number = 1024, fixed: number = 2, units: string = 'KMGTPEZY'): string {
        if (bytes === 0) {
            return '0 B';
        }
        const unitChars: string[] = units.split('');
        unitChars.unshift('');
        const logByte: number = Math.log(bytes);
        const logAry: number = Math.log(ary);
        const level: number = logByte / logAry;
        const i = Math.floor(level);
        const aryPi: number = Math.pow(ary, i);
        let size: number = bytes / aryPi;
        let sizeStr: string = size.toFixed(fixed);
        size = parseFloat(sizeStr);
        sizeStr = size.toString();
        const unitStr: string = unitChars[i];
        return sizeStr + ' ' + unitStr + 'B';
    }
}
