import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistComponent } from './views/userslist/userlist.component'
import { FavoritesComponent } from './views/favorites/favorites.component'

const routes: Routes = [
  {
    path: "",
    component: UserlistComponent
  },
  {
    path: "favorites",
    component: FavoritesComponent
  },
  {
    path: "user/details/:id",
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
