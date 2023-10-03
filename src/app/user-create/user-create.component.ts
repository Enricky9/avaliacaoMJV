import { Component, OnInit } from '@angular/core';
import { UserFormService } from '../user-form/user-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor( private userFormService: UserFormService, public router: Router) { }

  ngOnInit() {
  }

}
