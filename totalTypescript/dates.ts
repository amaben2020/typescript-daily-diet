import { format, lastDayOfMonth } from "date-fns";
import moment from "moment";
const today = new Date();
const CurrentDate = format(lastDayOfMonth(today), "yyyy-MM-dd");

// console.log("Current date", CurrentDate);

const CurrentDat = moment(
  new Date(
    today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
  ),
);
// console.log("Current Moment", CurrentDat);

const cardMonthAndYearValue = "03/23".split("/");

const expiryDate = new Date(
  Number(`20${cardMonthAndYearValue[1]}`),
  Number(cardMonthAndYearValue[0]),
  0,
);

// console.log("Expiry", format(expiryDate, "yyyy-MM-dd"));

// look at advanced callbacks

const update = (info: string) => {
  console.log("Info", info);
  return [...info];
};
console.log(update("o"));
console.log(update("a"));

type TOrdinalSuffix = "th" | "st" | "nd" | "th" | "rd";

export const computeAndFormatDate = (date: number) => {
  const dateObj = new Date(date as number);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  const ordinalSuffixFormatter = (number: number): TOrdinalSuffix => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${ordinalSuffixFormatter(day)} ${month}, ${year}`;
};

// understand the switch
