"use strict";
/**
 *
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase or "p" for the proper case.
 * @returns `String`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMonthNameShort = void 0;
const getCustomMonthNameShort = (caseFlag) => {
    const date = new Date();
    switch (date.getMonth()) {
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
exports.getCustomMonthNameShort = getCustomMonthNameShort;
//# sourceMappingURL=getCustomMonthNameShort.js.map