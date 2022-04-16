import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  myTaskUrl: string ="http://localhost:3000/tasks"

  constructor(private http: HttpClient) { }
  // We need a way to list all the tasks (READ)
  getAllTasks(): Observable<Task[]>{
      return this.http.get<Task[]>(this.myTaskUrl)
  }
  // We need a way to edit the task (UPDATE)
  // Componenet needs to send an ID for the contact
  getOneTask(reqID: number): Observable<Task>{
    return this.http.get<Task>(`${this.myTaskUrl}/${reqID}`)
  }

  // We need a way to edit the task (UPDATE)
  // Component needs to provide the ID as well as the updated task info
  updateTask(editID:number, editedInfo: Task): Observable<Task>{
    return this.http.put<Task>(`${this.myTaskUrl}/${editID}`, editedInfo)
  }
  // We need a way to delete the contact (DELETE)
  // Component needs to provide an ID
  deleteTask(deleteID: number): Observable<any>{
    return this.http.delete<any>(`${this.myTaskUrl}/${deleteID}`)
  }
  // We need a way to create a new contact (CREATE)
  //Component needs to provide the task info
  createTask(newTask: Task): Observable<Task>{
    return this.http.post<Task>(this.myTaskUrl, newTask)
  }
}
