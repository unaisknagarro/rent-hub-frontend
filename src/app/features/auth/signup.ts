import { Component } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {
  user: any = {};
  constructor(private auth: Auth) { }
  signup() { 
    //this.auth.signup(this.user).subscribe(); 
  }
}
