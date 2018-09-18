import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Grid } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent
      }
    ])
  ],
  declarations: [GridComponent]
})
export class GridModule {}
