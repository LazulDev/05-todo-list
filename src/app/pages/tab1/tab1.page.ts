import { Component } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list: List[];
  constructor( 
    public wishService_: WishService,
    private router: Router,
    private alertCtrl: AlertController

  ) {
    this.list = wishService_.getList;
  }

  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled')
          }
        },
        {
          text: 'Create',
          handler: ( { title } ) => {
            if (title.length > 0 ) {
              const id = this.wishService_.setList(title);
              this.router.navigateByUrl(`/tabs/tab1/add/${ id }`);
            } else {
              return;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
