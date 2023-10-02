import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './user-list.service';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [UserListComponent],
  providers: [HttpClientModule, UserListService]
})
export class UserListModule { }
