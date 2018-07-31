import { Component, OnInit } from "@angular/core";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styleUrls: ["./inputs.component.css"]
})
export class InputsComponent implements OnInit {
  currencies = [];
  currency = "USD";
  constructor(public currencyService: CurrencyService) {}
  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(data => {
      this.currencies = Object.keys(data.rates);
      this.currencies.push("EUR");
    });
  }
  header: string;
  keyUp(val) {
    console.log(val);
  }
}
