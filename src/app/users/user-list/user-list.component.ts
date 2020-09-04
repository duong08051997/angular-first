import {Component, OnInit} from '@angular/core';
import {IUser} from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  newId: string;
  newName: string;
  newAddress: string;
  newEmail: string;
  filterCity = 'all';
  searchUser: IUser[] = [];
  user: IUser[] = [];
  users: IUser[] = [
    {
      id: '1',
      name: 'Duong',
      address: 'Bac Giang',
      email: 'duong@gmail.com'
    },
    {
      id: '2',
      name: 'Luc',
      address: 'Bac Giang',
      email: 'luc@gmail.com'
    },
    {
      id: '3',
      name: 'Tung',
      address: 'Nam Dinh',
      email: 'tung@gmail.com'
    },
    {
      id: '4',
      name: 'Cuong',
      address: 'Bac Giang',
      email: 'cuong@gmail.com'
    },
    {
      id: '5',
      name: 'Manh',
      address: 'Bac Giang',
      email: 'manh@gmail.com'
    },
    {
      id: '6',
      name: 'Viet Anh',
      address: 'Nam Dinh',
      email: 'anh@gmail.com'
    },
    {
      id: '7',
      name: 'Quang',
      address: 'Nam Dinh',
      email: 'quang@gmail.com'
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
    this.searchUser = (event) ? this.filterUser(event) : this.users;
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
    const index = this.searchUser.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  edit(id){
    // tslint:disable-next-line:triple-equals
    const index = this.searchUser.findIndex(user => user.id === id);
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
    this.newId = '';
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
  // tslint:disable-next-line:typedef
  showCity(address: string){
    const all = this.filterCity === 'all';
    const bacgiang = this.filterCity === 'Bac Giang' && address === 'Bac Giang' ;
    const namdinh = this.filterCity === 'Nam Dinh' && address === 'Nam Dinh';
    return all || bacgiang || namdinh;
  }
  // tslint:disable-next-line:typedef
  reload(){
    location.reload();
  }

}
