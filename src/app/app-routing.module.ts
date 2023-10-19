import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./homepage/homepage.component";
import { ContactComponent } from "./contact/contact.component";

const appRoutes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "home", component: HomepageComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
