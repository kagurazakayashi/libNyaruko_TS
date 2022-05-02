// 事件
import NyaLib from './main';

export class NyaEventListener {
    domObj:HTMLElement | null = null;
    type: string | null = null;
    listener: ((event: Event) => void) | null = null;
}

export default class NyaEvent {
    static addEventListener(domObj:HTMLElement, type: string, listener: (event: Event) => void, options?: boolean | AddEventListenerOptions): NyaEventListener {
        const event: NyaEventListener = new NyaEventListener();
        event.domObj = domObj;
        event.type = type;
        event.listener = listener;
        console.log('addEventListener');
        domObj.addEventListener(event.type, event.listener, options);
        return event;
    }
    static removeEventListener(eventListener: NyaEventListener, options?: boolean | AddEventListenerOptions) {
        if (eventListener.type != null && eventListener.listener != null && eventListener.domObj != null) {
            eventListener.domObj.removeEventListener(eventListener.type, eventListener.listener, options);
            return true;
        } else {
            return false;
        }
    }
    static removeEventListeners(eventListeners: NyaEventListener[], options?: boolean | AddEventListenerOptions): boolean[] {
        let isOK: boolean[] = [];
        for (const eventListener of eventListeners) {
            isOK.push(this.removeEventListener(eventListener, options));
        }
        return isOK;
    }
}
