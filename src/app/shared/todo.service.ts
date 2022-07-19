import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {TaskComponent} from "../task/task.component";

export interface Todo {
  id: number,
  name: string,
  completed : string,
  date : any,
  priority: string,
}

@Injectable({providedIn: 'root'})
export class TodoService {
  public todos: Todo[] =[]

  private done: boolean = false

  constructor(private http:HttpClient) {
  }

  public fetchTasks(): Observable<any> {
    return this.http.get("http://127.0.0.1:3000/items");
    //.pipe(tap( todos => this.todos = todos ))
  }

  public postTask(todo: Todo): any {
    const task = {id: todo.id, name: todo.name, completed: todo.completed, date: todo.date, priority: todo.priority}
    return this.http.post("http://127.0.0.1:3000/items",task)
  }

  public updateTask(todo: Todo){
    const task = {id: todo.id, name: todo.name, completed: todo.completed, date: todo.date, priority: todo.priority}
    return this.http.put(`http://127.0.0.1:3000/items/${todo.id}`, task)
  }

  public deleteTask(id: number){
    return this.http.delete(`http://127.0.0.1:3000/items/${id}`, {
      params: new HttpParams().set(`id`, id)
    });
  }

  public onToggle(todo: Todo): void{
    if (todo.completed == 'activ'){
      todo.completed = "done"
    }
  }

  //removeTask(id:number){
   // this.todos = this.todos.filter(t => t.id !== id)
 // }

 public addTask(todo: Todo): void{
    this.todos.push(todo);
    this.postTask(todo).toPromise().then(() => {
      this.loadTasks();
    })
  }

  public cancTask(task: Todo): void{
    if (task.completed == 'activ') {
      task.completed = "false"
    }
  }

  public loadTasks(): void {
    this.fetchTasks().toPromise().then((result: any) => {
      this.todos = result;
    });
  }
}
