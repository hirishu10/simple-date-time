"use strict";
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomFullDateAndTimeWithAmPmIncludingSeconds = exports.getCustomFullDateAndTimeWithAmPm = exports.getCustomAmPm = exports.getCustomSecond = exports.getCustomMinute = exports.getCustomHour = exports.getCustomDate = exports.getCustomMonthNameShort = exports.getCustomMonthNameFull = exports.getCustomDayNameShort = exports.getCustomDayNameFull = void 0;
const getCustomDayNameFull = (capsOnFlag, properCaseFlag) => {
    const date = new Date();
    const properCase = properCaseFlag === false ? false : true;
    switch (date.getDay()) {
        case 0:
            return capsOnFlag ? "SUNDAY" : properCase ? "Sunday" : "sunday";
        case 1:
            return capsOnFlag ? "MONDAY" : properCase ? "Monday" : "monday";
        case 2:
            return capsOnFlag ? "TUESDAY" : properCase ? "Tuesday" : "tuesday";
        case 3:
            return capsOnFlag ? "WEDNESDAY" : properCase ? "Wednesday" : "wednesday";
        case 4:
            return capsOnFlag ? "THURSDAY" : properCase ? "Thursday" : "thursday";
        case 5:
            return capsOnFlag ? "FRIDAY" : properCase ? "Friday" : "friday";
        case 6:
            return capsOnFlag ? "SATURDAY" : properCase ? "Saturday" : "saturday";
        default:
            return null;
    }
};
exports.getCustomDayNameFull = getCustomDayNameFull;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
const getCustomDayNameShort = (capsOnFlag, properCaseFlag) => {
    const date = new Date();
    const properCase = properCaseFlag === false ? false : true;
    switch (date.getDay()) {
        case 0:
            return capsOnFlag ? "SUN" : properCase ? "Sun" : "sun";
        case 1:
            return capsOnFlag ? "MON" : properCase ? "Mon" : "mon";
        case 2:
            return capsOnFlag ? "TUE" : properCase ? "Tue" : "tue";
        case 3:
            return capsOnFlag ? "WED" : properCase ? "Wed" : "wed";
        case 4:
            return capsOnFlag ? "THU" : properCase ? "Thu" : "thu";
        case 5:
            return capsOnFlag ? "FRI" : properCase ? "Fri" : "fri";
        case 6:
            return capsOnFlag ? "SAT" : properCase ? "Sat" : "sat";
        default:
            return null;
    }
};
exports.getCustomDayNameShort = getCustomDayNameShort;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
const getCustomMonthNameFull = (capsOnFlag, properCaseFlag) => {
    const date = new Date();
    const properCase = properCaseFlag === false ? false : true;
    switch (date.getMonth()) {
        case 0:
            return capsOnFlag ? "JANUARY" : properCase ? "January" : "january";
        case 1:
            return capsOnFlag ? "FEBRUARY" : properCase ? "February" : "february";
        case 2:
            return capsOnFlag ? "MARCH" : properCase ? "March" : "march";
        case 3:
            return capsOnFlag ? "APRIL" : properCase ? "April" : "april";
        case 4:
            return capsOnFlag ? "MAY" : properCase ? "May" : "may";
        case 5:
            return capsOnFlag ? "JUNE" : properCase ? "June" : "june";
        case 6:
            return capsOnFlag ? "JULY" : properCase ? "July" : "july";
        case 7:
            return capsOnFlag ? "AUGUST" : properCase ? "August" : "august";
        case 8:
            return capsOnFlag ? "SEPTEMBER" : properCase ? "September" : "september";
        case 9:
            return capsOnFlag ? "OCTOBER" : properCase ? "October" : "october";
        case 10:
            return capsOnFlag ? "NOVEMBER" : properCase ? "November" : "november";
        case 11:
            return capsOnFlag ? "DECEMBER" : properCase ? "December" : "december";
        default:
            return null;
    }
};
exports.getCustomMonthNameFull = getCustomMonthNameFull;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
const getCustomMonthNameShort = (capsOnFlag, properCaseFlag) => {
    const date = new Date();
    const properCase = properCaseFlag === false ? false : true;
    switch (date.getMonth()) {
        case 0:
            return capsOnFlag ? "JAN" : properCase ? "Jan" : "jan";
        case 1:
            return capsOnFlag ? "FEB" : properCase ? "Feb" : "feb";
        case 2:
            return capsOnFlag ? "MAR" : properCase ? "Mar" : "mar";
        case 3:
            return capsOnFlag ? "APR" : properCase ? "Apr" : "apr";
        case 4:
            return capsOnFlag ? "MAY" : properCase ? "May" : "may";
        case 5:
            return capsOnFlag ? "JUN" : properCase ? "Jun" : "jun";
        case 6:
            return capsOnFlag ? "JUL" : properCase ? "Jul" : "jul";
        case 7:
            return capsOnFlag ? "AUG" : properCase ? "Aug" : "aug";
        case 8:
            return capsOnFlag ? "SEP" : properCase ? "Sep" : "sep";
        case 9:
            return capsOnFlag ? "OCT" : properCase ? "Oct" : "oct";
        case 10:
            return capsOnFlag ? "NOV" : properCase ? "Nov" : "nov";
        case 11:
            return capsOnFlag ? "DEC" : properCase ? "Dec" : "dec";
        default:
            return null;
    }
};
exports.getCustomMonthNameShort = getCustomMonthNameShort;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Today Date from (1 - 30 or 1 - 31) <= Default `Number` else you can change to `String`
 */
