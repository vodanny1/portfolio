import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  age: number = 0;
  birthdate = new Date('1998-08-14');

  ngOnInit(): void {
    this.calculateAge();
  }

  calculateAge() {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    // console.log(age);
    this.age = age;
  }
}
