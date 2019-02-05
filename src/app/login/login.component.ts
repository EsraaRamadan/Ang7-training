import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}
  ngOnInit() {
  }
  onSubmit(loginForm) {
    console.log(loginForm.value);
   /* this.authService.onLogin(loginForm).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );*/
  }
}
