import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css']
})
export class FormChangeComponent implements OnInit {


  constructor(private userService: UserService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
  }

  changeForm: FormGroup;

  ngOnInit() {
    this.changeForm = new FormGroup({
      pass: new FormControl('', [Validators.required, Validators.minLength(3)]), // [Validators.required, Validators.minLength(3), this.checkForLength.bind(this)]
      passRepeat: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]), // [Validators.required, Validators.email], [this.checkForEmail]
      name: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  onSubmit() {
    let data = this.changeForm.value;
    console.log(this.changeForm);
    if (data.pass == data.passRepeat) {
      this.userService.changeUser({
        name: data.name,
        email: data.email,
        password: data.pass,
        id: this.route.snapshot.params.id
      }).subscribe();
      setTimeout(() => window.open(`http://localhost:4200/userlist/${this.route.snapshot.params.id}`, "_self"), 1500);
    }
  }
}
