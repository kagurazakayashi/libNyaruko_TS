export default class YQmap {
    items: any = {};
    set(key: string, value: any) {
        this.items[key] = value;
    }
    get(key: string) {
        return this.has(key) ? this.items[key] : undefined;
    }
    has(key: string) {
        return key in this.items;
    }
    remove(key: string) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    values() {
        let values = [];
        for (let k in this.items) {
            if (this.hasOwnProperty(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    getItems() {
        return this.items;
    }
}