import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id?: string = ""
  user: any = {
    title: "",
    firstName:"",
    lastName:"",
    picture:""
  }
  timeOutToSave: any
  createUserForm = false

  constructor(private route: ActivatedRoute, private userFormService: UserFormService, public router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    this.createUserForm = this.router.url.includes("user/create")
    if (!this.createUserForm) {
      this.id = this.route.snapshot.paramMap.get("id") ?? ""
      console.log(this.id)
      this.userFormService.getUserById(this.id).subscribe(response => {
        this.user = response
        console.log(response)
      })
    }
  }

  saveUser() {
    console.log("teste")
    if(this.timeOutToSave) clearTimeout(this.timeOutToSave)
    this.timeOutToSave = setTimeout(() =>{
      this.userFormService.updateUser(this.user).subscribe()
    }, 10000)
  }


}
