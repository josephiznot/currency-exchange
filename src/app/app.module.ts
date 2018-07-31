import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { HeaderComponent } from "./header/header.component";
import { DataComponent } from "./data/data.component";
import { GraphComponent } from "./graph/graph.component";
import { InputsComponent } from "./inputs/inputs.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RoundNumberPipe } from './round-number.pipe'; // <-- NgModel lives here
// import { CurrencyService } from "./currency.service";
// import { MessagesService } from "./messages.service";
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    DataComponent,
    GraphComponent,
    InputsComponent,
    RoundNumberPipe
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [], //not sure if this is necessary...
  bootstrap: [AppComponent]
})
export class AppModule {}
