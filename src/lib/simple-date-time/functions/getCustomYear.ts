/**
 * 
 * @param yearFlag provide "yy" | "yyyy" for return the year
 * @returns `String`
 */

export const getCustomYear = (yearFlag: "yy" | "yyyy") => {
    const d = new Date();
    const year = String(d.getFullYear());
    return yearFlag === "yy" ? year.substring(2) : year
};