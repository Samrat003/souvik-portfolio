import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
  imports: [NavBar]
})
export class ContactMe {

}
