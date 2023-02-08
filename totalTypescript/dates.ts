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
