import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

// Property to store current task Info
  editTask: Task = new Task();

  taskID: number | any;

  constructor(private actRoute: ActivatedRoute, private myTaskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // Extracted the ID from URL
    this.taskID = this.actRoute.snapshot.paramMap.get("taskId");
    console.log(this.taskID);

    // Fetch the task corresponding to the ID
    this.myTaskService.getOneTask(this.taskID).subscribe(response => {
      console.log(response);
      this.editTask = response;
    })
  }

  updateTask(){
    this.myTaskService.updateTask(this.taskID, this.editTask).subscribe(response => {
      console.log(response);
      this.router.navigate(["listall"]);
    })
  }
}
