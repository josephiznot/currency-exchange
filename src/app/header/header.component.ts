import { Component, OnInit } from "@angular/core";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private currencyService: CurrencyService) {}
  ngOnInit() {}
}
