import { Component, OnInit } from "@angular/core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"],
})
export class DescriptionComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  age: number = 0;
  birthdate = new Date("1998-08-14");

  isExpanded: boolean = false;

  ngOnInit(): void {
    this.calculateAge();
  }

  calculateAge() {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    this.age = age;
  }

  expandClicked() {
    this.isExpanded = !this.isExpanded;
  }
}
