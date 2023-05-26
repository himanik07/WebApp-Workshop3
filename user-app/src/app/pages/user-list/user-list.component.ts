import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  /*users :User[]= [
    {
      name:'Himani',
      city:'Mangaluru',
      emailId:'himani@gmail.com',
      id:1,
    },
    {
      name:'Alreya',
      city:'Mangaluru',
      emailId:'alreya@gmail.com',
      id:2,
    },
    {
      name:'Deonne',
      city:'Mangaluru',
      emailId:'deonne@gmail.com',
      id:3,
    },
    {
      name:'Jessica',
      city:'Mangaluru',
      emailId:'jessica@gmail.com',
      id:4,
    },
  ]*/
  constructor(public userService:UserService){}

  ngOnInit(){
    this.userService.getUsers();
  }
}
