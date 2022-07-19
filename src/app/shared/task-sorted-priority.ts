import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todo.service";

@Pipe({
  name: "sortedPriority"
})
export class TaskSortedPriority implements PipeTransform{
  transform(todos: Todo[], prior: string = "Все"): any {
    if (prior == "Низкий"){
      let massiv =[]
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Низкий"){
          massiv.push(todos[i])
        }
      }
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Средний"){
          massiv.push(todos[i])
        }
      }
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Высокий"){
          massiv.push(todos[i])
        }
      }
      return massiv
    } if (prior == "Высокий") {
      let massiv =[]
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Высокий"){
          massiv.push(todos[i])
        }
      }
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Средний"){
          massiv.push(todos[i])
        }
      }
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == "Низкий"){
          massiv.push(todos[i])
        }
      }
      return massiv
    } else {
    return todos}
  }


}
