import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Currency } from "./currency";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  constructor(public http: HttpClient) {}
  from: string = "AUD";
  to: string = "AUD";
  fromHeader: number = 1;
  toHeader: number = 1;
  rate: number = 1;
  fromInput: number = 1;
  toInput: number = 1;
  warningActive: boolean = false;

  selected(event: any) {
    if (!this.fromInput || !this.toInput) {
      this.warningActive = true; //toggle warning
      return;
    }
    this.warningActive = false; //toggle warning
    //proceed
    this[event.target.name] = event.target.value; //updates currency symbol(from or to)
    this.http
      .get(
        `https://exchangeratesapi.io/api/latest?base=${this.from}&symbols=${
          this.to
        }`
      )
      .subscribe(({ rates }: any) => {
        this.rate = +Object.values(rates)[0];
        this.toInput = this.fromInput * this.rate;
        this.fromHeader = this.fromInput; //updates header
        this.toHeader = this.toInput; //updates header
      });
  }
  getCurrencies() {
    return this.http.get<Currency>("https://exchangeratesapi.io/api/latest");
  }
  handleChange({ name, value }) {
    if (value.length == 0 || value <= 0) {
      this.warningActive = true; //throw error message
    } else {
      this.warningActive = false; //user input should rid error message
    }
    this[name] = +value; //update fromInput or toInput
    if (name == "fromInput") {
      return (this.toInput = this.rate * this[name]);
    }
    return (this.fromInput = this[name] / this.rate);
  }

  getPoints() {
    //String(new Date())
    function formatDate(obj) {
      return JSON.stringify(obj)
        .split("")
        .splice(1, 10)
        .join("");
    }

    function getDates() {
      let arr = [];
      for (let i = 30; i >= 0; i--) {
        arr.push(
          formatDate(new Date(new Date().setDate(new Date().getDate() - i)))
        );
      }
      return arr;
    }

    let arr = getDates(); //returns array of dates
    return forkJoin(
      //Promise.all()
      arr.map(e => {
        return this.http.get(
          `https://exchangeratesapi.io/api/${e}?base=${this.from}&symbols=${
            this.to
          }`
        );
      })
    );
  }
}
