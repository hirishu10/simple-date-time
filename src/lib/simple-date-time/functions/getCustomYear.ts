/**
 * 
 * @param caseFlag provide "yy" | "yyyy" for return the year
 * @returns `String`
 */

export const getCustomYear = (caseFlag: "yy" | "yyyy") => {
    const d = new Date();
    const year = String(d.getFullYear());
    return caseFlag === "yy" ? year.substring(2) : year
};