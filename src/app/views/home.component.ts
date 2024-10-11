import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonDirective } from "angular-material-tailwind";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ButtonDirective],
  template: `
    <div class="flex justify-center items-center h-screen">
      <button [routerLink]="['/hospital_faq']" mtButton>Hospital Faq</button>
    </div>
  `
})
export class HomeComponent {}
