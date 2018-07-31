import { Component, OnInit } from "@angular/core";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {}
}
