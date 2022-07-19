import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todo.service";

@Pipe({
  name: 'filterActive'
})

export class TaskFilterActivePipe implements PipeTransform{
  transform(todos: Todo[], choice1: boolean, choice2: boolean, choice3: boolean, choice4: boolean): any {
    let massiv = []
    if(choice1){
     return  this.FilterActiv(todos, choice1,choice2,choice3, "activ", "false", "done")
    }
    if(choice2){
     return  this.FilterActiv(todos, choice2,choice3,choice1, "false", "done", "activ")
    }
    if(choice3){
     return  this.FilterActiv(todos, choice3,choice1,choice2, "done", "activ", "false")
    }
    if(choice4){
      return todos
    }
  }
  FilterActiv(todos: Todo[], arg1: boolean, arg2: boolean, arg3: boolean, str2: string, str3: string,
             str4: string){
    let massiv = []
    if (arg1 && arg2 && !arg3 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].completed == str2 || todos[i].completed == str3){
          massiv.push(todos[i])
        }}}
    if (arg1 && !arg2 && arg3 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].completed == str2 || todos[i].completed == str4){
          massiv.push(todos[i])
        }}}
    if (arg1 && !arg2 && !arg3 ){
      for (let i = 0; i< todos.length; i++){
        if (todos[i].completed == str2){
          massiv.push(todos[i])
        }}}
    if ((arg1 && arg2 && arg3) || (!arg1 && !arg2 && !arg3)){
      for (let i = 0; i< todos.length; i++){
        massiv.push(todos[i])
      }
    }
    return massiv
  }
}
