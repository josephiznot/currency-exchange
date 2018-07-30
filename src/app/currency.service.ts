import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Currency } from "./currency";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  constructor(public http: HttpClient) {}
  to: string = "AUD";
  from: string = "AUD";
  rate: any = 1;
  fromInput: string;
  toInput: string;
  selected({ target }: any) {
    if (!this.fromInput || !this.toInput) {
    }

    this[target.name] = target.value;
    this.http
      .get(
        `https://exchangeratesapi.io/api/latest?base=${this.from}&symbols=${
          this.to
        }`
      )
      .subscribe(({ rates }: any) => {
        this.rate = Object.values(rates)[0];
        this.rate = Math.round(this.rate * 100) / 100; //ROUND 2 DECIMAL PLACES
        console.log(this.rate);
      });
  }
  getCurrencies() {
    return this.http.get<Currency>("https://exchangeratesapi.io/api/latest");
  }
  handleChange({ name, value }) {
    this[name] = value;
  }
}
