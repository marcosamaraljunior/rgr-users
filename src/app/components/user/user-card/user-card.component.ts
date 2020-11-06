import { User } from './../user.model';
import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../user.service'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() user: User;

  toggleStarIcon(user: any, action: string): void {
    document.querySelectorAll(`mat-card`).forEach((element) => {
      if (parseInt(element.id) == user.id) {
        if (action == 'add') element.querySelectorAll('.btn-star')[0].classList.add('selected-favorite');
        else element.querySelectorAll('.btn-star')[0].classList.remove('selected-favorite');
      }
    })
  }

  toggleFavorite(user: User): void {

    if (!sessionStorage.getItem(`user-${user.id}`)) {
      sessionStorage.setItem(`user-${user.id}`, JSON.stringify(user));
      this.toggleStarIcon(user, 'add')
    } else {
      sessionStorage.removeItem(`user-${user.id}`);
      this.toggleStarIcon(user, 'remove')
    }

  }

  fixFavorite(): void {

    Object.entries(sessionStorage).forEach(storage => {
      let favoriteUser = JSON.parse(storage[1]);
      this.toggleStarIcon(favoriteUser, 'add')
    })

  }

  ngOnInit(): void {
    this.fixFavorite()
  }

}
