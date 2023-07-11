/**
 *
 * @param changeToStringFlag Totally Optional if you need in String make true the flag else ignore
 * @returns Current minute in number (1 - 60) <= Default `Number` else you can change to `String`
 */

export const getCustomSecond = (changeToStringFlag?: boolean | undefined | null) => {
  const d = new Date();
  const seconds = d.getSeconds();
  return seconds >= 10 ? changeToStringFlag ? String(seconds) : seconds : changeToStringFlag ? `0${seconds}` : Number(`0${seconds}`);
};
