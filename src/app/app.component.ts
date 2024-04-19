import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
