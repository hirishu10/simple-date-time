"use strict";
/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current Month from (1 - 12) <= Default `Number` else you can change to `String`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomMonth = void 0;
const getCustomMonth = (changeToStringFlag) => {
    const d = new Date();
    const monthN = d.getMonth();
    return changeToStringFlag ? String(monthN + 1) : monthN + 1;
};
exports.getCustomMonth = getCustomMonth;
//# sourceMappingURL=getCustomMonth.js.map