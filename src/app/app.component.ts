import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person-form/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
