import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListModule } from './user-list/user-list.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './user-list/user-list.service';
import { UserFormModule } from './user-form/user-form.module';
import { UserCreateModule } from './user-create/user-create.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserFormModule,
    UserCreateModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
