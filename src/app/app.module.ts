import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { HeaderComponent } from "./header/header.component";
import { DataComponent } from "./data/data.component";
import { GraphComponent } from "./graph/graph.component";
import { InputsComponent } from "./inputs/inputs.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    DataComponent,
    GraphComponent,
    InputsComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
