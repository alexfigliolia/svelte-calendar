export class Dates {
  static months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ] as const;

  static days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const;

  static daysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  static firstDayInMonth(month: number, year: number) {
    return new Date(year, month, 1).getDay();
  }
}
