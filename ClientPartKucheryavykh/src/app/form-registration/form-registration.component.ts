import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../form-enter/form-enter.component';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css']
})
export class FormRegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }


  registrationForm: FormGroup;
  usersId = [];

  ngOnInit() {
    this.registrationForm = new FormGroup({
      user: new FormGroup({
        id: new FormControl('', [Validators.required, Validators.minLength(3)]),
        pass: new FormControl('', [Validators.required, Validators.minLength(3)]) // [Validators.required, Validators.minLength(3), this.checkForLength.bind(this)]
      }),
      passRepeat: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]), // [Validators.required, Validators.email], [this.checkForEmail]
      name: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    this.userService.getUserList().subscribe((json: User[]) => {
      for (let i = 0; i < json.length; i++) {
        this.usersId.push(json[i].id);
      }
    });
  }

  onSubmit() {
    let data = this.registrationForm.value;

    for (let i = 0; i < this.usersId.length; i++) {
      if (this.usersId[i] != data.user.id && data.user.pass == data.passRepeat) {
        console.log('GGGGG!');
        this.userService.addUser({
          name: data.name,
          email: data.email,
          password: data.user.pass,
          id: data.user.id
        }).subscribe();
        setTimeout(() => window.open(`http://localhost:4200/userlist/${data.user.id}`, "_self"), 1500);
      }
    }
  }

}

