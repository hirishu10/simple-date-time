import { useMonthDayHook } from "../../utils/useMonthDayHook";
import { getCustomAmPm } from "./getCustomAmPm";
import { getCustomDate } from "./getCustomDate";
import { getCustomHour } from "./getCustomHour";
import { getCustomMinute } from "./getCustomMinute";

/**
 * 
 * @param timeStampFlag condition: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase"
 * @returns `String`:  10 OCT TUE 10:10AM | 10 Oct Tue 10:10am | 10 OCTOBER TUESDAY 10:10PM | 10 October Tuesday 10:10pm
 */

export const getCustomFullDateAndTimeWithAmPm = (timeStampFlag: "shortForm_upperCase" | "shortForm_lowerCase" | "fullForm_upperCase" | "fullForm_lowerCase") => {
  const DATE = getCustomDate();
  const MONTH_DAY = useMonthDayHook(timeStampFlag);
  const HOUR = getCustomHour();
  const MINUTE = getCustomMinute(true);
  const AM_PM = getCustomAmPm(timeStampFlag === "shortForm_upperCase" ? "u" : timeStampFlag === "fullForm_upperCase" ? "u" : undefined);

  return `${DATE} ${MONTH_DAY} ${HOUR}:${MINUTE}${AM_PM}`;
};
