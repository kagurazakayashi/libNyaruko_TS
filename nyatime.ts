// 時間轉換
import NyaStrings from "./nyastrings";

export default class NyaTime {
  /**
   * 將時間戳轉換為時間字串（yyyy-mm-dd hr:mi:se）
   * @param {number|string} timestamp 時間戳（秒級或毫秒級）
   * @param {number} unitLevel 時間單位等級（預設為6年月日時分秒，小於6則從後向前移除）
   * @return 時間字串（yyyy-mm-dd hr:mi:se）
   */
  static timeStamp2timeString(
    timestamp?: number | string | null,
    unitLevel = 6
  ) {
    const char: string[] = ["0", "-", ":"];
    if (!timestamp) {
      return "";
    }
    let ts: number =
      typeof timestamp == "number" ? timestamp : parseInt(timestamp);
    const tsStr: string =
      typeof timestamp == "string" ? timestamp : timestamp.toString();
    if (tsStr.length < 10) {
      ts *= 1000;
    }
    const date = new Date(ts * 1000);
    const yyyy =
      unitLevel-- <= 0 ? "" : NyaStrings.addZero2String(date.getFullYear(), 4);
    const mm =
      unitLevel-- <= 0
        ? ""
        : char[1] + NyaStrings.addZero2String(date.getMonth() + 1);
    const dd =
      unitLevel-- <= 0
        ? ""
        : char[1] + NyaStrings.addZero2String(date.getDate());
    const hr =
      unitLevel-- <= 0 ? "" : " " + NyaStrings.addZero2String(date.getHours());
    const mi =
      unitLevel-- <= 0
        ? ""
        : char[2] + NyaStrings.addZero2String(date.getMinutes());
    const se =
      unitLevel <= 0
        ? ""
        : char[2] + NyaStrings.addZero2String(date.getSeconds());
    return yyyy + mm + dd + hr + mi + se;
  }

  /**
   * 將時間戳轉換為時間字串（自定義格式）
   * @param {number|string} timestamp 時間戳（秒級或毫秒級）
   * @param {string} format 格式模板，預設為 'YYYY-MM-dd HH:mm:ss'
   * @return 時間字串（yyyy-mm-dd hr:mi:se）
   */
  static timeStamp2timeStringFormat(
    timeStamp?: number | string | null,
    format = "YYYY-MM-dd HH:mm:ss"
  ): string {
    if (!timeStamp) {
      return "";
    }
    const strDate: Date =
      typeof timeStamp == "string"
        ? new Date(timeStamp.replace(/-/g, "/"))
        : new Date(timeStamp);
    if (strDate instanceof Date) {
      const dict: any = {
        YYYY: strDate.getFullYear(),
        M: strDate.getMonth() + 1,
        d: strDate.getDate(),
        H: strDate.getHours(),
        m: strDate.getMinutes(),
        s: strDate.getSeconds(),
        MM: ("" + (strDate.getMonth() + 101)).substring(1),
        dd: ("" + (strDate.getDate() + 100)).substring(1),
        HH: ("" + (strDate.getHours() + 100)).substring(1),
        mm: ("" + (strDate.getMinutes() + 100)).substring(1),
        ss: ("" + (strDate.getSeconds() + 100)).substring(1),
      };
      return format.replace(
        /(YYYY|MM?|dd?|HH?|ss?|mm?)/g,
        (substring: string, ...args: any[]) => {
          return dict[args[0]];
        }
      );
    }
    return "";
  }

  /**
   * 獲取當前日期時間的數字數值
   * @param level 要新增的資料級別(1-7)，對應年月日時分秒毫秒
   * 例如： 3[年月日] 6[年月日時分秒]
   * @param date 要轉換的日期物件
   * @return {number[]} 日期時間數值陣列
   */
  static nowDateTime(level = 6, date: Date = new Date()): number[] {
    const dtNum: number[] = [];
    for (let i = 0; i < level; i++) {
      switch (i) {
        case 0:
          dtNum.push(date.getFullYear());
          break;
        case 1:
          dtNum.push(date.getMonth() + 1);
          break;
        case 2:
          dtNum.push(date.getDate());
          break;
        case 3:
          dtNum.push(date.getHours());
          break;
        case 4:
          dtNum.push(date.getMinutes());
          break;
        case 5:
          dtNum.push(date.getSeconds());
          break;
        case 6:
          dtNum.push(date.getMilliseconds());
          break;
        default:
          break;
      }
    }
    return dtNum;
  }

