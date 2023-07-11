/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Today Date from (1 - 30 or 1 - 31) <= Default `Number` else you can change to `String`
 */

export const getCustomDate = (changeToStringFlag?: boolean | undefined | null) => {
  const d = new Date();
  const date = d.getDate();
  return changeToStringFlag ? String(date) : date;
};
