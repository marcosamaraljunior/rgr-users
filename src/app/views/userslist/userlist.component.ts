import { UserService } from '../../components/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/user/user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList: User[] = [];

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getUserList().subscribe(users => { this.userList = users; })
  }

}
