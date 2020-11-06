import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteList = [];

  constructor() { }

  ngOnInit(): void {

    Object.entries(sessionStorage).forEach(storage => {
      let favoriteUser = JSON.parse(storage[1]);
      this.favoriteList.push(favoriteUser)
    })

    console.log(this.favoriteList);

  }



}
