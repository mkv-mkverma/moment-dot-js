import { Component } from "@angular/core";
import moment from "moment";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 5";
  public months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  constructor() {}
  ngOnInit() {
    console.log("3m", this.getMonthRange("3m", "MMM-YYYY"));
    console.log("6m", this.getMonthRange("6m", "MMM-YYYY"));
    console.log("9m", this.getMonthRange("9m", "MMM-YYYY"));
    console.log("1y", this.getMonthRange("1y", "MMM-YYYY"));
    console.log("3ys", this.getMonthRange("3ys", "MMM-YYYY"));
    console.log("5ys", this.getMonthRange("5ys"));
    console.log("none", this.getMonthRange());
    let date = new Date('2012-02');
    let momentDate = moment(date);
    // console.log("days", this.getNoOfDays(momentDate));
    console.log("days", this.getNoOfDays());
    console.log("arrayday", this.daysInArray(this.getNoOfDays(momentDate)));
  }

  public getMonthRange(selectionBy: string = "9m", FORMAT: string = "DD-MMM-YYYY") {
    let now = moment(); // add this 2 of 4
    let tempDate = now.format(FORMAT);
    switch (selectionBy) {
      case "3m":
        tempDate = now.subtract(3, "months").format(FORMAT);
        break;
      case "6m":
        tempDate = now.subtract(6, "months").format(FORMAT);
        break;
      case "9m":
        tempDate = now.subtract(9, "months").format(FORMAT);
        break;
      case "1y":
        tempDate = now.subtract(1, "years").format(FORMAT);
        break;
      case "3ys":
        tempDate = now.subtract(3, "years").format(FORMAT);
        break;
      case "5ys":
        tempDate = now.subtract(5, "years").format(FORMAT);
        break;
      default:
        tempDate = now.subtract(6, "months").format(FORMAT);
        break;
    }
    return tempDate;
  }
  // To get no of days based on date
  public getNoOfDays(date = moment(), FORMAT: string = "YYYY-MM"){
    date = (moment(date,FORMAT))
    let now = moment();
    let days = moment().daysInMonth();
    days = moment(date, FORMAT).daysInMonth();
    return days
  }

  public daysInArray(totalDays: number | string = 30){
    let tempDate = [];
    for (let index = 1; index <= Number(totalDays); index++) {
            tempDate.push(index) 
        }
    return tempDate
  }
}
