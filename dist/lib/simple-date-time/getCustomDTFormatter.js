"use strict";
/**
 *
 * @param dateValue default current date will be displayed otherwise enter datevalue unix number for paarticular date.
 * @returns `String`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomDTFormatter = void 0;
const getCustomDTFormatter = (dateValue) => {
    const d = dateValue === undefined ? new Date() : dateValue === null ? new Date() : new Date(dateValue);
    /**
     *
     * @param formatValue Format to show date time value.
     * @returns `String` Return formatted timeStamp
     *
     *
     * Example Below:
     *
     * Year : yy => for last two digits, yyyy => full year,
     *
     * Month : M => oct, Mu => OCT, Mp => Oct  |  MM => october, MMu => OCTOBER, MMp => October,
     *
     * Day : d => fri, du => FRI, dp => Fri  |  dd => friday, ddu => FRIDAY, ddp => Friday,
     *
     * Month In Number : mt => 10
     *
     * Date : dt => 10
     *
     * Hour : h => 10
     *
     * Minute : m => 10
     *
     * Second : s => 10
     *
     * am/pm : ap => am or pm, apu => AM or PM,
     *
     */
    function format(formatValue, insertCharacters) {
        const flagData = formatValue.split(" ");
        let customTimeStamp = "";
        flagData === null || flagData === void 0 ? void 0 : flagData.forEach((eachItem) => {
            customTimeStamp = customTimeStamp + checkFlag(eachItem, insertCharacters);
        });
        return customTimeStamp;
    }
    const getCustomYear = (yearFlag) => {
        const year = String(d.getFullYear());
        return yearFlag === "yy" ? year.substring(2) : year;
    };
    const getCustomDate = (changeToStringFlag) => {
        const date = d.getDate();
        return changeToStringFlag ? String(date) : date;
    };
    const getCustomHour = (changeToStringFlag) => {
        const hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
        return hour === 0 ? changeToStringFlag ? String(12) : 12 : changeToStringFlag ? String(hour) : hour;
    };
    const getCustomMinute = (changeToStringFlag) => {
        const minute = d.getMinutes();
        return minute >= 10 ? changeToStringFlag ? String(minute) : minute : changeToStringFlag ? `0${minute}` : Number(`0${minute}`);
    };
    const getCustomSecond = (changeToStringFlag) => {
        const seconds = d.getSeconds();
        return seconds >= 10 ? changeToStringFlag ? String(seconds) : seconds : changeToStringFlag ? `0${seconds}` : Number(`0${seconds}`);
    };
    const getCustomAmPm = (caseFlag) => {
        const amPm = d.getHours() >= 12 ? "pm" : "am";
        return caseFlag === "u" ? amPm.toUpperCase() : amPm;
    };
    const getCustomMonth = (changeToStringFlag) => {
        const monthN = d.getMonth();
        return changeToStringFlag ? String(monthN + 1) : monthN + 1;
    };
    const getCustomMonthNameShort = (caseFlag) => {
        switch (d.getMonth()) {
            case 0:
                return caseFlag === "u" ? "JAN" : caseFlag === "p" ? "Jan" : "jan";
            case 1:
                return caseFlag === "u" ? "FEB" : caseFlag === "p" ? "Feb" : "feb";
            case 2:
                return caseFlag === "u" ? "MAR" : caseFlag === "p" ? "Mar" : "mar";
            case 3:
                return caseFlag === "u" ? "APR" : caseFlag === "p" ? "Apr" : "apr";
            case 4:
                return caseFlag === "u" ? "MAY" : caseFlag === "p" ? "May" : "may";
            case 5:
                return caseFlag === "u" ? "JUN" : caseFlag === "p" ? "Jun" : "jun";
            case 6:
                return caseFlag === "u" ? "JUL" : caseFlag === "p" ? "Jul" : "jul";
            case 7:
                return caseFlag === "u" ? "AUG" : caseFlag === "p" ? "Aug" : "aug";
            case 8:
                return caseFlag === "u" ? "SEP" : caseFlag === "p" ? "Sep" : "sep";
            case 9:
                return caseFlag === "u" ? "OCT" : caseFlag === "p" ? "Oct" : "oct";
            case 10:
                return caseFlag === "u" ? "NOV" : caseFlag === "p" ? "Nov" : "nov";
            case 11:
                return caseFlag === "u" ? "DEC" : caseFlag === "p" ? "Dec" : "dec";
            default:
                return "";
        }
    };
    const getCustomMonthNameFull = (caseFlag) => {
        switch (d.getMonth()) {
            case 0:
                return caseFlag === "u" ? "JANUARY" : caseFlag === "p" ? "January" : "january";
            case 1:
                return caseFlag === "u" ? "FEBRUARY" : caseFlag === "p" ? "February" : "february";
            case 2:
                return caseFlag === "u" ? "MARCH" : caseFlag === "p" ? "March" : "march";
            case 3:
                return caseFlag === "u" ? "APRIL" : caseFlag === "p" ? "April" : "april";
            case 4:
                return caseFlag === "u" ? "MAY" : caseFlag === "p" ? "May" : "may";
            case 5:
                return caseFlag === "u" ? "JUNE" : caseFlag === "p" ? "June" : "june";
            case 6:
                return caseFlag === "u" ? "JULY" : caseFlag === "p" ? "July" : "july";
            case 7:
                return caseFlag === "u" ? "AUGUST" : caseFlag === "p" ? "August" : "august";
            case 8:
                return caseFlag === "u" ? "SEPTEMBER" : caseFlag === "p" ? "September" : "september";
            case 9:
                return caseFlag === "u" ? "OCTOBER" : caseFlag === "p" ? "October" : "october";
            case 10:
                return caseFlag === "u" ? "NOVEMBER" : caseFlag === "p" ? "November" : "november";
            case 11:
                return caseFlag === "u" ? "DECEMBER" : caseFlag === "p" ? "December" : "december";
            default:
                return "";
        }
    };
    const getCustomDayNameShort = (caseFlag) => {
        switch (d.getDay()) {
            case 0:
                return caseFlag === "u" ? "SUN" : caseFlag === "p" ? "Sun" : "sun";
            case 1:
                return caseFlag === "u" ? "MON" : caseFlag === "p" ? "Mon" : "mon";
            case 2:
                return caseFlag === "u" ? "TUE" : caseFlag === "p" ? "Tue" : "tue";
            case 3:
                return caseFlag === "u" ? "WED" : caseFlag === "p" ? "Wed" : "wed";
            case 4:
                return caseFlag === "u" ? "THU" : caseFlag === "p" ? "Thu" : "thu";
            case 5:
                return caseFlag === "u" ? "FRI" : caseFlag === "p" ? "Fri" : "fri";
            case 6:
                return caseFlag === "u" ? "SAT" : caseFlag === "p" ? "Sat" : "sat";
            default:
                return "";
        }
    };
    const getCustomDayNameFull = (caseFlag) => {
        switch (d.getDay()) {
            case 0:
                return caseFlag === "u" ? "SUNDAY" : caseFlag === "p" ? "Sunday" : "sunday";
            case 1:
                return caseFlag === "u" ? "MONDAY" : caseFlag === "p" ? "Monday" : "monday";
            case 2:
                return caseFlag === "u" ? "TUESDAY" : caseFlag === "p" ? "Tuesday" : "tuesday";
            case 3:
                return caseFlag === "u" ? "WEDNESDAY" : caseFlag === "p" ? "Wednesday" : "wednesday";
            case 4:
                return caseFlag === "u" ? "THURSDAY" : caseFlag === "p" ? "Thursday" : "thursday";
            case 5:
                return caseFlag === "u" ? "FRIDAY" : caseFlag === "p" ? "Friday" : "friday";
            case 6:
                return caseFlag === "u" ? "SATURDAY" : caseFlag === "p" ? "Saturday" : "saturday";
            default:
                return "";
        }
    };
    const checkFlag = (flagValue, lastChar) => {
        switch (flagValue) {
            case "yy":
                return `${getCustomYear("yy")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.yy) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.yy : " "}`;
            case "yyyy":
                return `${getCustomYear("yyyy")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.yyyy) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.yyyy : " "}`;
            case "M":
                return `${getCustomMonthNameShort()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.M) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.M : " "}`;
            case "Mu":
                return `${getCustomMonthNameShort("u")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.Mu) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.Mu : " "}`;
            case "Mp":
                return `${getCustomMonthNameShort("p")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.Mp) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.Mp : " "}`;
            case "MM":
                return `${getCustomMonthNameFull()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.MM) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.MM : " "}`;
            case "MMu":
                return `${getCustomMonthNameFull("u")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.MMu) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.MMu : " "}`;
            case "MMp":
                return `${getCustomMonthNameFull("p")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.MMp) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.MMp : " "}`;
            case "mt":
                return `${getCustomMonth(true)}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.mt) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.mt : " "}`;
            case "dt":
                return `${getCustomDate()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.dt) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.dt : " "}`;
            case "d":
                return `${getCustomDayNameShort()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.d) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.d : " "}`;
            case "du":
                return `${getCustomDayNameShort("u")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.du) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.du : " "}`;
            case "dp":
                return `${getCustomDayNameShort("p")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.dp) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.dp : " "}`;
            case "dd":
                return `${getCustomDayNameFull()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.dd) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.dd : " "}`;
            case "ddu":
                return `${getCustomDayNameFull("u")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.ddu) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.ddu : " "}`;
            case "ddp":
                return `${getCustomDayNameFull("p")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.ddp) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.ddp : " "}`;
            case "m":
                return `${getCustomMinute(true)}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.m) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.m : " "}`;
            case "h":
                return `${getCustomHour()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.h) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.h : " "}`;
            case "s":
                return `${getCustomSecond(true)}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.s) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.s : " "}`;
            case "ap":
                return `${getCustomAmPm()}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.ap) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.ap : " "}`;
            case "apu":
                return `${getCustomAmPm("u")}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar.apu) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar.apu : " "}`;
            case "h:m:s":
                return `${getCustomHour()}:${getCustomMinute(true)}:${getCustomSecond(true)}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar["h:m:s"]) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar["h:m:s"] : " "}`;
            case "h:m":
                return `${getCustomHour()}:${getCustomMinute(true)}${(lastChar === null || lastChar === void 0 ? void 0 : lastChar["h:m"]) != undefined ? lastChar === null || lastChar === void 0 ? void 0 : lastChar["h:m"] : " "}`;
            default:
                return "";
        }
    };
    return { format };
};
exports.getCustomDTFormatter = getCustomDTFormatter;
//# sourceMappingURL=getCustomDTFormatter.js.map