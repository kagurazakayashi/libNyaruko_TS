/**
 * 雅詩TS工具類
 * 在 map 不可用的環境下代替 map 的工作
 */
 export default class NyaMap {
    items: any = {};
    /**
     * 設定字典值
     * @param {string} key 鍵
     * @param {any} value 值
     */
    set(key: string, value: any): void {
        this.items[key] = value;
    }
    /**
     * 取得字典值
     * @param {string} key 鍵
     * @return {any} 值
     */
    get(key: string): any {
        return this.has(key) ? this.items[key] : undefined;
    }
    /**
     * 是否擁有某個鍵值
     * @param {string} key 鍵
     * @return {boolean} 是否擁有
     */
    has(key: string): boolean {
        return key in this.items;
    }
    /**
     * 移除鍵值
     * @param {string} key 鍵
     * @return {boolean} 是否移除成功（還是本來就沒有）
     */
    delete(key: string) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    /**
     * 獲得所有的值
     * @return {any[]} 所有值的陣列
     */
    values(): any[] {
        const values: any[] = [];
        for (const k in this.items) {
            if (this.hasOwnProperty(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }
    /**
     * 清空字典
     */
    clear(): void {
        this.items = {};
    }
    /**
     * 查詢有多少條目
     * @return {number} 條目數量
     */
    size(): number {
        return Object.keys(this.items).length;
    }
    /**
     * 獲取所有鍵值
     * @return {any} 所有鍵值
     */
    getItems(): any {
        return this.items;
    }
}
