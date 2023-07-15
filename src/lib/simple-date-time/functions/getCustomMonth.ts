/**
 * 
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current Month from (1 - 12) <= Default `Number` else you can change to `String`
 */

export const getCustomMonth = (changeToStringFlag?: boolean | undefined | null) => {
    const d = new Date();
    const monthN = d.getMonth();
    return changeToStringFlag ? String(monthN + 1) : monthN + 1;
};
