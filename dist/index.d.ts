/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
export declare const getCustomDayNameFull: (capsOnFlag?: boolean | undefined | null, properCaseFlag?: boolean | undefined | null) => "SUNDAY" | "Sunday" | "sunday" | "MONDAY" | "Monday" | "monday" | "TUESDAY" | "Tuesday" | "tuesday" | "WEDNESDAY" | "Wednesday" | "wednesday" | "THURSDAY" | "Thursday" | "thursday" | "FRIDAY" | "Friday" | "friday" | "SATURDAY" | "Saturday" | "saturday" | null;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
export declare const getCustomDayNameShort: (capsOnFlag?: boolean | undefined | null, properCaseFlag?: boolean | undefined | null) => "SUN" | "Sun" | "sun" | "MON" | "Mon" | "mon" | "TUE" | "Tue" | "tue" | "WED" | "Wed" | "wed" | "THU" | "Thu" | "thu" | "FRI" | "Fri" | "fri" | "SAT" | "Sat" | "sat" | null;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
export declare const getCustomMonthNameFull: (capsOnFlag?: boolean | undefined | null, properCaseFlag?: boolean | undefined | null) => "JANUARY" | "January" | "january" | "FEBRUARY" | "February" | "february" | "MARCH" | "March" | "march" | "APRIL" | "April" | "april" | "MAY" | "May" | "may" | "JUNE" | "June" | "june" | "JULY" | "July" | "july" | "AUGUST" | "August" | "august" | "SEPTEMBER" | "September" | "september" | "OCTOBER" | "October" | "october" | "NOVEMBER" | "November" | "november" | "DECEMBER" | "December" | "december" | null;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @param properCaseFlag By default True | Providing this the String will return in Proper structure
 * @returns - `String`
 */
export declare const getCustomMonthNameShort: (capsOnFlag?: boolean | undefined | null, properCaseFlag?: boolean | undefined | null) => "MAY" | "May" | "may" | "JAN" | "Jan" | "jan" | "FEB" | "Feb" | "feb" | "MAR" | "Mar" | "mar" | "APR" | "Apr" | "apr" | "JUN" | "Jun" | "jun" | "JUL" | "Jul" | "jul" | "AUG" | "Aug" | "aug" | "SEP" | "Sep" | "sep" | "OCT" | "Oct" | "oct" | "NOV" | "Nov" | "nov" | "DEC" | "Dec" | "dec" | null;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Today Date from (1 - 30 or 1 - 31) <= Default `Number` else you can change to `String`
 */
export declare const getCustomDate: (changeToStringFlag?: boolean | undefined | null) => string | number | null;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current hour in number (1 - 12) <= Default `Number` else you can change to `String`
 */
export declare const getCustomHour: (changeToStringFlag?: boolean | undefined | null) => string | number | null;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */
export declare const getCustomMinute: (changeToStringFlag?: boolean | undefined | null) => string | number | null;
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */
export declare const getCustomSecond: (changeToStringFlag?: boolean | undefined | null) => string | number | null;
/**
 *
 * @param capsOnFlag By default False | If Provide True then return the String in UpperCase else in LowerCase
 * @returns `String` (Check `capsOnFlag` to return like AM or am | PM or pm)
 */
export declare const getCustomAmPm: (capsOnFlag: boolean | undefined | null) => string | null;
/**
 *
 * @param shortOrFullFlag By Default False which return the Day, Month in Short else Make True to return in Full
 * @param lowerOrUpperFlag By Default False which return the Day, Month in lowerCase else Make True to return in UpperCase
 * @returns The Full TimeStamp in `String` --> ( 10 OCT TUE 10:10AM - 10 Oct Tue 10:10am ) | ( 10 OCTOBER TUESDAY 10:10AM - 10 October Tuesday 10:10am )
 */
export declare const getCustomFullDateAndTimeWithAmPm: (shortOrFullFlag?: boolean | undefined, lowerOrUpperFlag?: boolean | undefined) => string | null;
/**
 *
 * @param shortOrFullFlag By Default False which return the Day, Month in Short else Make True to return in Full
 * @param lowerOrUpperFlag By Default False which return the Day, Month in lowerCase else Make True to return in UpperCase
 * @returns The Full TimeStamp in `String` --> ( 10 OCT TUE 10:10:00AM - 10 Oct Tue 10:10:00am ) | ( 10 OCTOBER TUESDAY 10:10:00AM - 10 October Tuesday 10:10:00am )
 */
export declare const getCustomFullDateAndTimeWithAmPmIncludingSeconds: (shortOrFullFlag?: boolean | undefined, lowerOrUpperFlag?: boolean | undefined) => string | null;
//# sourceMappingURL=index.d.ts.map