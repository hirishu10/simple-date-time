/**
 * 
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase or "p" for the proper case.
 * @returns `String`
 */

export const getCustomDayNameFull = (caseFlag?: "u" | "p" | undefined | null) => {
  const date = new Date();
  switch (date.getDay()) {
    case 0:
      return caseFlag === "u" ? "SUNDAY" : caseFlag === "p" ? "Sunday" : "sunday";
    case 1:
      return caseFlag === "u" ? "MONDAY" : caseFlag === "p" ? "Monday" : "monday";
    case 2:
      return caseFlag === "u" ? "TUESDAY" : caseFlag === "p" ? "Tuesday" : "tuesday";
    case 3:
      return caseFlag === "u" ? "WEDNESDAY" : caseFlag === "p" ? "Wednesday" : "wednesday";
    case 4:
      return caseFlag === "u" ? "THURSDAY" : caseFlag === "p" ? "Thursday" : "thursday";
    case 5:
      return caseFlag === "u" ? "FRIDAY" : caseFlag === "p" ? "Friday" : "friday";
    case 6:
      return caseFlag === "u" ? "SATURDAY" : caseFlag === "p" ? "Saturday" : "saturday";
    default:
      return "";
  }
};