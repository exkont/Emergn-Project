import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

export interface User {
  name: string,
  email: string,
  password: string,
  id: string
}

@Component({
  selector: 'app-form-enter',
  templateUrl: './form-enter.component.html',
  styleUrls: ['./form-enter.component.css']
})
export class FormEnterComponent implements OnInit {

  constructor(private userService: UserService, private activeStatus: AppComponent) { }

  user: User;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        id: new FormControl('', [Validators.required]),
        pass: new FormControl('', [Validators.required])
      })
    });
  }

  onSubmit() {
    console.log('submited!', this.form.value.user);
    let data = this.form.value.user;
    this.userService.getUser(data.id).subscribe((json: User) => {
      if (data.id == json.id && data.pass == json.password) {
        this.user = json;
        console.log(this.user);
        window.open(`http://localhost:4200/userlist/${json.id}`, "_self");
      }
    });
  }

  openRegistrationForm() {
    window.open(`http://localhost:4200/registration`, "_self");
  }



}

