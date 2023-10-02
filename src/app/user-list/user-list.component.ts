import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  itens:any
  columnsToDisplay = ['title','firstName','lastName', 'picture'];

  constructor( private userService: UserListService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.itens = response.data
      console.log(response)
    })
  }

  openDetailUser(user: any){
    console.log(user)
  }

}
