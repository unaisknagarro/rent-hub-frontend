import { Component } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  email = ''; password = '';
  constructor(private auth: Auth) { }
  login() { 
    //this.auth.login({ email: this.email, password: this.password }).subscribe(); 
  }
}