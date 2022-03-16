// 色彩轉換和調整
import NyaLib from "./main";

// 包含顏色數值的結構體
export interface NyaColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}

export default class NyaColors extends NyaLib {
    /**
     * 16進位制顏色轉換為 NyaColor
     * @param {string} hex 16進位制顏色，輸入包括'#'，支援 #RGB, #RRGGBB(推薦), #RRGGBBAA
     * @return {NyaColor} 10進位制顏色 RGB / RGBA （沒有 alpha 通道時 alpha 為 -1）
     */
     static colorHex2Int(hex: string): NyaColor {
        const rgbaInt: number[] = [0, 0, 0, -1];
        const cLen = hex.length;
        const s0x = '0x';
        if (cLen == 4 || cLen == 6) {
            for (let i = 0; i < 3; i++) {
                rgbaInt[i] = parseInt(s0x + hex.substr(i + 1, 1));
            }
            if (cLen == 6) {
                rgbaInt[3] = parseInt(s0x + hex.substr(4, 1));
            }
        } else if (cLen == 7 || cLen == 9) {
            let j: number = 1;
            for (let i = 0; i < 3; i++) {
                rgbaInt[i] = parseInt(s0x + hex.substr(j, 2));
                j += 2;
            }
            if (cLen == 9) {
                rgbaInt[3] = parseInt(s0x + hex.substr(j, 2));
            }
        }
        return {
            red: rgbaInt[0],
            green: rgbaInt[1],
            blue: rgbaInt[2],
            alpha: rgbaInt[3],
        }
    }

    /**
     * 調整顏色亮度
     * @param {string} hex 16進位制顏色，输入包括'#'，支援 #RGB, #RRGGBB(推薦), #RRGGBBAA
     * @param {number} light 亮度調節(正負數字)
     * @param {boolean} holdColor 保持RGB比例
     * @return {string} 修改後的16進位制顏色
     */
    static colorLight(hex: string, light: number = 20, holdColor = false): string {
        if (!hex) {
            return '';
        }
        const rgbaHex: string[] = ['', '', ''];
        const rgbaColor: NyaColor = this.colorHex2Int(hex);
        const rgbaInt: number[] = [rgbaColor.red, rgbaColor.green, rgbaColor.blue];
        if (rgbaColor.alpha >= 0) {
            rgbaInt.push(rgbaColor.alpha);
        }
        const rgbaIntLen: number = rgbaInt.length;
        if (holdColor) {
            forI:
            for (let i = 0; i < Math.abs(light); i++) {
                for (let j = 0; j < 3; j++) {
                    const nextC: number = rgbaInt[j] + 1;
                    if (nextC < 0 || nextC > 255) {
                        break forI;
                    }
                }
                for (let j = 0; j < 3; j++) {
                    rgbaInt[j]++;
                }
            }
        } else {
            for (let i = 0; i < 3; i++) {
                let cInt: number = rgbaInt[i] + light;
                if (cInt > 255) {
                    cInt = 255;
                } else if (cInt < 0) {
                    cInt = 0;
                }
                rgbaInt[i] = cInt;
            }
        }
        for (let i = 0; i < rgbaIntLen; i++) {
            if (rgbaInt[i] > 0) {
                rgbaHex[i] = rgbaInt[i].toString(16);
            }
            const chHex: string = rgbaHex[i];
            if (chHex.length == 1) {
                rgbaHex[i] = '0' + chHex;
            }
        }
        return '#' + rgbaHex.join('');
    }
}