  /**
   * 時間字串（yyyy-mm-dd hr:mi:se）轉換為時間數字陣列
   * @param {string} date 轉換為時間數字陣列
   * @param {number} mode 0自動 1視為日期 2視為時間
   * @return {number[]} 時間數字陣列
   */
  static dateTimeString2numberArray(date: string, mode = 0): number[] {
    const dateTime: string[] = date.split(" ");
    const dates: number[] = [];
    const times: number[] = [];
    const spchar: string[] = ["-", ":"];
    for (const dtStr of dateTime) {
      let dtArr: string[] = [];
      if (mode == 1) {
        dtArr = dtStr.split(spchar[0]);
      } else if (mode == 2) {
        dtArr = dtStr.split(spchar[1]);
      } else {
        dtArr = dtStr.split(spchar[0]);
        if (dtArr.length <= 1) {
          dtArr = dtStr.split(spchar[1]);
          if (dtArr.length <= 1) {
            break;
          } else {
            mode = 2;
          }
        } else {
          mode = 1;
        }
      }
      for (const dt of dtArr) {
        const dtNum = parseInt(dt);
        if (mode == 1) {
          dates.push(dtNum);
        } else if (mode == 2) {
          times.push(dtNum);
        }
      }
    }
    return dates.concat(times);
  }

  /**
   * 粗略時間差描述文字
   * @param {number} time 時間戳（預設用秒級）
   * @param {number[]} timeArr 自定義時間分隔
   * @param {string[]} timeUnitStr 自定義時間分隔文字（s結尾複數需要帶上s，輸出時會自動增減）
   * @return {string} 描述文字
   */
  static timeDiffStr(
    time: number,
    timeArr: number[] = [525600, 262080, 43200, 1440, 60, 1, 0],
    timeUnitStr: string[] = [
      "年",
      "半年",
      "月",
      "日",
      "小时",
      "分钟",
      "刚刚",
      "前",
    ]
  ): string {
    let tTime = 0;
    let tStr = "";
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
    if (
      tTime == 1 &&
      tStr &&
      tStr.length > 0 &&
      tStr.slice(tStr.length - 1) == "s"
    ) {
      tStr = tStr.slice(0, tStr.length - 1);
    }
    if (tTime == 0) {
      return timeUnitStr[timeUnitStr.length - 2];
    }
    return tTime.toString() + " " + tStr + timeUnitStr[timeUnitStr.length - 1];
  }

  /**
   * 將秒數轉換為指定的時間單位
   * @param {number} second 秒數
   * @param {string} toUnit 轉換為時間單位
   * @param {boolean} returnNum T:返回數字型別 F:返回字串型別
   * @param {boolean} addUnit 如果返回字串型別是否新增單位字母，如：1h
   * @return {number|string} 指定單位的時間字串
   */
  static second2TimeStr(
    second: number,
    toUnit = "s",
    returnNum = false,
    addUnit = true
  ): string | number {
    let tTime: number = second;
    let tStr = "";
    switch (toUnit) {
      // case "s":
      // tTime = tTime;
      // tStr = "s";
      // break;
      case "m":
        tTime = tTime / 60;
        tStr = "m";
        break;
      case "h":
        tTime = tTime / 60 / 60;
        tStr = "h";
        break;
      case "d":
        tTime = tTime / 60 / 60 / 24;
        tStr = "d";
        break;
      case "w":
        tTime = tTime / 60 / 60 / 24 / 7;
        tStr = "w";
        break;
      case "M":
        tTime = tTime / 60 / 60 / 24 / 30;
        tStr = "M";
        break;
      case "y":
        tTime = tTime / 60 / 60 / 24 / 365;
        tStr = "y";
        break;
      default:
        // tTime = second;
        break;
    }
    if (returnNum) {
      return tTime;
    } else {
      return tTime.toString() + (addUnit ? tStr : "");
    }
  }

  /**
   * 將帶有單位的時間字串轉換為指定的時間單位
   * 支援 `s,m,h,d,w,M,y` 單位，其他單位皆視為秒
   * @param {strin|number} timeStr 带有单位的时间字符串
   * @param {string} toUnit 轉換為時間單位
   * @param {boolean} returnNum T:返回數字型別 F:返回字串型別
   * @param {boolean} addUnit 如果返回字串型別是否新增單位字母，如：1h
   * @return {number|string} 指定單位的時間字串
   */
  static unitTime2time(
    time: string | number,
    toUnit = "s",
    returnNum = false,
    addUnit = true
  ): number | string {
    let unit = "";
    let tTime = 0;
    const timeStr = time.toString();
    if (typeof time == "number") {
      unit = "s";
    } else {
      if (timeStr.length < 2) {
        return returnNum ? parseInt(timeStr) : timeStr;
      }
      unit = timeStr.slice(timeStr.length - 1);
      if (isNaN(parseInt(unit))) {
        tTime = parseInt(timeStr.slice(0, timeStr.length - 1));
      } else {
        tTime = parseInt(timeStr);
        unit = "s";
      }
    }
    switch (unit) {
      case "s":
        // time = time;
        break;
      case "m":
        tTime = tTime * 60;
        break;
      case "h":
        tTime = tTime * 60 * 60;
        break;
      case "d":
        tTime = tTime * 60 * 60 * 24;
        break;
      case "w":
        tTime = tTime * 60 * 60 * 24 * 7;
        break;
      case "M":
        tTime = tTime * 60 * 60 * 24 * 30;
        break;
      case "y":
        tTime = tTime * 60 * 60 * 24 * 365;
        break;
      default:
        tTime = parseInt(timeStr);
        break;
    }
    return NyaTime.second2TimeStr(tTime, toUnit, returnNum, addUnit);
  }
}
