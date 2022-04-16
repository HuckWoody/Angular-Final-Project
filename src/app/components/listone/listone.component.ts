import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-listone',
  templateUrl: './listone.component.html',
  styleUrls: ['./listone.component.css']
})
export class ListoneComponent implements OnInit {

  // Property to store current task Info
  currentTask: Task = new Task();

  taskID: number | any;



  constructor(private actRoute: ActivatedRoute, private myTaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // Extracted the ID from URL
    this.taskID = this.actRoute.snapshot.paramMap.get("taskId");
    console.log(this.taskID);

    // Fetch the task corresponding to the ID
    this.myTaskService.getOneTask(this.taskID).subscribe(response => {
      console.log(response);
      this.currentTask = response;
    })
  }
  // deleteFirstName(firstName:string){ 
  //   console.log("Testing" + firstName);
  //   this.myTaskService.deleteTask(firstName).subscribe(response => {
  //     console.log(response);
  //     this.ngOnInit();
  //   })
  // }
  // deleteTaskName(taskName:string){
  //   console.log("Testing" + taskName);
  //   this.myTaskService.deleteTask(taskName).subscribe(response => {
  //     console.log(response);
  //     this.ngOnInit();
  //   })
  // }

deleteTask = (id:number) => {
  this.myTaskService.deleteTask(id).subscribe(response => {
    this.router.navigate(['listall'])
  })
}




}
