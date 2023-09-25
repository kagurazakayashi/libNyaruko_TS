// 排序
import NyaLib from "./main";

export default class NyaShot extends NyaLib {
  /**
   * 测试所有算法所需时间
   * log 输出：
   *   所用时间
   *   算法编号 是否正确 数组长度
   * @param {number[]} arr 數字陣列（不提供則隨機生成）
   * @return {number[]} 排序後的數字陣列
   *
  static testAllTime(arr: number[] = []): number[] {
    if (arr.length == 0) {
      for (let i = 0; i < 65536; i++) {
        arr.push(Math.floor(Math.random() * 65536));
      }
    }
    let mode = 0;
    let a: number[] = [];
    console.time();
    const n: number[] = arr.sort();
    console.timeEnd();
    console.log(mode, true, n.length); // 26
    mode++; // 1
    console.time();
    a = this.bubbleSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 4789
    mode++; // 2
    console.time();
    a = this.insertSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 2
    mode++; // 3
    console.time();
    a = this.selectSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 2400
    mode++; // 4
    console.time();
    a = this.shellSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 5
    mode++; // 5
    console.time();
    a = this.mergeSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 170
    mode++; // 6
    console.time();
    a = this.heapSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 23
    mode++; // 7
    console.time();
    a = this.quickSort(arr);
    console.timeEnd();
    console.log(mode, a.toString() == n.toString(), a.length); // 33
    return arr.sort();
  }
  */

  /**
   * 氣泡排序
   * 從第一個元素開始，把當前元素和下一個索引元素進行比較。如果當前元素大，那麼就交換位置，重複操作直到比較到最後一個元素
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static bubbleSort(arr: number[]): number[] {
    if (Array.isArray(arr)) {
      for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }
    return [];
  }

  /**
   * 插入排序（速度推薦）
   * 第一個元素預設是已排序元素，取出下一個元素和當前元素比較，如果當前元素大就交換位置。那麼此時第一個元素就是當前的最小數，所以下次取出操作從第三個元素開始，向前對比，重複之前的操作。
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static insertSort(arr: number[]): number[] {
    if (Array.isArray(arr)) {
      for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1;
        let current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex + 1] = arr[preIndex];
          preIndex--;
        }
        arr[preIndex + 1] = current;
      }
      return arr;
    }
    return [];
  }

  /**
   * 選擇排序
   * 遍歷陣列，設定最小值的索引為 0，如果取出的值比當前最小值小，就替換最小值索引，遍歷完成後，將第一個元素和最小值索引上的值交換。如上操作後，第一個元素就是陣列中的最小值，下次遍歷就可以從索引 1 開始重複上述操作。
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static selectSort(arr: number[]): number[] {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIdex = i;
        for (let j = i + 1; j < arr.length; j++) {
          minIdex = arr[j] < arr[minIdex] ? j : minIdex;
        }
        [arr[i], arr[minIdex]] = [arr[minIdex], arr[i]];
      }
      return arr;
    }
    return [];
  }

  /**
   * 快速排序
   * 通過一輪排序將要排序的數據分割成獨立的兩部分，其中一部分的所有數據都比另外一部分的所有數據都要小，然後再按此方法對這兩部分數據分別進行快速排序，整個排序過程可以遞歸進行，以此達到整個數據變成有序序列。
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return NyaShot.quickSort(left).concat([pivot], NyaShot.quickSort(right));
  }

  /**
   * 希爾排序
   * 選擇一個增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；
   * 按增量序列個數 k，對序列進行 k 趟排序；
   * 每趟排序，根據對應的增量 ti，將待排序列分割成若干長度為 m 的子序列，分別對各子表進行直接插入排序。僅增量因子為 1 時，整個序列作為一個表來處理，表長度即為整個序列的長度。
   * @param {number[]} arr 數字陣列
   * @param {number} gap 間隔序列
   * @return {number[]} 排序後的數字陣列
   */
  static shellSort(arr: number[], gap = 1): number[] {
    let len = arr.length,
      temp;
    while (gap < len / 5) {
      gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
      for (let i = gap; i < len; i++) {
        temp = arr[i];
        let j = i - gap;
        for (j; j >= 0 && arr[j] > temp; j -= gap) {
          arr[j + gap] = arr[j];
        }
        arr[j + gap] = temp;
      }
    }
    return arr;
  }

  /**
   * 歸併排序
   * 採用自上而下的遞迴方法。
   * 把長度為n的輸入序列分成兩個長度為n/2的子序列；
   * 對這兩個子序列分別採用歸併排序；
   * 將兩個排序好的子序列合併成一個最終的排序序列。
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static mergeSort(arr: number[]): number[] {
    /**
     * 合併
     * @param {number[]} left 左邊陣列
     * @param {number[]} right 右邊陣列
     * @return {number[]} 合併後的陣列
     */
    const merge = (left: number[], right: number[]) => {
      let result = [];
      while (left.length && right.length) {
        // 不斷比較left和right陣列的第一項，小的取出存入res
        left[0] < right[0]
          ? result.push(left.shift())
          : result.push(right.shift());
      }
      return result.concat(left, right);
    };
    let len = arr.length;
    if (len < 2) {
      return arr;
    }
    let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
    return merge(NyaShot.mergeSort(left), NyaShot.mergeSort(right)) as number[];
  }

  /**
   * 堆排序
   * 堆排序是一種樹形選擇排序，是對直接選擇排序的有效改進。
   * 堆的概念：堆是具有以下性質的完全二叉樹：每個節點的值都大於或等於其左右孩子節點的值，稱為大頂堆；或者每個節點的值都小於或等於其左右孩子節點的值，稱為小頂堆。
   * @param {number[]} arr 數字陣列
   * @return {number[]} 排序後的數字陣列
   */
  static heapSort(arr: number[]): number[] {
    /**
     * 堆化
     * @param {number[]} arr 數字陣列
     * @param {number} x 索引
     * @param {number} len 長度
     */
    const heapify = (arr: number[], x: number, len: number) => {
      let l = 2 * x + 1,
        r = 2 * x + 2,
        largest = x;
      if (l < len && arr[l] > arr[largest]) {
        largest = l;
      }
      if (r < len && arr[r] > arr[largest]) {
        largest = r;
      }
      if (largest !== x) {
        [arr[x], arr[largest]] = [arr[largest], arr[x]];
        heapify(arr, largest, len);
      }
    };
    let len = arr.length;
    if (len < 2) return arr;
    // 建立大頂堆
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, i, len);
    }
    // 排序
    for (let j = len - 1; j > 0; j--) {
      [arr[0], arr[j]] = [arr[j], arr[0]];
      heapify(arr, 0, --len);
    }
    return arr;
  }

  /**
   * 二分查詢
   * 在插入第i個元素時，對前面的0～i-1元素進行折半，先跟他們中間的那個元素比，如果小，則對前半再進行折半，否則對後半進行折半，直到left>right，然後再把第i個元素前1位與目標位置之間的所有元素後移，再把第i個元素放在目標位置上。
   */
  static binarySearch(arr: number[], val: number): boolean {
    if (arr.length < 1 || val < arr[0] || val > arr[arr.length - 1]) {
      return false;
    } else if (val == arr[0] || val == arr[arr.length - 1]) {
      return true;
    } else if (arr.length == 1) {
      return false;
    }
    let res = [];
    let base = Math.floor(arr.length / 2);
    if (val > arr[base]) {
      res = arr.splice(base + 1, arr.length - 1);
    } else if ((val = arr[base])) {
      return true;
    } else {
      res = arr.splice(0, base - 1);
    }
    return NyaShot.binarySearch(res, val);
  }
}
