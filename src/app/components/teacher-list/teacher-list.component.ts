import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../services/teacher-list-data.service';
import { TeacherListDataService } from '../../services/teacher-list-data.service';

@Component({
  selector: 'app-teacher-list',
  //templateUrl: '../../components/teacher-list/teacher-list.component',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[];
  isToDisplayTeachers: boolean = false;

  constructor(private teacherListDataService:TeacherListDataService) {
    console.log('StudentComponent constructor executed');
   }

  ngOnInit() {
    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
}
export interface Teacher{
    teacherId: string,
    name: string,
    lastname: string,
    title: string,
    age: number,
    //address: string;
    isFullTime: boolean,
   // updatedOn: Date,
  }