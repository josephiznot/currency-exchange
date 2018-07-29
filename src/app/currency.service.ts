import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Currency } from "./currency";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  to: string = "AUD";
  from: string = "AUD";
  rate: any = 1;
  selected({ target }) {
    this[target.name] = target.value;
    console.log(this[target.name]);
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
  getSelected(val) {
    console.log("getSelected", this[val]);
    return this[val];
  }
  getRate() {
    return this.http.get<Currency>(
      `https://exchangeratesapi.io/api/latest?base=${this.from}&symbols=${
        this.to
      }`
    );
  }
  getCurrencies() {
    return this.http.get<Currency>("https://exchangeratesapi.io/api/latest");
  }
}
