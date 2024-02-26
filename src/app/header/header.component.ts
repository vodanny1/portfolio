import { ViewportScroller } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToDescription(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);

    window.scrollTo(0, 0);
  }

  ngOnInit(): void {}
}
