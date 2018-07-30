import { Injectable } from "@angular/core";
import { CurrencyService } from "./currency.service";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  warning: string = "Failed to get conversion result for given currencies";
  flag: boolean = false;
  constructor(private currencyService: CurrencyService) {}

  toggleWarning() {
    this.flag = !this.flag;
  }
}
