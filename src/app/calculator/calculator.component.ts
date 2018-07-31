import { Component, OnInit } from "@angular/core";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  constructor(public currencyService: CurrencyService) {}
  warning: string = "Failed to get conversion result for given currencies";
  ngOnInit() {}
}
