import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("descriptionSection") descriptionSection: ElementRef;

  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  scrollToDescription() {
    this.descriptionSection.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
