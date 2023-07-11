/**
 *
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase.
 * @returns `String` (Check `caseFlag` to return like AM or am | PM or pm)
 */

export const getCustomAmPm = (caseFlag?: "u" | undefined | null) => {
  const d = new Date();
  const amPm = d.getHours() >= 12 ? "pm" : "am";
  return caseFlag === "u" ? amPm.toUpperCase() : amPm;
};
