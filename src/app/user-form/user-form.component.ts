import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id?: string =""
  user: any
  
  constructor(private route:ActivatedRoute, private userFormService: UserFormService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id") ?? ""
    console.log(this.id)
    this.userFormService.getUserById(this.id).subscribe(response => {
      this.user = response
      console.log(response)
    })
  }

}
