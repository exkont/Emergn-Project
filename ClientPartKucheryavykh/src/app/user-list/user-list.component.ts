import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../form-enter/form-enter.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchUser = '';
  userList: User[];
  changingId: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
  }

  ngOnInit() {
    this.userService.getUserList().subscribe((json: User[]) => {
      for (let i = 0; i < json.length; i++) {
        if (json[i].id != this.route.snapshot.params.id) {
          json[i].password = '******';
        }
      }
      this.userList = json;
    });
    this.changingId = this.route.snapshot.params.id;
  }

  changeData(user: User) {
    window.open(`http://localhost:4200/change/${this.changingId}`, "_self");
  }


}
