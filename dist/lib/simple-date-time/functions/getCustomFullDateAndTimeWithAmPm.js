"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomFullDateAndTimeWithAmPm = void 0;
const useMonthDayHook_1 = require("../../utils/useMonthDayHook");
const getCustomAmPm_1 = require("./getCustomAmPm");
const getCustomDate_1 = require("./getCustomDate");
const getCustomHour_1 = require("./getCustomHour");
const getCustomMinute_1 = require("./getCustomMinute");
/**
 *
 * @param timeStampFlag condition: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase"
 * @returns `String`:  10 OCT TUE 10:10AM | 10 Oct Tue 10:10am | 10 OCTOBER TUESDAY 10:10PM | 10 October Tuesday 10:10pm
 */
const getCustomFullDateAndTimeWithAmPm = (timeStampFlag) => {
    const DATE = (0, getCustomDate_1.getCustomDate)();
    const MONTH_DAY = (0, useMonthDayHook_1.useMonthDayHook)(timeStampFlag);
    const HOUR = (0, getCustomHour_1.getCustomHour)();
    const MINUTE = (0, getCustomMinute_1.getCustomMinute)(true);
    const AM_PM = (0, getCustomAmPm_1.getCustomAmPm)(timeStampFlag === "shortForm_upperCase" ? "u" : timeStampFlag === "fullForm_upperCase" ? "u" : undefined);
    return `${DATE} ${MONTH_DAY} ${HOUR}:${MINUTE}${AM_PM}`;
};
exports.getCustomFullDateAndTimeWithAmPm = getCustomFullDateAndTimeWithAmPm;
//# sourceMappingURL=getCustomFullDateAndTimeWithAmPm.js.map