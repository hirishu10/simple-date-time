/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current hour in number (1 - 12) <= Default `Number` else you can change to `String`
 */

export const getCustomHour = (changeToStringFlag?: boolean | undefined | null) => {
  const d = new Date();
  const hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  return hour === 0 ? changeToStringFlag ? String(12) : 12 : changeToStringFlag ? String(hour) : hour;
};
