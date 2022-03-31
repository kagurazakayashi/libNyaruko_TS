// 除錯工具
import NyaLib from "./main";

export default class NyaDebug extends NyaLib {
    /**
     * 將常用環境資訊儲存到網頁的 meta 中
     */
    static infoToMeta() {
        const head: HTMLHeadElement = document.head;
        const metaAdd = (name: string, content: string) => {
            if (content.length == 0) {
                return;
            }
            const meta: HTMLMetaElement = document.createElement('meta') as HTMLMetaElement;
            meta.name = name;
            meta.content = content;
            head.appendChild(meta);
        }
        metaAdd('_cookie', navigator.cookieEnabled.toString());
        metaAdd('_track', navigator.doNotTrack ?? '');
        metaAdd('_hc', navigator.hardwareConcurrency.toString());
        metaAdd('_touch', navigator.maxTouchPoints.toString());
        metaAdd('_online', navigator.onLine.toString());
        metaAdd('_driver', navigator.webdriver.toString());
        metaAdd('_lang', navigator.language);
        metaAdd('_langs', navigator.languages.join(', '));
        metaAdd('_vendor', navigator.vendor);
        metaAdd('_ua', navigator.userAgent);
    }
}
