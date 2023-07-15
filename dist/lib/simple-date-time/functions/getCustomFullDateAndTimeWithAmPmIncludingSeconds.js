"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomFullDateAndTimeWithAmPmIncludingSeconds = void 0;
const useMonthDayHook_1 = require("../../utils/useMonthDayHook");
const getCustomAmPm_1 = require("./getCustomAmPm");
const getCustomDate_1 = require("./getCustomDate");
const getCustomHour_1 = require("./getCustomHour");
const getCustomMinute_1 = require("./getCustomMinute");
const getCustomSecond_1 = require("./getCustomSecond");
/**
 *
 * @param timeStampFlag condition: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase"
 * @returns `String`:  10 OCT TUE 10:10:10 AM | 10 Oct Tue 10:10:10 am | 10 OCTOBER TUESDAY 10:10:10 PM | 10 October Tuesday 10:10:10 pm
 */
const getCustomFullDateAndTimeWithAmPmIncludingSeconds = (timeStampFlag) => {
    const DATE = (0, getCustomDate_1.getCustomDate)();
    const MONTH_DAY = (0, useMonthDayHook_1.useMonthDayHook)(timeStampFlag);
    const HOUR = (0, getCustomHour_1.getCustomHour)();
    const MINUTE = (0, getCustomMinute_1.getCustomMinute)(true);
    const SECOND = (0, getCustomSecond_1.getCustomSecond)(true);
    const AM_PM = (0, getCustomAmPm_1.getCustomAmPm)(timeStampFlag === "shortForm_upperCase" ? "u" : timeStampFlag === "fullForm_upperCase" ? "u" : undefined);
    return `${DATE} ${MONTH_DAY} ${HOUR}:${MINUTE}:${SECOND} ${AM_PM}`;
};
exports.getCustomFullDateAndTimeWithAmPmIncludingSeconds = getCustomFullDateAndTimeWithAmPmIncludingSeconds;
//# sourceMappingURL=getCustomFullDateAndTimeWithAmPmIncludingSeconds.js.map