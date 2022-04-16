import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  // Property to store list of task
  listOfTasks: Task[] = [];

  constructor(private myTaskService: TaskService) { }

  ngOnInit(): void {
    this.myTaskService.getAllTasks().subscribe(response => {
      console.log(response);
      this.listOfTasks = response;
    })
  }

  deleteTask(id:number){
    console.log("Testing" + id);
    this.myTaskService.deleteTask(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    })
  }

}

