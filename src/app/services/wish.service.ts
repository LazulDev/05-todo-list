import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  list: List[] = [];
  constructor() {
    this.getStorage();
  }

  get getList(): List[] {
    return this.list;
  }

  setList( title: string ) {
    const list = new List(title);
    this.list.push(list);
    this.setStorage();
    return list.id;
  }
  
  getListDetaills( id: string | number ) {

    id = Number( id );
    
    return this.list.find( listData => listData.id === id);
  }

  setStorage() {
    localStorage.setItem('data', JSON.stringify(this.list));
  }
  
  getStorage() {
    if (localStorage.getItem('data')) {
      this.list = JSON.parse(localStorage.getItem('data'));
    }
  }
}
