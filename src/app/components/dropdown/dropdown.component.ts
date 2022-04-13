import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

export interface Option {
  name: string;
  value: number | string;
}

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  open = false;
  @Input("color") color = "primary";
  @Input("options") options: Option[] = [];
  @Input("title") title = "";
  @Output("select") select = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(value) {
    this.select.emit(value);
  }
}
