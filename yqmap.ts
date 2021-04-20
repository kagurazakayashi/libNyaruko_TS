/**
 * 在 map 不可用的环境下代替 map 的工作
 */
 export default class YQmap {
    items: any = {};
    /**
     * 设置字典值
     * @param {string} key 键
     * @param {any} value 值
     */
    set(key: string, value: any): void {
        this.items[key] = value;
    }
    /**
     * 取得字典值
     * @param {string} key 键
     * @return {any} 值
     */
    get(key: string): any {
        return this.has(key) ? this.items[key] : undefined;
    }
    /**
     * 是否拥有某个键值
     * @param {string} key 键
     * @return {boolean} 是否拥有
     */
    has(key: string): boolean {
        return key in this.items;
    }
    /**
     * 移除键值
     * @param {string} key 键
     * @return {boolean} 是否移除成功（还是本来就没有）
     */
    delete(key: string) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    /**
     * 获得所有的值
     * @return {any[]} 所有值得数组
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
     * 查询有多少条目
     * @return {number} 条目数量
     */
    size(): number {
        return Object.keys(this.items).length;
    }
    /**
     * 获取所有键值
     * @return {any} 所有键值
     */
    getItems(): any {
        return this.items;
    }
}
