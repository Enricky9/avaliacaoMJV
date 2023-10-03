import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './user-list.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [UserListComponent],
  providers: [HttpClientModule, UserListService]
})
export class UserListModule { }
