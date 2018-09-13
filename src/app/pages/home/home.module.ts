import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UsersMessagesComponent } from '../../components/users-messages/users-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, UsersListComponent, UsersMessagesComponent]
})
export class HomePageModule {}
