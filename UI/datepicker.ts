// 日期選擇器控制元件

// 參考了以下來源：
// https://codepen.io/dffzmxj/pen/RwVyOOv
// https://zhuanlan.zhihu.com/p/57043693

import NyaAs from '../nyaas';
import NyaDom from '../nyadom';
import NyaEvent, { NyaEventListener } from '../nyaevent';
import NyaStrings from '../nyastrings';
import NyaTime from '../nyatime';

export default class NyaDatePicker {
    stack: any[] = [];
    wrapper = document.createElement('div');
    domBox: HTMLDivElement | HTMLSpanElement;
    dom: HTMLDivElement = document.createElement('div');
    domInput: HTMLInputElement;
    nowDateTime: number[] = [];
    currMonth: HTMLSpanElement = document.createElement('span');
    datepicker: HTMLDivElement = document.createElement('div');
    nowSelectStart: number[] = [];
    eventDay: NyaEventListener[] = [];
    events: NyaEventListener[] = [];
    selectDate: HTMLSpanElement = document.createElement('span');
    selectedColor: string = '#87CECB';
    inputEvent: NyaEventListener | null = null;

    langEngWeekday: string[] = 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(',');
    langChsWeekday: string[] = '日一二三四五六'.split('');

    langEngMonths: string[] = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',');
    langChsMonths: string[] = '一,二,三,四,五,六,七,八,九,十,十一,十二'.split(',');

    constructor(inputDOM: HTMLInputElement, addToDOM: HTMLDivElement | HTMLSpanElement) {
        for (let i = 0; i < this.langChsMonths.length; i++) {
            this.langChsMonths[i] += '月';
        }
        this.domBox = addToDOM;
        this.domInput = inputDOM;
        this.inputEventOn(true);
    }

    inputEventOn(isEvent: boolean) {
        console.log(isEvent);
        if (isEvent) {
            console.log('!!addEventListener', this.domInput);
            this.inputEvent = NyaEvent.addEventListener(this.domInput, () => {
                this.show();
                this.inputEventOn(false);
            });
            console.log(this.inputEvent);
        } else {
            if (this.inputEvent) {
                NyaEvent.removeEventListener(this.inputEvent);
            }
        }
    }

    show() {
        const inputVal: string = this.domInput.value;
        if (inputVal.length == 0 || isNaN(Date.parse(inputVal))) {
            this.nowDateTime = NyaTime.nowDateTime(3);
            this.domInput.value = NyaStrings.numberArray2string(this.nowDateTime, '-', 2);
        } else {
            this.nowDateTime = NyaStrings.string2intArray(inputVal, '-', 3);
        }
        this.nowSelectStart = [...this.nowDateTime];
        this.buildUi();
    }

    destructor() {
        NyaEvent.removeEventListeners(this.events);
        NyaEvent.removeEventListeners(this.eventDay);
        // this.inputEventOn(false);
        this.events = [];
        this.eventDay = [];
        this.datepicker.innerHTML = '';
        this.dom.innerHTML = '';
        this.domBox.innerHTML = '';
        this.currMonth = NyaAs.span();
    }

    getMonthDate(
        year: number = -1,
        month: number = -1
    ): {
        year: number;
        month: number;
        days: {
            month: number;
            date: number;
            showDate: number;
        }[];
    } {
        let ret: {
            month: number;
            date: number;
            showDate: number;
        }[] = [];
        if (year <= 0 || month <= 0) {
            const today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        // 月第一天
        const firstDay: Date = new Date(year, month - 1, 1);
        // 獲取星期幾，判斷排在第幾列
        let firstDayWeekDay: number = firstDay.getDay();
        if (firstDayWeekDay === 0) {
            // 週日
            firstDayWeekDay = 7;
        }

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;
        // 月最後一天
        const lastDayOfLastMonth: Date = new Date(year, month - 1, 0);
        const lastDateOfLastMonth: number = lastDayOfLastMonth.getDate();

        const preMonthDayCount: number = firstDayWeekDay - 1;
        const lastDay: Date = new Date(year, month, 0);
        const lastDate: number = lastDay.getDate();

        for (let i = 0; i < 7 * 6; i++) {
            let date: number = i + 1 - preMonthDayCount;
            let showDate: number = date;
            let thisMonth: number = month;
            // 上一月
            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                // 下一月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }
            if (thisMonth === 0) {
                thisMonth = 12;
            }
            if (thisMonth === 13) {
                thisMonth = 1;
            }
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate,
            });
        }
        return {
            year: year,
            month: month,
            days: ret,
        };
    }

    buildUi(year: number = this.nowDateTime[0], month: number = this.nowDateTime[1]) {
        const none: string = 'none';
        const styleHeaderFooter: (d: HTMLElement) => void = (d: HTMLElement) => {
            d.style.height = '50px';
            d.style.lineHeight = '50px';
            d.style.background = '#f0f0f0';
            d.style.borderBottom = '1px solid #cccccc';
        };
        const styleButton: (d: HTMLElement) => void = (d: HTMLElement) => {
            d.style.fontFamily = 'serif';
            d.style.fontSize = '20px';
            d.style.width = '50px';
            d.style.height = '50px';
            d.style.lineHeight = '50px';
            d.style.color = '#1abc9c';
            d.style.textAlign = 'center';
            d.style.cursor = 'pointer';
            d.style.textDecoration = none;
            d.style.border = none;
        };
        const styleSelect: (d: HTMLElement) => void = (d: HTMLElement) => {
            d.style.border = none;
            d.style.backgroundColor = 'transparent';
            d.style.textAlign = 'right';
        };
        // 最外層區域
        this.dom ??= document.createElement('div');
        this.dom.innerHTML = '';
        this.dom.style.width = '240px';
        this.dom.style.fontSize = '16px';
        this.dom.style.color = '#666666';
        this.dom.style.backgroundColor = '#FFF';
        this.dom.style.boxShadow = '2px 2px 8px 2px rgba(128, 128, 128, 0.3)';
        this.dom.style.position = 'absolute';
        this.dom.style.zIndex = '99999';
        this.domBox.appendChild(this.dom);
        // 頭部區域
        const headerDiv: HTMLDivElement = NyaAs.div();
        headerDiv.style.textAlign = 'center';
        styleHeaderFooter(headerDiv);
        // 按鈕：上個月
        const monPrev: HTMLButtonElement = NyaAs.button();
        styleButton(monPrev);
        monPrev.style.float = 'left';
        monPrev.innerHTML = '&lt;';
        headerDiv.appendChild(monPrev);
        const eventMonPrev: NyaEventListener | null = NyaEvent.addEventListener(monPrev, (event: Event) => {
            this.switchMonth(false);
        });
        if (eventMonPrev) this.events.push(eventMonPrev);
        // 按鈕：下個月
        const monNext: HTMLButtonElement = NyaAs.button();
        styleButton(monNext);
        monNext.style.float = 'right';
        monNext.innerHTML = '&gt;';
        headerDiv.appendChild(monNext);
        const eventMonNext: NyaEventListener | null = NyaEvent.addEventListener(monNext, (event: Event) => {
            this.switchMonth(true);
        });
        if (eventMonNext) this.events.push(eventMonNext);
        // 年份選擇器
        const selectYear: HTMLSelectElement = NyaAs.select();
        styleSelect(selectYear);
        selectYear.title = 'Year';
        let maxYear = this.nowDateTime[0] + 100;
        for (let i = 1970; i <= maxYear; i++) {
            const selectItem: HTMLOptionElement = NyaAs.option();
            selectItem.value = i.toString();
            selectItem.innerText = selectItem.value;
            selectYear.appendChild(selectItem);
        }
        const eventYear: NyaEventListener | null = NyaEvent.addEventListener(selectYear, (event: Event) => {
            this.nowDateTime[0] = parseInt(selectYear.value);
            this.buildUiCal();
        });
        if (eventYear) this.events.push(eventYear);
        this.currMonth.appendChild(selectYear);
        const currMonthSpan: HTMLSpanElement = NyaAs.span();
        currMonthSpan.innerText = ' / ';
        this.currMonth.appendChild(currMonthSpan);
        // 月份選擇器
        const selectMonth: HTMLSelectElement = NyaAs.select();
        styleSelect(selectMonth);
        selectMonth.title = 'Month';
        for (let i = 1; i <= 12; i++) {
            const selectItem: HTMLOptionElement = NyaAs.option();
            selectItem.value = i.toString();
            selectItem.innerText = selectItem.value;
            selectMonth.appendChild(selectItem);
        }
        const eventMonth: NyaEventListener | null = NyaEvent.addEventListener(selectMonth, (event: Event) => {
            this.nowDateTime[1] = parseInt(selectMonth.value);
            this.buildUiCal();
        });
        if (eventMonth) this.events.push(eventMonth);
        this.currMonth.appendChild(selectMonth);
        headerDiv.appendChild(this.currMonth);
        this.dom.appendChild(headerDiv);
        this.datepicker.className = 'ui-datepicker-body';
        this.buildUiCal(year, month);
        this.dom.appendChild(this.datepicker);
        // 底部操作區
        const footerDiv = NyaAs.div();
        footerDiv.style.textAlign = 'right';
        styleHeaderFooter(footerDiv);
        // 按鈕：確定
        const btnOK: HTMLButtonElement = NyaAs.button();
        styleButton(btnOK);
        btnOK.style.paddingRight = '15px';
        btnOK.innerHTML = '✓';
        headerDiv.appendChild(btnOK);
        const footerDivButtons: HTMLSpanElement = NyaAs.span();
        const eventBtnOK: NyaEventListener | null = NyaEvent.addEventListener(btnOK, (event: Event) => {
            console.log('this.nowDateTime', this.nowDateTime);
            this.domInput.value = this.selectDate.innerText;
            this.destructor();
            this.inputEventOn(true);
        });
        if (eventBtnOK) this.events.push(eventBtnOK);
        footerDivButtons.appendChild(btnOK);
        // 按鈕：取消
        const btnCancel: HTMLButtonElement = NyaAs.button();
        styleButton(btnCancel);
        btnCancel.innerHTML = '×';
        const eventBtnCancel: NyaEventListener | null = NyaEvent.addEventListener(btnCancel, (event: Event) => {
            this.destructor();
            this.inputEventOn(true);
        });
        if (eventBtnCancel) this.events.push(eventBtnCancel);
        footerDivButtons.appendChild(btnCancel);
        footerDiv.appendChild(footerDivButtons);
        // 底部日期显示
        this.selectedDate();
        this.selectDate.style.float = 'left';
        this.selectDate.style.paddingLeft = '10px';
        footerDiv.appendChild(this.selectDate);
        this.dom.appendChild(footerDiv);
    }

    selectedDate() {
        const dateStr: string[] = [];
        for (let i = 0; i < 3; i++) {
            const dateNum: number = this.nowSelectStart[i];
            dateStr.push(dateNum < 10 ? '0' + dateNum.toString() : dateNum.toString());
        }
        this.selectDate.innerText = dateStr.join('-');
    }

    buildUiCal(year: number = this.nowDateTime[0], month: number = this.nowDateTime[1]) {
        NyaEvent.removeEventListeners(this.eventDay);
        this.eventDay = [];
        this.datepicker.innerHTML = '';
        const monthData: {
            year: number;
            month: number;
            days: {
                month: number;
                date: number;
                showDate: number;
            }[];
        } = this.getMonthDate(year, month); // 獲取一個月的資料
        const yearMonthInputs: HTMLCollectionOf<HTMLSelectElement> = this.currMonth.getElementsByTagName('select');
        yearMonthInputs[0].value = monthData.year.toString();
        yearMonthInputs[1].value = monthData.month.toString();
        // 日曆表
        const table: HTMLTableElement = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        // 表頭星期顯示
        const thtdSize: string[] = ['40px', '30px']; // W,H
        const thead: HTMLTableSectionElement = document.createElement('thead');
        let tr: HTMLTableRowElement = document.createElement('tr');
        for (const weekdayAbbreviation of this.langChsWeekday) {
            const th: HTMLTableCellElement = document.createElement('th');
            th.style.fontSize = '12px';
            th.style.width = thtdSize[0];
            th.style.height = thtdSize[1];
            th.style.lineHeight = thtdSize[1];
            th.innerText = weekdayAbbreviation;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        // 日期數字表
        const tbody: HTMLTableSectionElement = document.createElement('tbody');
        for (let i = 0; i < monthData.days.length; i++) {
            // <行>
            if (i % 7 === 0) {
                tr = document.createElement('tr');
            }
            // <日期數字>
            const date: {
                month: number;
                date: number;
                showDate: number;
            } = monthData.days[i];
            const td: HTMLTableCellElement = document.createElement('td');
            td.style.textAlign = 'center';
            td.style.width = '14%';
            td.style.height = thtdSize[1];
            td.style.border = '1px solid #f0f0f0';
            td.style.cursor = 'pointer';
            td.className = 'ui-datepicker-date';
            td.innerText = date.showDate.toString();
            const titleArr = [monthData.year, date.month, date.showDate];
            if (date.date != date.showDate) {
                td.style.color = '#D3D3D3';
                if (month == 1 && date.month == 12) {
                    titleArr[0]--;
                } else if (month == 12 && date.month == 1) {
                    titleArr[0]++;
                }
            }
            td.title = titleArr.join('-');
            if (titleArr[0] == this.nowSelectStart[0] && titleArr[1] == this.nowSelectStart[1] && titleArr[2] == this.nowSelectStart[2]) {
                console.log('titleArr', titleArr);
                console.log('this.nowSelectStart', this.nowSelectStart);
                td.style.backgroundColor = this.selectedColor;
            }
            const event = NyaEvent.addEventListener(td, (event: Event) => {
                this.nowSelectStart[0] = titleArr[0];
                this.nowSelectStart[1] = titleArr[1];
                this.nowSelectStart[2] = titleArr[2];
                for (const otd of NyaDom.byClass('ui-datepicker-date')) {
                    otd.style.backgroundColor = '';
                }
                td.style.backgroundColor = this.selectedColor;
                this.selectedDate();
            });
            if (event) {
                this.eventDay.push(event);
            }
            tr.appendChild(td);
            // </日期數字>
            if (i % 7 === 6) {
                tbody.appendChild(tr);
            }
            // </行>
        }
        table.appendChild(tbody);
        this.datepicker.appendChild(table);
    }

    switchMonth(isNext: boolean) {
        if (isNext) {
            if (this.nowDateTime[1] >= 12) {
                this.nowDateTime[0]++;
                this.nowDateTime[1] = 1;
            } else {
                this.nowDateTime[1]++;
            }
        } else {
            if (this.nowDateTime[1] <= 1) {
                this.nowDateTime[0]--;
                this.nowDateTime[1] = 12;
            } else {
                this.nowDateTime[1]--;
            }
        }
        this.buildUiCal(this.nowDateTime[0], this.nowDateTime[1]);
    }
}
