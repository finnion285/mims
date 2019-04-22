import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public username: string;
  public password: string;
  public errorMsg: string;

  public loading: boolean = false;

  constructor(private apiCall: ApiCallService, private navCtrl: NavController) {}

  login() {
    // Reset error message
    this.errorMsg = "";

    // Ensure both fields are filled out
    if (!this.username || !this.password) {
      this.errorMsg = "All fields required";
      return;
    } else {
      this.loading = true;
      this.apiCall.post('/login/', {
        username: this.username,
        password: this.password
      }).then((response: any) => {
        if (response.success) {
          localStorage.setItem('access-token', response.data.access_token);
          localStorage.setItem('username', this.username);
          this.navCtrl.navigateRoot('search');
        } else {
          this.errorMsg = response.error.message;
        }
        this.loading = false;
      })
    }
  }
}
