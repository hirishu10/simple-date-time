/**
 * 
 * @param dateValue default current date will be displayed otherwise enter datevalue unix number for paarticular date.
 * @returns `String`
 */

export const getCustomDTFormatter = (dateValue?: number) => {

  type typeOfInsertCharacters = {
    yy?: string;
    yyyy?: string;
    M?: string;
    Mu?: string;
    Mp?: string;
    MM?: string;
    MMu?: string;
    MMp?: string;
    mt?: string;
    dt?: string;
    d?: string;
    du?: string;
    dp?: string;
    dd?: string;
    ddu?: string;
    ddp?: string;
    m?: string;
    h?: string;
    s?: string;
    ap?: string;
    apu?: string;
    "h:m:s"?: string;
    "h:m"?: string;
  };

  const d = dateValue === undefined ? new Date() : dateValue === null ? new Date() : new Date(dateValue);

  /**
   * 
   * @param formatValue Format to show date time value.
   * @returns `String` Return formatted timeStamp
   * 
   * 
   * Example Below:
   * 
   * Year : yy => for last two digits, yyyy => full year,
   * 
   * Month : M => oct, Mu => OCT, Mp => Oct  |  MM => october, MMu => OCTOBER, MMp => October,
   * 
   * Day : d => fri, du => FRI, dp => Fri  |  dd => friday, ddu => FRIDAY, ddp => Friday,
   * 
   * Month In Number : mt => 10
   * 
   * Date : dt => 10
   * 
   * Hour : h => 10
   * 
   * Minute : m => 10
   * 
   * Second : s => 10
   * 
   * am/pm : ap => am or pm, apu => AM or PM,
   *
   */
  function format(formatValue: string,
    insertCharacters?: typeOfInsertCharacters
  ) {
    const flagData = formatValue.split(" ");
    let customTimeStamp = "";
    flagData?.forEach((eachItem) => {
      customTimeStamp = customTimeStamp + checkFlag(eachItem, insertCharacters);
    })
    return customTimeStamp;
  }

  const getCustomYear = (yearFlag: "yy" | "yyyy") => {
    const year = String(d.getFullYear());
    return yearFlag === "yy" ? year.substring(2) : year
  };

  const getCustomDate = (changeToStringFlag?: boolean | undefined | null) => {
    const date = d.getDate();
    return changeToStringFlag ? String(date) : date;
  };

  const getCustomHour = (changeToStringFlag?: boolean | undefined | null) => {
    const hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    return hour === 0 ? changeToStringFlag ? String(12) : 12 : changeToStringFlag ? String(hour) : hour;
  };

  const getCustomMinute = (changeToStringFlag?: boolean | undefined | null) => {
    const minute = d.getMinutes();
    return minute >= 10 ? changeToStringFlag ? String(minute) : minute : changeToStringFlag ? `0${minute}` : Number(`0${minute}`);
  };

  const getCustomSecond = (changeToStringFlag?: boolean | undefined | null) => {
    const seconds = d.getSeconds();
    return seconds >= 10 ? changeToStringFlag ? String(seconds) : seconds : changeToStringFlag ? `0${seconds}` : Number(`0${seconds}`);
  };

  const getCustomAmPm = (caseFlag?: "u" | undefined | null) => {
    const amPm = d.getHours() >= 12 ? "pm" : "am";
    return caseFlag === "u" ? amPm.toUpperCase() : amPm;
  };

  const getCustomMonth = (changeToStringFlag?: boolean | undefined | null) => {
    const monthN = d.getMonth();
    return changeToStringFlag ? String(monthN + 1) : monthN + 1;
  };

  const getCustomMonthNameShort = (caseFlag?: "u" | "p" | undefined | null) => {
    switch (d.getMonth()) {
      case 0:
        return caseFlag === "u" ? "JAN" : caseFlag === "p" ? "Jan" : "jan";
      case 1:
        return caseFlag === "u" ? "FEB" : caseFlag === "p" ? "Feb" : "feb";
      case 2:
        return caseFlag === "u" ? "MAR" : caseFlag === "p" ? "Mar" : "mar";
      case 3:
        return caseFlag === "u" ? "APR" : caseFlag === "p" ? "Apr" : "apr";
      case 4:
        return caseFlag === "u" ? "MAY" : caseFlag === "p" ? "May" : "may";
      case 5:
        return caseFlag === "u" ? "JUN" : caseFlag === "p" ? "Jun" : "jun";
      case 6:
        return caseFlag === "u" ? "JUL" : caseFlag === "p" ? "Jul" : "jul";
      case 7:
        return caseFlag === "u" ? "AUG" : caseFlag === "p" ? "Aug" : "aug";
      case 8:
        return caseFlag === "u" ? "SEP" : caseFlag === "p" ? "Sep" : "sep";
      case 9:
        return caseFlag === "u" ? "OCT" : caseFlag === "p" ? "Oct" : "oct";
      case 10:
        return caseFlag === "u" ? "NOV" : caseFlag === "p" ? "Nov" : "nov";
      case 11:
        return caseFlag === "u" ? "DEC" : caseFlag === "p" ? "Dec" : "dec";
      default:
        return "";
    }
  };

  const getCustomMonthNameFull = (caseFlag?: "u" | "p" | undefined | null) => {
    switch (d.getMonth()) {
      case 0:
        return caseFlag === "u" ? "JANUARY" : caseFlag === "p" ? "January" : "january";
      case 1:
        return caseFlag === "u" ? "FEBRUARY" : caseFlag === "p" ? "February" : "february";
      case 2:
        return caseFlag === "u" ? "MARCH" : caseFlag === "p" ? "March" : "march";
      case 3:
        return caseFlag === "u" ? "APRIL" : caseFlag === "p" ? "April" : "april";
      case 4:
        return caseFlag === "u" ? "MAY" : caseFlag === "p" ? "May" : "may";
      case 5:
        return caseFlag === "u" ? "JUNE" : caseFlag === "p" ? "June" : "june";
      case 6:
        return caseFlag === "u" ? "JULY" : caseFlag === "p" ? "July" : "july";
      case 7:
        return caseFlag === "u" ? "AUGUST" : caseFlag === "p" ? "August" : "august";
      case 8:
        return caseFlag === "u" ? "SEPTEMBER" : caseFlag === "p" ? "September" : "september";
      case 9:
        return caseFlag === "u" ? "OCTOBER" : caseFlag === "p" ? "October" : "october";
      case 10:
        return caseFlag === "u" ? "NOVEMBER" : caseFlag === "p" ? "November" : "november";
      case 11:
        return caseFlag === "u" ? "DECEMBER" : caseFlag === "p" ? "December" : "december";
      default:
        return "";
    }
  };

  const getCustomDayNameShort = (caseFlag?: "u" | "p" | undefined | null) => {
    switch (d.getDay()) {
      case 0:
        return caseFlag === "u" ? "SUN" : caseFlag === "p" ? "Sun" : "sun";
      case 1:
        return caseFlag === "u" ? "MON" : caseFlag === "p" ? "Mon" : "mon";
      case 2:
        return caseFlag === "u" ? "TUE" : caseFlag === "p" ? "Tue" : "tue";
      case 3:
        return caseFlag === "u" ? "WED" : caseFlag === "p" ? "Wed" : "wed";
      case 4:
        return caseFlag === "u" ? "THU" : caseFlag === "p" ? "Thu" : "thu";
      case 5:
        return caseFlag === "u" ? "FRI" : caseFlag === "p" ? "Fri" : "fri";
      case 6:
        return caseFlag === "u" ? "SAT" : caseFlag === "p" ? "Sat" : "sat";
      default:
        return "";
    }
  };

  const getCustomDayNameFull = (caseFlag?: "u" | "p" | undefined | null) => {
    switch (d.getDay()) {
      case 0:
        return caseFlag === "u" ? "SUNDAY" : caseFlag === "p" ? "Sunday" : "sunday";
      case 1:
        return caseFlag === "u" ? "MONDAY" : caseFlag === "p" ? "Monday" : "monday";
      case 2:
        return caseFlag === "u" ? "TUESDAY" : caseFlag === "p" ? "Tuesday" : "tuesday";
      case 3:
        return caseFlag === "u" ? "WEDNESDAY" : caseFlag === "p" ? "Wednesday" : "wednesday";
      case 4:
        return caseFlag === "u" ? "THURSDAY" : caseFlag === "p" ? "Thursday" : "thursday";
      case 5:
        return caseFlag === "u" ? "FRIDAY" : caseFlag === "p" ? "Friday" : "friday";
      case 6:
        return caseFlag === "u" ? "SATURDAY" : caseFlag === "p" ? "Saturday" : "saturday";
      default:
        return "";
    }
  };

  const checkFlag = (flagValue: string,
    lastChar?: typeOfInsertCharacters) => {
    switch (flagValue) {
      case "yy":
        return `${getCustomYear("yy")}${lastChar?.yy != undefined ? lastChar?.yy : " "}`;
      case "yyyy":
        return `${getCustomYear("yyyy")}${lastChar?.yyyy != undefined ? lastChar?.yyyy : " "}`;
      case "M":
        return `${getCustomMonthNameShort()}${lastChar?.M != undefined ? lastChar?.M : " "}`;
      case "Mu":
        return `${getCustomMonthNameShort("u")}${lastChar?.Mu != undefined ? lastChar?.Mu : " "}`;
      case "Mp":
        return `${getCustomMonthNameShort("p")}${lastChar?.Mp != undefined ? lastChar?.Mp : " "}`;
      case "MM":
        return `${getCustomMonthNameFull()}${lastChar?.MM != undefined ? lastChar?.MM : " "}`;
      case "MMu":
        return `${getCustomMonthNameFull("u")}${lastChar?.MMu != undefined ? lastChar?.MMu : " "}`;
      case "MMp":
        return `${getCustomMonthNameFull("p")}${lastChar?.MMp != undefined ? lastChar?.MMp : " "}`;
      case "mt":
        return `${getCustomMonth(true)}${lastChar?.mt != undefined ? lastChar?.mt : " "}`;
      case "dt":
        return `${getCustomDate()}${lastChar?.dt != undefined ? lastChar?.dt : " "}`;
      case "d":
        return `${getCustomDayNameShort()}${lastChar?.d != undefined ? lastChar?.d : " "}`;
      case "du":
        return `${getCustomDayNameShort("u")}${lastChar?.du != undefined ? lastChar?.du : " "}`;
      case "dp":
        return `${getCustomDayNameShort("p")}${lastChar?.dp != undefined ? lastChar?.dp : " "}`;
      case "dd":
        return `${getCustomDayNameFull()}${lastChar?.dd != undefined ? lastChar?.dd : " "}`;
      case "ddu":
        return `${getCustomDayNameFull("u")}${lastChar?.ddu != undefined ? lastChar?.ddu : " "}`;
      case "ddp":
        return `${getCustomDayNameFull("p")}${lastChar?.ddp != undefined ? lastChar?.ddp : " "}`;
      case "m":
        return `${getCustomMinute(true)}${lastChar?.m != undefined ? lastChar?.m : " "}`;
      case "h":
        return `${getCustomHour()}${lastChar?.h != undefined ? lastChar?.h : " "}`;
      case "s":
        return `${getCustomSecond(true)}${lastChar?.s != undefined ? lastChar?.s : " "}`;
      case "ap":
        return `${getCustomAmPm()}${lastChar?.ap != undefined ? lastChar?.ap : " "}`;
      case "apu":
        return `${getCustomAmPm("u")}${lastChar?.apu != undefined ? lastChar?.apu : " "}`;
      case "h:m:s":
        return `${getCustomHour()}:${getCustomMinute(true)}:${getCustomSecond(true)}${lastChar?.["h:m:s"] != undefined ? lastChar?.["h:m:s"] : " "}`;
      case "h:m":
        return `${getCustomHour()}:${getCustomMinute(true)}${lastChar?.["h:m"] != undefined ? lastChar?.["h:m"] : " "}`;
      default:
        return "";
    }
  }

  return { format };
};
