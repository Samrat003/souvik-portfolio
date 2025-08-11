import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  imports: [NavBar]
})
export class Portfolio {

}
