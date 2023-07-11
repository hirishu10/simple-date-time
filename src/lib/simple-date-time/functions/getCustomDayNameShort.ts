/**
 * 
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase or "p" for the proper case.
 * @returns `String`
 */

export const getCustomDayNameShort = (caseFlag?: "u" | "p" | undefined | null) => {
  const date = new Date();
  switch (date.getDay()) {
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
