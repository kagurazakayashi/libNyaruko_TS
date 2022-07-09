// CSV 表格处理

export default class NyaCSV {
    /**
     * 解析 CSV 格式字串
     * @param {string} csv CSV 格式字串
     * @return {string[][]} 表格資料的二維陣列
     */
    static parse(csv: string): string[][] {
        const aa = csv.split('\n');
        let ee: string[][] = [];
        aa.forEach((e) => {
            const bb = e.split(',');
            let cc = [];
            for (let i = 0; i < bb.length; i++) {
                const be = bb[i];
                const dd = be.split('"');
                if (dd.length > 2) {
                    const zz = [];
                    let isnull = false;
                    if (dd[0].length != 0) {
                        for (let j = 0; j < dd.length; j++) {
                            const de = dd[j];
                            if (j < dd.length - 1) {
                                if (de == '' && !isnull) {
                                    isnull = true;
                                    zz.push(de);
                                    continue;
                                } else if (de != '') {
                                    zz.push(de);
                                }
                            }
                            if (isnull) {
                                isnull = false;
                            }
                        }
                        const zzstr = zz.join('"');
                        cc[i - 1] += ',' + zzstr;
                    } else {
                        for (let j = 0; j < dd.length; j++) {
                            const de = dd[j];
                            if (j > 0) {
                                if (de == '' && !isnull) {
                                    isnull = true;
                                    zz.push(de);
                                    continue;
                                } else if (de != '') {
                                    zz.push(de);
                                }
                            }
                            if (isnull) {
                                isnull = false;
                            }
                        }
                        const zzstr = zz.join('"');
                        cc.push(zzstr);
                    }
                } else if (dd.length == 2) {
                    if (dd[0].length != 0) {
                        cc[i - 1] += ',' + dd[0];
                    } else {
                        cc.push(dd[1]);
                    }
                } else {
                    cc.push(be);
                }
            }
            ee.push(cc);
        });
        return ee;
    }
}
