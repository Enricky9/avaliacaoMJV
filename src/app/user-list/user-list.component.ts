import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  itens:any
  columnsToDisplay = ['title','firstName','lastName', 'picture', 'actions'];

  constructor( private userService: UserListService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.itens = response.data
      console.log(response)
    })
  }

  openDetailUser(user: any){
    console.log(user)
  }

  deleteUser(user: any){
this.userService.deleteUserById(user.id).subscribe()
  }

  editUser(user: any){
this.router.navigate([`user/${user.id}`])
  }

}
