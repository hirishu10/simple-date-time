"use strict";
/**
 *
 * @param yearFlag provide "yy" | "yyyy" for return the year
 * @returns `String`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomYear = void 0;
const getCustomYear = (yearFlag) => {
    const d = new Date();
    const year = String(d.getFullYear());
    return yearFlag === "yy" ? year.substring(2) : year;
};
exports.getCustomYear = getCustomYear;
//# sourceMappingURL=getCustomYear.js.map