import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  public choiceActive: boolean = false
  public choiceCancelled: boolean = false
  public choiceCompleted: boolean = false
  public choiceAll: boolean = true

  public choicePrior1: boolean = true
  public choicePrior2: boolean = false
  public choicePrior3: boolean = false
  public choicePrior4: boolean = false

 // public loading: boolean = false;
  public searchString: string = ""
  public date: string = "Все"
  public priority: string = "Все"


  public tasks: Todo[] = [];
  constructor(public todoService: TodoService) {

  }

  public doneTask(todo: Todo): void {
   this.todoService.onToggle(todo)
    this.todoService.updateTask(todo).toPromise().then(() => {
      this.todoService.loadTasks();})
  }

  public cancTask(todo: Todo): void{
    this.todoService.cancTask(todo)
    this.todoService.updateTask(todo).toPromise().then(() => {
      this.todoService.loadTasks();})
  }

  public removeTask(id: number): void {
   // this.todoService.removeTask(id)
    this.todoService.deleteTask(id).toPromise().then(() => {
      this.todoService.loadTasks();})
  }

  ngOnInit() {
    this.todoService.loadTasks();
  }

  public saveChanges(e: any, todo: Todo): void {
    // let resultTodo = JSON.parse(JSON.stringify(JSON
    todo.name = e.target.value;
    this.todoService.updateTask(todo).toPromise().then(() => {
      this.todoService.loadTasks();
    })
  }
}
