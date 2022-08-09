// 壓縮: 霍夫曼編碼(哈夫曼编码/Huffman Coding)
// 如需壓縮字串，請使用 NyaCompress 進行完整壓縮

interface NyaCompressHuffmanData {
    key: string | null;
    val: number;
}

class NyaCompressHuffmanNode {
    left: NyaCompressHuffmanNode | null;
    right: NyaCompressHuffmanNode | null;
    data: NyaCompressHuffmanData | null;
    constructor(left: NyaCompressHuffmanNode | null, right: NyaCompressHuffmanNode | null, data: NyaCompressHuffmanData | null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

export default class NyaCompressHuffman {
    str: string = ''; // 需要編碼的字串
    keyCountMap: any = null; // 鍵和頻率對映表
    codeKeyMap: any = {}; // 編碼和鍵的對映表
    keyCodeMap: any = {}; // 鍵和編碼的對映表（需要作為結果匯出）
    nodeList: NyaCompressHuffmanNode[] = []; // 樹節點列表
    root: NyaCompressHuffmanNode | null = null; // 根節點
    code = ''; // 編碼後的01序列（需要作為結果匯出）

    constructor(str = '') {
        this.str = str;
    }

    /**
     * 壓縮字串
     * @param {string} code 要壓縮的字串，留空則採用初始化類時提供的字串
     * @return {string} 壓縮後的字串
     */
    encode(code = ''): string {
        if (code.length > 0) {
            this.str = code;
        }
        if (this.str.length == 0) {
            return '';
        }
        this.cal();
        this.sort();
        const root: NyaCompressHuffmanNode = this.makeTree() as NyaCompressHuffmanNode;
        this.traversal(root, '');
        const ret: any = this.keyCodeMap;
        let i = 0;
        let result = '';
        while (this.str[i]) {
            const nstr: string = this.str[i++];
            const rstr = ret[nstr] as string;
            result += rstr;
            // console.log('文字:', nstr, '二进制:', rstr);
        }
        this.code = result;
        return result;
    }

    /**
     * 解壓縮字串
     * @param {string} code 需要解壓縮的字串，留空則採用上次 encode 的結果
     * @return {string} 解壓縮後的字串
     */
    decode(code = '', keyCM: any = {}): string {
        let i = 0;
        let result = '';
        let data = '';
        if (code.length > 0) {
            this.code = code;
        }
        if (keyCM.length > 0) {
            this.keyCodeMap = keyCM;
        }
        if (this.code.length == 0 || this.keyCodeMap == 0) {
            return '';
        }
        let map = this.reverseMap(this.keyCodeMap);
        let ei = 0;
        const codeLen: number = this.code.length;
        while (this.code) {
            result += this.code[i++];
            if (result in map) {
                const re = map[result];
                data += re;
                this.code = this.code.replace(new RegExp('^' + result), '');
                result = '';
                i = 0;
            } else {
                ei++;
                if (ei > codeLen) {
                    console.error('too large', codeLen);
                    break;
                }
            }
        }
        this.str = data;
        return data;
    }

    cal() {
        const str = this.str;
        const map: any = {};
        let i = 0;
        while (str[i]) {
            map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
            i++;
        }
        this.keyCountMap = map;
    }

    sort() {
        const map = this.keyCountMap;
        const result: NyaCompressHuffmanNode[] = [];
        for (const key in map) {
            if (map.hasOwnProperty(key)) {
                const obj = {
                    key: key,
                    val: map[key],
                };
                result.push(new NyaCompressHuffmanNode(null, null, obj));
            }
        }
        result.sort(this.compareFn);
        this.nodeList = result;
    }

    compareFn(a: NyaCompressHuffmanNode, b: NyaCompressHuffmanNode): number {
        const aa = a.data ? a.data.val : 0;
        const bb = b.data ? b.data.val : 0;
        return aa - bb;
    }

    makeTree(): NyaCompressHuffmanNode | null {
        let i = 0;
        let parentNode: NyaCompressHuffmanNode;
        const table = this.nodeList;
        while (table.length > 1) {
            const ii0 = table[i]['data'] ? table[i]['data']!.val : 0;
            const ii1 = table[i + 1]['data'] ? table[i + 1]['data']!.val : 0;
            parentNode = new NyaCompressHuffmanNode(table[i], table[i + 1], { key: null, val: ii0 + ii1 });
            table.splice(i, 2);
            table.unshift(parentNode);
            table.sort(this.compareFn);
        }
        this.root = table[0] || new NyaCompressHuffmanNode(null, null, null);
        return this.root;
    }

    traversal(tree: NyaCompressHuffmanNode, code: string) {
        if (tree.left !== null) {
            this.traversal.call(this, tree.left, code + '0');
        } else if (tree.data && tree.data.key) {
            this.keyCodeMap[tree.data.key] = code;
        }

        if (tree.right !== null) {
            this.traversal.call(this, tree.right, code + '1');
        } else if (tree.data && tree.data.key) {
            this.keyCodeMap[tree.data.key] = code;
        }
    }

    reverseMap(keyCM: any) {
        let ret = this.keyCodeMap;
        if (!this.isEmptyObject(keyCM)) {
            ret = keyCM;
        }
        let result: any = {};
        for (let key in ret) {
            if (ret.hasOwnProperty(key)) {
                const rkey = ret[key];
                result[rkey] = key;
            }
        }
        this.codeKeyMap = result;
        return result;
    }

    isEmptyObject(obj: any) {
        for (const _key in obj) {
            return false;
        }
        return true;
    }
}
