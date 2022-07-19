import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todo.service";

@Pipe({
  name: "filterPriority"
})

export class TaskFilterPriorityPipe implements PipeTransform{
  transform(todos: Todo[], choice1: boolean, choice2: boolean, choice3: boolean, choice4: boolean): any {
    if ((choice2 && choice3 && choice4) || (!choice2 && !choice3 && !choice4)){
      return todos
    }
    if (choice2){
      return this.FilterSort(todos, choice1, choice2, choice3, choice4, "Низкий", "Средний", "Высокий")
    }
    if (choice3){
      return this.FilterSort(todos, choice1, choice3, choice4, choice2,  "Средний", "Высокий", "Низкий")
    }
    if (choice4){
      return this.FilterSort(todos, choice1, choice4, choice3, choice2, "Высокий", "Средний", "Низкий")
    }
  }

  FilterSort(todos: Todo[], arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, str2: string, str3: string,
             str4: string){
    let massiv = []
    if (arg2 && arg3 && !arg4 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == str2 || todos[i].priority == str3){
          massiv.push(todos[i])
        }}}
    if (arg2 && !arg3 && arg4 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == str2 || todos[i].priority == str4){
          massiv.push(todos[i])
        }}}
    if (arg2 && !arg3 && !arg4 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].priority == str2){
          massiv.push(todos[i])
        }}}
    return massiv
  }
}
