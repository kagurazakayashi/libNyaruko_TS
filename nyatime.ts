import NyaStrings from './nyastrings';

// 时间转换
export default class NyaTime {
    /**
     * 將時間戳轉換為時間字串（ISO 8601）
     * @param {number|string} timestamp 時間戳（秒級或毫秒級）
     * @param {number} unitLevel 時間單位等級（預設為6年月日時分秒，小於6則從後向前移除）
     * @return 時間字串（yyyy-mm-dd hr:mi:se）
     */
    static timeStamp2timeString(timestamp?: number | string | null, unitLevel: number = 6) {
        const char: string[] = ['0', '-', ':'];
        if (!timestamp) {
            return '';
        }
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
     * 將時間戳轉換為時間字串（自定義格式）
     * @param {number|string} timestamp 時間戳（秒級或毫秒級）
     * @param {string} format 格式模板，預設為 'YYYY-MM-dd HH:mm:ss'
     * @return 時間字串（yyyy-mm-dd hr:mi:se）
     */
    static timeStamp2timeStringFormat(timeStamp?: number | string | null, format: string = 'YYYY-MM-dd HH:mm:ss'): string {
        if (!timeStamp) {
            return '';
        }
        const strDate: Date = typeof timeStamp == 'string' ? new Date(timeStamp.replace(/-/g, '/')) : new Date(timeStamp);
        if (strDate instanceof Date) {
            const dict: any = {
                YYYY: strDate.getFullYear(),
                M: strDate.getMonth() + 1,
                d: strDate.getDate(),
                H: strDate.getHours(),
                m: strDate.getMinutes(),
                s: strDate.getSeconds(),
                MM: ('' + (strDate.getMonth() + 101)).substring(1),
                dd: ('' + (strDate.getDate() + 100)).substring(1),
                HH: ('' + (strDate.getHours() + 100)).substring(1),
                mm: ('' + (strDate.getMinutes() + 100)).substring(1),
                ss: ('' + (strDate.getSeconds() + 100)).substring(1),
            };
            return format.replace(/(YYYY|MM?|dd?|HH?|ss?|mm?)/g, function () {
                return dict[arguments[0]];
            });
        }
        return '';
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
