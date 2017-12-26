import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {TeacherListDataService} from './services/teacher-list-data.service';


import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { Teacher } from './services/teacher-list-data.service';

const appRoutes:Routes = [
  {path:'', component: TeacherListComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
