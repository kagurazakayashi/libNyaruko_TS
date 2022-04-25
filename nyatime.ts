import NyaStrings from "./nyastrings";

// 时间转换
export default class NyaTime {
    /**
     * 將時間戳轉換為時間字串（ISO 8601）
     * @param {number|string} timestamp 时间戳（秒级或毫秒级）
     * @return 時間字串（yyyy-mm-dd hr:mi:se）
     */
    static timeStamp2timeString(timestamp: number | string, unitLevel: number = 6) {
        const char: string[] = ['0', '-', ':'];
        let ts: number = typeof timestamp == 'number' ? timestamp : parseInt(timestamp);
        const tsStr: string = typeof timestamp == 'string' ? timestamp : timestamp.toString();
        if (tsStr.length < 10) {
            ts *= 1000;
        }
        const date = new Date(ts * 1000);
        const yyyy = unitLevel-- <= 0 ? '' : NyaStrings.addZeroToString(date.getFullYear(), 4);
        const mm = unitLevel-- <= 0 ? '' : char[1] + NyaStrings.addZeroToString(date.getMonth() + 1);
        const dd = unitLevel-- <= 0 ? '' : char[1] + NyaStrings.addZeroToString(date.getDate());
        const hr = unitLevel-- <= 0 ? '' : ' ' + NyaStrings.addZeroToString(date.getHours());
        const mi = unitLevel-- <= 0 ? '' : char[2] + NyaStrings.addZeroToString(date.getMinutes());
        const se = unitLevel <= 0 ? '' : char[2] + NyaStrings.addZeroToString(date.getSeconds());
        return yyyy + mm + dd + hr + mi + se;
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
        if (tTime == 1 && tStr && tStr.length > 0 && tStr.slice(tStr.length - 1) == 's') {
            tStr = tStr.slice(0, tStr.length - 1);
        }
        if (tTime == 0) {
            return timeUnitStr[timeUnitStr.length - 2];
        }
        return tTime.toString() + ' ' + tStr + timeUnitStr[timeUnitStr.length - 1];
    }
}
