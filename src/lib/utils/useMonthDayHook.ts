import { getCustomDayNameFull, getCustomDayNameShort, getCustomMonthNameFull, getCustomMonthNameShort } from "../simple-date-time";

/**
 * 
 * @param timeStampFlag value to check and return the data
 * @returns `String`
 */

export const useMonthDayHook = (timeStampFlag: string) => {
  switch (timeStampFlag) {
    case "shortForm_upperCase":
      return `${getCustomMonthNameShort("u")} ${getCustomDayNameShort("u")}`;
    case "fullForm_upperCase":
      return `${getCustomMonthNameFull("u")} ${getCustomDayNameFull("u")}`;
    case "shortForm_lowerCase":
      return `${getCustomMonthNameShort("p")} ${getCustomDayNameShort("p")}`;
    case "fullForm_lowerCase":
      return `${getCustomMonthNameFull("p")} ${getCustomDayNameFull("p")}`;
    default:
      return `${getCustomMonthNameShort("p")} ${getCustomDayNameShort("p")}`;
  }
}