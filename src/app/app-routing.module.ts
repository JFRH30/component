import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'action-sheet', loadChildren: './components/action-sheet/action-sheet.module#ActionSheetModule' },
  { path: 'alert', loadChildren: './components/alert/alert.module#AlertModule' },
  { path: 'anchor', loadChildren: './components/anchor/anchor.module#AnchorModule' },
  { path: 'avatar', loadChildren: './components/avatar/avatar.module#AvatarModule' },
  { path: 'back-button', loadChildren: './components/back-button/back-button.module#BackButtonModule' },
  { path: 'button', loadChildren: './components/button/button.module#ButtonModule' },
  { path: 'card', loadChildren: './components/card/card.module#CardModule' },
  { path: 'checkbox', loadChildren: './components/checkbox/checkbox.module#CheckBoxModule' },
  { path: 'chip', loadChildren: './components/chip/chip.module#ChipModule' },
  { path: 'content', loadChildren: './components/content/content.module#ContentModule' },
  { path: 'datetime', loadChildren: './components/datetime/datetime.module#DatetimeModule' },
  { path: 'fab', loadChildren: './components/fab/fab.module#FabModule' },
  { path: 'grid', loadChildren: './components/grid/grid.module#GridModule' },
  { path: '', redirectTo: 'action-sheet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
