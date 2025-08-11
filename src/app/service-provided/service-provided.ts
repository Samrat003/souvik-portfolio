import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-service-provided',
  standalone: true,
  templateUrl: './service-provided.html',
  styleUrl: './service-provided.css',
  imports: [NavBar]
})
export class ServiceProvided {

}
