import {Component, OnInit} from "@angular/core";
import {Todo, TodoService} from "../shared/todo.service";

@Component({
  selector: "app-form",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
})

export class FormComponent implements OnInit{
  name: string = ""
  choice: string = "Низкий"

  constructor(public todoService: TodoService ) {}

  ngOnInit() {

  }
  public addTask(): void {
    if (this.name != '') {
      let todo: Todo = {
        id: Date.now(),
        name: this.name,
        completed: "activ",
        date: new Date(),
        priority: this.choice
      }
      this.todoService.addTask(todo)
      this.name = ""
    } else {
      alert("Введите текст заметки!")
    }
  }
}
