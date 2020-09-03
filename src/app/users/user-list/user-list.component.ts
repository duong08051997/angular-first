import {Component, OnInit} from '@angular/core';
import {IUser} from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  newId: number;
  newName: string;
  newAddress: string;
  newEmail: string;
  searchUser: IUser[] = [];
  user: IUser[] = [];
  users: IUser[] = [
    {
      id: 1,
      name: 'Duong',
      address: 'Bac Giang',
      email: 'duong@gmail.com'
    },
    {
      id: 2,
      name: 'Duong2',
      address: 'Bac Giang2',
      email: 'duong2@gmail.com'
    },
    {
      id: 3,
      name: 'Duong3',
      address: 'Bac Giang3',
      email: 'duong3@gmail.com'
    },
    {
      id: 4,
      name: 'Duong4',
      address: 'Bac Giang4',
      email: 'duong4@gmail.com'
    },
    {
      id: 5,
      name: 'Duong5',
      address: 'Bac Giang5',
      email: 'duong5@gmail.com'
    },
    {
      id: 6,
      name: 'Duong6',
      address: 'Bac Giang6',
      email: 'duong6@gmail.com'
    },
    {
      id: 7,
      name: 'Luc',
      address: 'Nam Dinh',
      email: 'luc@gmail.com'
    },
  ];
  hidden = false;

  constructor() {
  }

  ngOnInit(): void {
    this.searchUser = this.users;
  }
  // tslint:disable-next-line:typedef
  hiddenOrShow(){
    this.hidden = !this.hidden;
  }
  // tslint:disable-next-line:typedef
  search(event){
    const keyword = event.target.value.toLowerCase();
    this.searchUser = (keyword) ? this.filterUser(keyword) : this.users;
    console.log(this.searchUser);
  }
  // tslint:disable-next-line:typedef
  filterUser(keyword){
    return this.users.filter( user => {
      // tslint:disable-next-line:triple-equals
     return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }
  // tslint:disable-next-line:typedef
  delete(id){
    // tslint:disable-next-line:triple-equals
    const index = this.searchUser.findIndex(user => user.id == id);
    this.users.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  edit(id){
    // tslint:disable-next-line:triple-equals
    const index = this.searchUser.findIndex(user => user.id == id);
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    this.newId = this.searchUser[index].id;
    this.newName = this.searchUser[index].name;
    this.newAddress = this.searchUser[index].address;
    this.newEmail = this.searchUser[index].email;
  }
  // tslint:disable-next-line:typedef
  add(){
    this.searchUser.unshift({
      id: this.newId,
      name: this.newName,
      address: this.newAddress,
      email: this.newEmail
    });
    this.newId = Number('');
    this.newName = '';
    this.newAddress = '';
    this.newEmail = '';
  }
  // tslint:disable-next-line:typedef
  update(id){
    const index = this.searchUser.findIndex(user => user.id === id);
    this.searchUser.splice(index, 1, {
      id: this.newId,
      name: this.newName,
      address: this.newAddress,
      email: this.newEmail
    });
  }

}
