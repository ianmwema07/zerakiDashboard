import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from "@angular/forms";
import {LoginDetails} from "./loginDetails";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zerakiDashboard';
  loginDetails = new LoginDetails(" "," "," ");



  onSubmit(f : NgForm){
    console.table(f)
  }
}
