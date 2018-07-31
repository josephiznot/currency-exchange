import { Component, OnInit } from "@angular/core";
import cytoscape from "cytoscape";
import { CurrencyService } from "../currency.service";
import { Observable, forkJoin } from "rxjs";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  constructor(public currencyService: CurrencyService) {}
  rates: object;
  alphabet: object = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  positions: object = {};
  ngOnInit() {
    //NEED TO RERENDER WHEN SELECTIONS CHANGE
    let obs = this.currencyService.getPoints().subscribe(response => {
      console.log(response);
      this.rates = response;
      response.forEach((e: any, i: number) => {
        this.positions[this.alphabet[i]] = {
          x: i,
          y: -+Object.values(e.rates)[0] * 100
        };
      });
      //initialize graph AFTER you receive positions
      var cy = cytoscape({
        container: document.getElementById("graph-container"),
        elements: [
          { data: { id: "a" } },
          { data: { id: "b" } },
          { data: { id: "c" } },
          { data: { id: "d" } },
          { data: { id: "e" } },
          { data: { id: "f" } },
          { data: { id: "g" } },
          { data: { id: "h" } },
          { data: { id: "i" } },
          { data: { id: "j" } },
          { data: { id: "k" } },
          { data: { id: "l" } },
          { data: { id: "m" } },
          { data: { id: "n" } },
          { data: { id: "o" } },
          { data: { id: "p" } },
          { data: { id: "q" } },
          { data: { id: "r" } },
          { data: { id: "s" } },
          { data: { id: "t" } },
          { data: { id: "u" } },
          { data: { id: "v" } },
          { data: { id: "w" } },
          { data: { id: "x" } },
          { data: { id: "y" } },
          { data: { id: "z" } }
          //****EDGES***
          // {
          //   data: {
          //     id: "ab",
          //     source: "a",
          //     target: "b"
          //   }
          // },
          // {
          //   data: {
          //     id: "bc",
          //     source: "b",
          //     target: "c"
          //   }
          // }
        ],
        layout: {
          name: "preset",
          positions: this.positions
        },
        style: [
          {
            selector: "node",
            style: {
              shape: "hexagon",
              "background-color": "red",
              height: ".5px",
              width: ".5px"
            }
          },
          {
            selector: "edge",
            style: {
              width: "1px"
            }
          }
        ]
      });
    });
  }
}
