import { Component, OnInit } from "@angular/core";
import cytoscape from "cytoscape";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var cy = cytoscape({
      container: document.getElementById("graph-container"),
      elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { id: "c" } },
        {
          data: {
            id: "ab",
            source: "a",
            target: "b"
          }
        },
        {
          data: {
            id: "bc",
            source: "b",
            target: "c"
          }
        }
      ],
      layout: {
        name: "preset",
        positions: {
          a: { x: -2, y: 4 },
          b: { x: -6, y: 8 },
          c: { x: -10, y: 12 }
        }
      },
      style: [
        {
          selector: "node",
          style: {
            shape: "circle",
            "background-color": "red",
            height: "2px",
            width: "2px"
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
  }
}
