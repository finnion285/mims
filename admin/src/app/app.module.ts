import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { ApiCallService } from './services/api-call.service';
import { UtilityService } from './services/utility.service';
import { HttpClientModule } from '@angular/common/http';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { CurrUserInfoModalComponent } from './curr-user-info-modal/curr-user-info-modal.component';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoutPageComponent,
    UserManagementPageComponent,
    EditUserModalComponent,
    CreateUserModalComponent,
    CurrUserInfoModalComponent,
    HelpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiCallService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
