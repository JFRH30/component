import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(private AlertCtrl: AlertController) {}

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Alert Component',
      subHeader: 'this is a sub header',
      message: 'Hi User',
      buttons: ['OK']
    });
    await alert.present();
  }
}
