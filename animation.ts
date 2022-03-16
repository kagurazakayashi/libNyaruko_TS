// 動畫相關
import NyaLib from "./main";

export default class NyaAnimation extends NyaLib {
    /**
     * 逐漸顯示
     * @param {HTMLElement} obj      要操作的 DOM 物件
     * @param {number}      speed    動畫速度(毫秒)
     * @param {function}    callback 動畫完成之後的回撥
     */
    static fadeIn(obj: HTMLElement, speed = 1, callback?: () => void): void {
        obj.style.transition = '';
        obj.style.opacity = '0';
        obj.style.transition = 'opacity ' + speed.toString() + 'ms';
        this.animateCallback(obj, true, callback);
        obj.style.opacity = '1';
    }

    /**
     * 逐漸隱藏
     * @param {HTMLElement} obj      要操作的 DOM 物件
     * @param {number}      speed    動畫速度(毫秒)
     * @param {function}    callback 動畫完成之後的回撥
     */
    static fadeOut(obj: HTMLElement, speed: number = 1000, callback?: (obj?: HTMLElement) => void): void {
        obj.style.transition = '';
        obj.style.opacity = '1';
        obj.style.transition = 'opacity ' + speed.toString() + 'ms';
        this.animateCallback(obj, true, callback);
        obj.style.opacity = '0';
    }

    /**
     * 執行自定義動畫
     * 不建議連續執行。連續執行不會產生動畫序列。
     * @param {HTMLElement} obj 要操作的 DOM 物件
     * @param {object} params （字典）要執行哪些動畫
     * key 和 val 和 CSS 對應。（示例見 README.md ）
     * @param {number} speed 需要用多長時間來播放這個動畫（毫秒）
     * @param {Function} callback 動畫完成後的回撥
     * @param {boolean} rmTransition 動畫完成後移除該物件 CSS 的 transition 樣式
     */
    static animate(obj: HTMLElement, params: object, speed: number = 1000, callback?: (obj?: HTMLElement) => void, rmTransition: boolean = true): void {
        const paramsObj: any = params;
        obj.style.transition = 'all ' + speed.toString() + 'ms';
        this.animateCallback(obj, rmTransition, callback);
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const val: string = paramsObj[key] as string;
                eval(`obj.style.${key}='${val}';`);
            }
        }
    }

    /**
     * 執行自定義動畫序列
     * @param {Array} list 動畫序列二維陣列
     * 每個設定物件包括 [網頁元素,動畫字典,動畫時長] （示例見 README.md ）
     * @param {Function} callback 動畫完成之後的回撥
     * @param {Function} step 每個步驟動畫完成之後的回撥
     */
    static animateList(list: (number | HTMLElement | {})[][], callback?: () => void, step?: (obj?: HTMLElement, stepi?: number, total?: number) => void): void {
        const stepi = 0;
        const total = list.length;
        const listFunc = (aniConf: object[]) => {
            const obj: HTMLElement = aniConf[0] as HTMLElement;
            const params: object = aniConf[1];
            const speed: number = aniConf[2] as unknown as number;
            const stepCallback = () => {
                list.shift();
                if (step) {
                    step(obj, stepi, total);
                }
                if (list.length > 0) {
                    listFunc(list[0] as object[]);
                } else if (callback) {
                    callback();
                }
            };
            const rmTransition: boolean = (list.length == 1);
            this.animate(obj, params, speed, stepCallback, rmTransition);
        };
        listFunc(list[0] as object[]);
    }

    /**
     * 通用動畫回撥，無需外部呼叫
     * @param {HTMLElement} obj 要操作的 DOM 物件
     * @param {boolean} rmTransition 動畫完成後移除該物件 CSS 的 transition 樣式
     * @param {callback} callback 動畫完成之後的回撥
     */
    static animateCallback(obj: HTMLElement, rmTransition: boolean = true, callback?: (obj?: HTMLElement) => void): void {
        const cssAniListen: string = 'Transitionend'; // Animationend
        const listenPfx = ['webkit', 'moz', 'MS', 'o', ''];
        for (let i = 0; i < listenPfx.length; i++) {
            const pfx = listenPfx[i];
            listenPfx[i] = (pfx.length == 0) ? cssAniListen.toLowerCase() : pfx + cssAniListen;
        }
        if (callback) {
            const animationend = () => {
                callback(obj);
                for (const listen of listenPfx) {
                    obj.removeEventListener(listen, animationend);
                }
                if (rmTransition) {
                    obj.style.transition = '';
                }
            };
            for (const listen of listenPfx) {
                obj.addEventListener(listen, animationend, false);
            }
        }
    }
}
