/**
 * 
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase or "p" for the proper case.
 * @returns `String`
 */

export const getCustomMonthNameFull = (caseFlag?: "u" | "p" | undefined | null) => {
  const date = new Date();
  switch (date.getMonth()) {
    case 0:
      return caseFlag === "u" ? "JANUARY" : caseFlag === "p" ? "January" : "january";
    case 1:
      return caseFlag === "u" ? "FEBRUARY" : caseFlag === "p" ? "February" : "february";
    case 2:
      return caseFlag === "u" ? "MARCH" : caseFlag === "p" ? "March" : "march";
    case 3:
      return caseFlag === "u" ? "APRIL" : caseFlag === "p" ? "April" : "april";
    case 4:
      return caseFlag === "u" ? "MAY" : caseFlag === "p" ? "May" : "may";
    case 5:
      return caseFlag === "u" ? "JUNE" : caseFlag === "p" ? "June" : "june";
    case 6:
      return caseFlag === "u" ? "JULY" : caseFlag === "p" ? "July" : "july";
    case 7:
      return caseFlag === "u" ? "AUGUST" : caseFlag === "p" ? "August" : "august";
    case 8:
      return caseFlag === "u" ? "SEPTEMBER" : caseFlag === "p" ? "September" : "september";
    case 9:
      return caseFlag === "u" ? "OCTOBER" : caseFlag === "p" ? "October" : "october";
    case 10:
      return caseFlag === "u" ? "NOVEMBER" : caseFlag === "p" ? "November" : "november";
    case 11:
      return caseFlag === "u" ? "DECEMBER" : caseFlag === "p" ? "December" : "december";
    default:
      return "";
  }
};
