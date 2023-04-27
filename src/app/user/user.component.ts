import { Component, OnInit } from '@angular/core';
import { user } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  usr:user={
    "name":"hi",
    "id":90,
    "email":"jjjjj",
    "mobile":9090909
  }
  constructor(){}
  ngOnInit(){}

}
