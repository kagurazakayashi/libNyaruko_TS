// 字串相關處理，提取、生成等
import NyaLib from "./main";
import NyaCalc from "./nyacalc";

export default class NyaStrings extends NyaLib {
  /**
   * 獲取兩字串之間的內容
   * @param {string} strSource 原始字串
   * @param {string} strStart 起始字串
   * @param {string} strEnd 結束字串
   * @return {string} 兩字串之間的內容
   */
  static stringNode(
    strSource: string,
    strStart: string,
    strEnd: string
  ): string {
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
  static substrPair(str: string, startChar = "{", endChar = "}"): string {
    if (str.length < 3) {
      return "";
    }
    let lc = -1;
    let start = -1;
    let sLen = 0;
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
        return str.substring(start + 1, sLen - 1);
      }
    }
    return "";
  }

  /**
   * 取指定字符串之前的内容
   * @param {string} str 被處理的字串
   * @param {string} search 要查詢的字串
   */
  static substrBefore(str: string, search: string): string {
    const index: number = str.indexOf(search);
    if (index < 0) {
      return str;
    }
    return str.substring(0, index);
  }

  /**
   * 取指定字符串之後的内容
   * @param {string} str 被處理的字串
   * @param {string} search 要查詢的字串
   */
  static substrAfter(str: string, search: string): string {
    const index: number = str.indexOf(search);
    if (index < 0) {
      return str;
    }
    return str.substring(index + 1);
  }

  /**
   * 替換字串中的所有指定字串
   * @param {string} str 要處理的字串
   * @param {string} searchValue 要查詢的字串
   * @param {string} replaceValue 要替換成的字串
   * @return {string} 修改後的字串
   */
  static replaceAll(
    str: string,
    searchValue: string,
    replaceValue = ""
  ): string {
    if (str.length == 0) {
      return "";
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
  static addZero2String(
    str: number | string,
    minLength = 2,
    addChar = "0",
    addToEnd = false
  ): string {
    const nowStr: string = typeof str == "number" ? str.toString() : str;
    let zeros = "";
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

  /**
   * 將布林值或可以視為布林值的內容轉換為文字內容
   * @param {boolean|number|string} sw 可以为以下值：
   * - 布林值( true / false )
   * - 數字( <=0 / >0 )
   * - 字串(不区分大小写的'true'/'false'/'yes'/'no'/'0')
   * @param {string} 當判定為「是」時要返回的字串
   * @param {string} 當判定為「否」時要返回的字串
   * @return {string} 「是」或「否」所代表的字串
   */
  static boolean2String(
    sw: boolean | number | string,
    showStrYES = "YES",
    showStrNO = "NO"
  ): string {
    const type: string = typeof sw;
    if (type == "boolean") {
      return sw ? showStrYES : showStrNO;
    } else if (type == "number") {
      return (sw as number) > 0 ? showStrYES : showStrNO;
    } else {
      const sws: string = sw as string;
      if (
        sws.length == 0 ||
        sws.toLowerCase() == "false" ||
        sws == "0" ||
        sws.toLowerCase() == "no"
      ) {
        return showStrNO;
      }
      return showStrYES;
    }
  }

  /**
   * 將字串分割為整數陣列
   * @param {string} str 要分割轉換的字串
   * @param {string} separator 分隔符
   * @param {number} max 最多分隔多少次
   * @return {number[]} 轉換後的整數陣列
   */
  static string2intArray(
    str: string,
    separator = ",",
    max: number = Number.MAX_VALUE
  ): number[] {
    const numArr: number[] = [];
    const strArr: string[] = str.split(separator);
    let i = 0;
    for (const tstr of strArr) {
      const n: number = parseInt(tstr);
      numArr.push(n);
      i++;
      if (i >= max) {
        break;
      }
    }
    return numArr;
  }

  /**
   * 將數字陣列併為一個字串
   * @param {number[]} nums 數字陣列
   * @param {string} separator 分隔符
   * @param {number} addZeroMinLength 不足多少位時補 0 。 0 為禁用
   * @param {number} max 最多分隔多少次
   * @return {string} 轉換後的字串
   */
  static numberArray2string(
    nums: number[],
    separator = ",",
    addZeroMinLength = 0,
    max: number = Number.MAX_VALUE
  ): string {
    const strArr: string[] = [];
    let i = 0;
    for (const num of nums) {
      let str: string = num.toString();
      if (addZeroMinLength > 0) {
        str = this.addZero2String(str, addZeroMinLength);
      }
      strArr.push(str);
      i++;
      if (i >= max) {
        break;
      }
    }
    return strArr.join(separator);
  }

  /**
   * 根據 Ascii 碼獲取字元集合
   * @param {number} asciiStart 起始 Ascii 碼
   * @param {number} asciiEnd 結束 Ascii 碼
   * @return {string} 這個 Ascii 碼區間每個 Ascii 碼對應的字元
   */
  static asciiSection2string(asciiStart: number, asciiEnd: number): string {
    const chars: string[] = new Array(asciiEnd - asciiStart);
    for (let i = asciiStart; i <= asciiEnd; i++) {
      chars[i - asciiStart] = String.fromCharCode(i);
    }
    return chars.join("");
  }

  /**
   * 獲取所有的數字
   * @return {string} 所有的數字
   */
  static charsNumbers(): string {
    return NyaStrings.asciiSection2string(48, 57);
  }

  /**
   * 獲取所有的大寫字母
   * @return {string} 所有的大寫字母
   */
  static charsCapital(): string {
    return NyaStrings.asciiSection2string(65, 90);
  }

  /**
   * 獲取所有的小寫字母
   * @return {string} 所有的小寫字母
   */
  static charsLowercase(): string {
    return NyaStrings.asciiSection2string(97, 122);
  }

  /**
   * 獲取所有的英文字母
   * @return {string} 所有的英文字母
   */
  static charsLetter(): string {
    return NyaStrings.charsCapital() + NyaStrings.charsLowercase();
  }

  /**
   * 根據進位制獲取字符集
   * @param {number} len 進位制
   * @return {string} 字符集
   */
  static chars(len: number): string {
    const num = NyaStrings.charsNumbers();
    let n = num;
    if (len == 10) {
      return n;
    }
    n += "ABCDEF";
    if (len == 16) {
      return n;
    }
    n += "GHIJKLMNOPQRSTUV";
    if (len == 32) {
      return n;
    }
    n = num + NyaStrings.charsLetter();
    if (len == 62) {
      return n;
    }
    n += "_-";
    if (len == 64) {
      return n;
    }
    n += " `~!@#$%^&*()=+[{]};:'\"\\|,<.>/?\t";
    if (len == 96) {
      return n;
    }
    return num;
  }

  /**
   * 重複輸出某個字元/字串
   * @param {string} str 要重複輸出的字元/字串
   * @param {number} times 重複多少次
   * @return {string} 重複字串
   */
  static repeat(str: string, times: number): string {
    // return str.repeat(times);
    return times > 1 ? (str += NyaStrings.repeat(str, --times)) : str;
  }

  /**
   * 建立隨機字串
   * @param {number} len 要生成的字串長度
   * @param {string} dic 字元庫（預設為數字+大寫字母）
   * @return {string} 隨機字串
   */
  static random(len = 32, dic = ""): string {
    if (dic.length == 0) {
      dic = NyaStrings.charsNumbers() + NyaStrings.charsCapital();
    }
    const dicLen: number = dic.length;
    const strArr: string[] = new Array<string>(len);
    for (let i = 0; i < len; i++) {
      const randomNum: number = NyaCalc.random(0, dicLen);
      strArr[i] = dic[randomNum];
    }
    return strArr.join();
  }

  /**
   * 判斷一個字串是否為數字
   * @param {string} str 字串
   * @return {boolean} 是否為數字
   */
  static isNum(str: string): boolean {
    return str != null && str.length > 0 && !isNaN(Number(str));
  }

  /**
   * 將帶特殊標記字元的字串中的特殊標記字元轉換為 HTML 標籤
   * 例如輸入 `文字^上標_下標`
   * 會轉換為 `文字<sup>上標</sup><sub>下標</sub>`
   * @param {string} str 帶特殊標記字元的字串
   * @param {string[][]} tags 要轉換的標籤，例如 `[["^", "sup"], ["_", "sub"]]`
   * @param {string[]} tagbox 標籤的包圍符號，預設 `["<", ">"]`
   * @return {string} 轉換後的字串
   */
  static char2tag(
    str: string,
    tags: string[][] = [
      ["^", "sup"], // = "<sup>" + "</sup>"
      ["_", "sub"], // = "<sub>" + "</sub>"
    ],
    tagbox: string[] = ["<", ">"]
  ): string {
    let newStr = "";
    let prev = "";
    for (let j = 0; j < tags.length; j++) {
      const taginfo: string[] = tags[j];
      taginfo.push(tagbox[0] + "/" + taginfo[1] + tagbox[1]);
      taginfo[1] = tagbox[0] + taginfo[1] + tagbox[1];
      tags[j] = taginfo;
    }
    for (let j = 0; j < str.length; j++) {
      const char: string = str[j];
      if (char == tags[0][0] || char == tags[1][0]) {
        if (prev.length > 0) {
          if (prev == tags[0][1]) {
            newStr += tags[0][2];
          } else if (prev == tags[1][1]) {
            newStr += tags[1][2];
          }
          prev = "";
        }
        if (char == tags[0][0]) {
          prev = tags[0][1];
          newStr += tags[0][1];
        } else if (char == tags[1][0]) {
          prev = tags[1][1];
          newStr += tags[1][1];
        }
      } else {
        newStr += char;
      }
    }
    if (prev.length > 0) {
      if (prev == tags[0][1]) {
        newStr += tags[0][2];
      } else if (prev == tags[1][1]) {
        newStr += tags[1][2];
      }
    }
    return newStr;
  }
}
