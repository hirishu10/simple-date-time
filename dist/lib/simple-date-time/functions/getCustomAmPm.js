"use strict";
/**
 *
 * @param caseFlag lowercase by default | Providing the string "u" will be in uppercase.
 * @returns `String` (Check `caseFlag` to return like AM or am | PM or pm)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomAmPm = void 0;
const getCustomAmPm = (caseFlag) => {
    const d = new Date();
    const amPm = d.getHours() >= 12 ? "pm" : "am";
    return caseFlag === "u" ? amPm.toUpperCase() : amPm;
};
exports.getCustomAmPm = getCustomAmPm;
//# sourceMappingURL=getCustomAmPm.js.map