// 網路請求和返回資訊處理
import NyaLib from "./main";
import NyaAs from "./nyaas";

export default class NyaNetwork extends NyaLib {
  /**
   * 傳送 GET 請求
   * @param {string}   url      請求網址
   * @param {unknown}   data     需要提交的資料
   * @param {function} callback 網路請求回撥函式
   * - {XMLHttpRequest|null} data 数据对象
   * - {number} status HTTP状态码
   * @param {boolean}  async    是否使用非同步請求
   */
  static get<T>(
    url: string,
    data?: T,
    callback?: (data: XMLHttpRequest | null, status: number) => void,
    async = true,
    isblob = false,
    progress?: (
      status: number,
      value: number,
      max: number,
      percent: number
    ) => void
  ): XMLHttpRequest | null {
    return this.ajax("GET", url, data, callback, async, isblob, progress);
  }

  /**
   * 傳送 POST 請求
   * @param {string}   url      請求網址
   * @param {unknown}   data     需要提交的資料
   * @param {function} callback 網路請求回撥函式
   * - {XMLHttpRequest|null} data 数据对象
   * - {number} status HTTP状态码
   * @param {boolean}  async    是否使用非同步請求
   */
  static post<T>(
    url: string,
    data?: T,
    callback?: (data: XMLHttpRequest | null, status: number) => void,
    async = true,
    isblob = false,
    progress?: (
      status: number,
      value: number,
      max: number,
      percent: number
    ) => void
  ): XMLHttpRequest | null {
    return this.ajax("POST", url, data, callback, async, isblob, progress);
  }