const getCustomDate = (changeToStringFlag) => {
    const d = new Date();
    const date = d.getDate();
    return date ? (changeToStringFlag ? String(date) : date) : null;
};
exports.getCustomDate = getCustomDate;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current hour in number (1 - 12) <= Default `Number` else you can change to `String`
 */
const getCustomHour = (changeToStringFlag) => {
    const d = new Date();
    const hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    return hour === 0
        ? changeToStringFlag
            ? String(12)
            : 12
        : hour
            ? changeToStringFlag
                ? String(hour)
                : hour
            : null;
};
exports.getCustomHour = getCustomHour;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */
const getCustomMinute = (changeToStringFlag) => {
    const d = new Date();
    const minute = d.getMinutes() >= 10
        ? changeToStringFlag
            ? String(d.getMinutes())
            : d.getMinutes()
        : `0${d.getMinutes()}`;
    return minute ? minute : null;
};
exports.getCustomMinute = getCustomMinute;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */
const getCustomSecond = (changeToStringFlag) => {
    const d = new Date();
    const seconds = d.getSeconds() >= 10
        ? changeToStringFlag
            ? String(d.getSeconds())
            : d.getSeconds()
        : `0${d.getSeconds()}`;
    return seconds ? seconds : null;
};
exports.getCustomSecond = getCustomSecond;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @returns `String` (Check `capsOnFlag` to return like AM or am | PM or pm)
 */
const getCustomAmPm = (capsOnFlag) => {
    const d = new Date();
    const amPm = d.getHours() >= 12 ? "pm" : "am";
    return amPm ? (capsOnFlag ? amPm.toUpperCase() : amPm) : null;
};
exports.getCustomAmPm = getCustomAmPm;
/**
 *
 * @param shortOrFullFlag By Default False which return the Day, Month in Short else Make True to return in Full
 * @param lowerOrUpperFlag By Default False which return the Day, Month in lowerCase else Make True to return in UpperCase
 * @returns The Full TimeStamp in `String` --> ( 10 OCT TUE 10:10AM - 10 Oct Tue 10:10am ) | ( 10 OCTOBER TUESDAY 10:10AM - 10 October Tuesday 10:10am )
 */
const getCustomFullDateAndTimeWithAmPm = (shortOrFullFlag, lowerOrUpperFlag) => {
    const timeStamp = `${(0, exports.getCustomDate)()} ${shortOrFullFlag
        ? (0, exports.getCustomMonthNameShort)(lowerOrUpperFlag ? lowerOrUpperFlag : false)
        : (0, exports.getCustomMonthNameFull)(lowerOrUpperFlag ? lowerOrUpperFlag : false)} ${shortOrFullFlag
        ? (0, exports.getCustomDayNameShort)(lowerOrUpperFlag ? lowerOrUpperFlag : false)
        : (0, exports.getCustomDayNameFull)(lowerOrUpperFlag ? lowerOrUpperFlag : false)} ${(0, exports.getCustomHour)()}:${(0, exports.getCustomMinute)()}${(0, exports.getCustomAmPm)(lowerOrUpperFlag ? lowerOrUpperFlag : false)}`;
    return timeStamp ? timeStamp : null;
};
exports.getCustomFullDateAndTimeWithAmPm = getCustomFullDateAndTimeWithAmPm;
/**
 *
 * @param shortOrFullFlag By Default False which return the Day, Month in Short else Make True to return in Full
 * @param lowerOrUpperFlag By Default False which return the Day, Month in lowerCase else Make True to return in UpperCase
 * @returns The Full TimeStamp in `String` --> ( 10 OCT TUE 10:10:00AM - 10 Oct Tue 10:10:00am ) | ( 10 OCTOBER TUESDAY 10:10:00AM - 10 October Tuesday 10:10:00am )
 */
const getCustomFullDateAndTimeWithAmPmIncludingSeconds = (shortOrFullFlag, lowerOrUpperFlag) => {
    const timeStamp = `${(0, exports.getCustomDate)()} ${shortOrFullFlag
        ? (0, exports.getCustomMonthNameShort)(lowerOrUpperFlag ? lowerOrUpperFlag : false)
        : (0, exports.getCustomMonthNameFull)(lowerOrUpperFlag ? lowerOrUpperFlag : false)} ${shortOrFullFlag
        ? (0, exports.getCustomDayNameShort)(lowerOrUpperFlag ? lowerOrUpperFlag : false)
        : (0, exports.getCustomDayNameFull)(lowerOrUpperFlag ? lowerOrUpperFlag : false)} ${(0, exports.getCustomHour)()}:${(0, exports.getCustomMinute)()}:${(0, exports.getCustomSecond)()}${(0, exports.getCustomAmPm)(lowerOrUpperFlag ? lowerOrUpperFlag : false)}`;
    return timeStamp ? timeStamp : null;
};
exports.getCustomFullDateAndTimeWithAmPmIncludingSeconds = getCustomFullDateAndTimeWithAmPmIncludingSeconds;
//# sourceMappingURL=index.js.map