import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WishService } from 'src/app/services/wish.service';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  list: List;
  itemName = '';
  constructor(
    private wishService_: WishService,
    private activatedRoute_: ActivatedRoute,
  ) { 

    const listId = this.activatedRoute_.snapshot.paramMap.get('id');
    this.list = this.wishService_.getListDetaills(listId);
  }

  addItem() {
    console.log(this.itemName);
    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ListItem( this.itemName );
    this.list.items.push(newItem);
    console.log(this.list);
    this.itemName = '';
    this.wishService_.setStorage();
  }


}
