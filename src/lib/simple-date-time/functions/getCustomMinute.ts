/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */

export const getCustomMinute = (changeToStringFlag?: boolean | undefined | null) => {
  const d = new Date();
  const minute = d.getMinutes();
  return minute >= 10 ? changeToStringFlag ? String(minute) : minute : changeToStringFlag ? `0${minute}` : Number(`0${minute}`);
};
