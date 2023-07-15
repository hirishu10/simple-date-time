"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMonthDayHook = void 0;
const simple_date_time_1 = require("../simple-date-time");
/**
 *
 * @param timeStampFlag value to check and return the data
 * @returns `String`
 */
const useMonthDayHook = (timeStampFlag) => {
    switch (timeStampFlag) {
        case "shortForm_upperCase":
            return `${(0, simple_date_time_1.getCustomMonthNameShort)("u")} ${(0, simple_date_time_1.getCustomDayNameShort)("u")}`;
        case "fullForm_upperCase":
            return `${(0, simple_date_time_1.getCustomMonthNameFull)("u")} ${(0, simple_date_time_1.getCustomDayNameFull)("u")}`;
        case "shortForm_lowerCase":
            return `${(0, simple_date_time_1.getCustomMonthNameShort)("p")} ${(0, simple_date_time_1.getCustomDayNameShort)("p")}`;
        case "fullForm_lowerCase":
            return `${(0, simple_date_time_1.getCustomMonthNameFull)("p")} ${(0, simple_date_time_1.getCustomDayNameFull)("p")}`;
        default:
            return `${(0, simple_date_time_1.getCustomMonthNameShort)("p")} ${(0, simple_date_time_1.getCustomDayNameShort)("p")}`;
    }
};
exports.useMonthDayHook = useMonthDayHook;
//# sourceMappingURL=useMonthDayHook.js.map