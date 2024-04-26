import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Address, User } from './user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  user = <User>{ address: <Address>{} };

  save(form: NgForm) {
    localStorage.setItem('user', JSON.stringify(this.user));
    form.reset();
  }

  load() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
}
