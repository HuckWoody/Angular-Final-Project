import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newTask: Task = new Task();

  constructor(private myTackService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createNew(){
    this.myTackService.createTask(this.newTask).subscribe(response => {
      console.log(response);
      this.router.navigate(["listall"]);
    })
  }

}
