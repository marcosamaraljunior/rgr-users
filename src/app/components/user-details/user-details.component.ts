import { UserService } from './../user/user.service';
import { ActivatedRoute } from "@angular/router";
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  title = 'MAP';
  lat: number;
  lng: number;

  @Input() sessionId: number;

  userId;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    let userId = this.route.snapshot.paramMap.get("id");
    let id;


    if (typeof userId != "object") {
      id = userId
    } else {
      id = this.sessionId.toString()
    }

    this.userService.getSingleById(id).subscribe((user) => {
      this.user = user;
      this.lat = parseFloat(user.address.geo.lat);
      this.lng = parseFloat(user.address.geo.lng);
    });

  }

  showMap(id): void {
    document.getElementById(`map${id}`).classList.toggle('hide')
  }

}
