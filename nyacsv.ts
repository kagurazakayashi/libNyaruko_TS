// CSV 檔案解析
export default class NyaCSV {
  /**
   * CSV 檔案解析
   * @param {string} csv 要解析的 CSV 檔案內容
   * @returns {string[][]} 解析後的二維陣列
   */
  static parse(csv: string): string[][] {
    const rows: string[] = csv.split("\n");
    let returnData: string[][] = [];
    for (const e of rows) {
      const preColumn: string[] = e.split(",");
      let lineData: string[] = [];
      for (let i = 0; i < preColumn.length; i++) {
        const be: string = preColumn[i];
        const quotationMarks: string[] = be.split('"');
        if (quotationMarks.length > 2) {
          const okData: string[] = [];
          let isnull: boolean = false;
          if (quotationMarks[0].length != 0) {
            for (let j = 0; j < quotationMarks.length; j++) {
              const de: string = quotationMarks[j];
              if (j < quotationMarks.length - 1) {
                if (de == "" && !isnull) {
                  isnull = true;
                  okData.push(de);
                  continue;
                } else if (de != "") {
                  okData.push(de);
                }
              }
              if (isnull) {
                isnull = false;
              }
            }
            const okDataStr: string = okData.join('"');
            lineData[i - 1] += "," + okDataStr;
          } else {
            for (let j = 0; j < quotationMarks.length; j++) {
              const de: string = quotationMarks[j];
              if (j > 0) {
                if (de == "" && !isnull) {
                  isnull = true;
                  okData.push(de);
                  continue;
                } else if (de != "") {
                  okData.push(de);
                }
              }
              if (isnull) {
                isnull = false;
              }
            }
            const okDatastr: string = okData.join('"');
            lineData.push(okDatastr);
          }
        } else if (quotationMarks.length == 2) {
          if (quotationMarks[0].length != 0) {
            lineData[i - 1] += "," + quotationMarks[0];
          } else {
            lineData.push(quotationMarks[1]);
          }
        } else {
          lineData.push(be);
        }
      }
      returnData.push(lineData);
    }
    return returnData;
  }
}
