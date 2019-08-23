import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { FormEnterComponent } from './form-enter/form-enter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormChangeComponent } from './form-change/form-change.component';
import { UserFilterPipe } from './user-filter.pipe';
import { ButtonBackComponent } from './button-back/button-back.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEnterComponent,
    FormRegistrationComponent,
    UserListComponent,
    FormChangeComponent,
    UserFilterPipe,
    ButtonBackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
