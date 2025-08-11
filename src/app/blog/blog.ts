import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.css',
  imports: [NavBar]
})
export class Blog {

}
