import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   login : User;
  
  constructor(
    private authService: AuthenticationService,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  loginEvent(username : string, password : string)
  {
    this.login = new User(username, password);
    this.authService.login(this.login);
  }

  // async submit() {
  //   this.authService.login(this.login);
  // }
}
