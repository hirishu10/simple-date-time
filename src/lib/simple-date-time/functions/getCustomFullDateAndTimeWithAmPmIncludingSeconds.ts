import { useMonthDayHook } from "../../utils/useMonthDayHook";
import { getCustomAmPm } from "./getCustomAmPm";
import { getCustomDate } from "./getCustomDate";
import { getCustomHour } from "./getCustomHour";
import { getCustomMinute } from "./getCustomMinute";
import { getCustomSecond } from "./getCustomSecond";

/**
 * 
 * @param timeStampFlag condition: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase"
 * @returns `String`:  10 OCT TUE 10:10:10 AM | 10 Oct Tue 10:10:10 am | 10 OCTOBER TUESDAY 10:10:10 PM | 10 October Tuesday 10:10:10 pm
 */

export const getCustomFullDateAndTimeWithAmPmIncludingSeconds = (timeStampFlag: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase") => {
  const DATE = getCustomDate();
  const MONTH_DAY = useMonthDayHook(timeStampFlag);
  const HOUR = getCustomHour();
  const MINUTE = getCustomMinute(true);
  const SECOND = getCustomSecond(true);
  const AM_PM = getCustomAmPm(timeStampFlag === "shortForm_upperCase" ? "u" : timeStampFlag === "fullForm_upperCase" ? "u" : undefined);

  return `${DATE} ${MONTH_DAY} ${HOUR}:${MINUTE}:${SECOND} ${AM_PM}`;
};