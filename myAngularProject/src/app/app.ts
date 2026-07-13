import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Greetings');
  msg = 'Welcome to Angular 20 series'

  a = 10
  b = 5
  ans = this.a + this.b

  // property binding
  inputValue: String = "Hello"
  isDisabled: boolean = false
}