  /**
   * 傳送請求
   * @param {string}   type     請求方式
   * @param {string}   url      請求網址
   * @param {unknown}   data     需要提交的資料
   * @param {function} callback 網路請求回撥函式
   * - {XMLHttpRequest|null} data 数据对象
   * - {number} status HTTP状态码
   * @param {boolean}  async    是否使用非同步請求
   *
   */
  static ajax<T>(
    type: string,
    url: string,
    data?: T,
    callback?: (data: XMLHttpRequest | null, status: number) => void,
    async = true,
    isblob = false,
    progress?: (
      status: number,
      value: number,
      max: number,
      percent: number
    ) => void
  ): XMLHttpRequest | null {
    if (url.length == 0) {
      return null;
    }
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    const dataArr: string[] = [];
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          dataArr.push(key + "=" + element);
        }
      }
    }
    const isArg = dataArr.length > 0;
    const dataStr = isArg ? dataArr.join("&") : "";
    // this.log(`請求網址 ${url} , 資料 ${dataStr}`, this.nyaLibName);
    const isGET = type == "GET";
    if (isGET && isArg) {
      url += "?" + dataStr;
    }
    if (isblob) {
      xhr.responseType = "blob";
      xhr.open(type, url, true);
    } else {
      xhr.open(type, url, async);
    }
    xhr.onload = function () {
      // this.log(`請求網址 ${url} 成功，返回資料 ${this.responseText}`, this.nyaLibName);
      if (callback) {
        callback(this, this.status);
      }
    };
    xhr.onerror = function () {
      // this.log(`請求網址 ${url} 失敗，返回狀態碼 ${this.status}`, this.nyaLibName, -2);
      if (callback) {
        callback(null, this.status);
      }
    };
    xhr.onprogress = function (evt) {
      if (progress) {
        progress(
          0,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    if (isGET) {
      xhr.send();
    } else {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      if (isArg) {
        xhr.send(dataStr);
      } else {
        xhr.send();
      }
    }
    return xhr;
  }

  /**
   * 上傳一個或多個檔案，支援附加提交資料(POST)
   * @param {string} url 接收上傳檔案的網址
   * @param {HTMLInputElement} fileInput 網頁檔案上傳框 DOM 物件
   * @param {isMultiple} isMultiple 是否為多個檔案上傳
   * @param {unknown} data 需要附加提交的引數
   * @param {function} progress 檔案請求回撥函式
   * - {number} status 檔案上傳狀態 0正在上傳 1上傳完畢 -1取消 -2超時 -3錯誤
   * - {number} value 已上傳位元組
   * - {number} max 總計位元組
   * - {number} percent 已完成百分比
   * @param {function} callback 網路請求回撥函式
   * - {XMLHttpRequest|null} data 資料物件
   * - {number} status HTTP狀態碼
   * @param {boolean} async 是否使用非同步請求
   * @param {string} valKey 自定義檔案提交所用的鍵
   * @returns {boolean} 建立上傳任務是否成功
   */
  static uploadFile<T>(
    url: string,
    fileInput: HTMLInputElement,
    isMultiple = false,
    data?: T,
    progress?: (
      status: number,
      value: number,
      max: number,
      percent: number
    ) => void,
    callback?: (data: XMLHttpRequest | null, status: number) => void,
    async = true,
    valKey?: string
  ): XMLHttpRequest | null {
    const files: FileList | null = fileInput.files;
    if (files == null || files.length == 0) {
      return null; // 沒有需要上傳的檔案
    }
    const form: FormData = new FormData();
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element: any = data[key];
          form.append(key, element);
        }
      }
    }
    if (isMultiple) {
      for (const key in files) {
        if (Object.prototype.hasOwnProperty.call(files, key)) {
          const file: File = files[key];
          form.append(valKey ?? "files", file, file.name);
        }
      }
    } else {
      form.append(valKey ?? "file", files[0], files[0].name);
    }
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("post", url, async);
    xhr.onload = function (): void {
      // this.log(`請求網址、上傳 ${url} 成功，返回資料 ${this.responseText}`, this.nyaLibName);
      if (callback) {
        callback(this, this.status);
      }
    };
    xhr.onerror = function (): void {
      if (callback) {
        callback(null, this.status);
      }
    };
    xhr.upload.onloadstart = function (): void {
      if (callback) {
        callback(null, this.status);
      }
    };
    xhr.upload.onprogress = function (evt): void {
      if (progress) {
        progress(
          0,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    xhr.upload.onloadend = function (evt): void {
      if (progress) {
        progress(
          1,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    xhr.upload.onabort = function (evt): void {
      if (progress) {
        progress(
          -1,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    xhr.upload.ontimeout = function (evt): void {
      if (progress) {
        progress(
          -2,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    xhr.upload.onerror = function (evt): void {
      if (progress) {
        progress(
          -3,
          evt.loaded,
          evt.total,
          Math.round((evt.loaded / evt.total) * 100)
        );
      }
    };
    xhr.send(form);
    return xhr;
  }

  /**
   * 模擬表單提交來發送資料
   * @param {string} type 請求方式
   * @param {string} url 請求網址
   * @param {unknown} data 需要提交的資料
   * @param {string} submit 提交請求
   * @param {number} removeTimeout 建立的表單DOM自動移除時間, -1 為不移除, 0為立即移除, >0 為多少毫秒後移除
   * @return {HTMLFormElement|null|undefined} 建立的表單物件，如果立即移除則為 null ，如果已經自動移除則為 undefined
   */
  static formSubmit<T>(
    type: string,
    url: string,
    data?: T,
    submit = "submit",
    removeTimeout = 0
  ): HTMLFormElement | null | undefined {
    const form: HTMLFormElement = document.createElement("form");
    form.style.display = "none";
    form.action = url;
    form.method = type;
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const val: any = data[key];
          const input: HTMLInputElement = NyaAs.input();
          input.type = "text";
          input.name = key;
          input.value = val;
          form.appendChild(input);
        }
      }
    }
    if (submit.length > 0) {
      const submitO: HTMLInputElement = NyaAs.input();
      submitO.type = "submit";
      submitO.value = submit;
      form.appendChild(submitO);
    }
    document.body.appendChild(form);
    form.submit();
    if (removeTimeout > 0) {
      setTimeout(() => {
        form.remove();
      }, removeTimeout);
    } else if (removeTimeout == 0) {
      form.remove();
      return null;
    }
    return form;
  }
}
