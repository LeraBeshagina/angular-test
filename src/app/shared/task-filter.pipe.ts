import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todo.service";

@Pipe({
  name: "taskFilter"
})

export class TaskFilterPipe implements PipeTransform{

  transform(todos: Todo[], search: string = ""): Todo[]{
    if (!search.trim()) {
      return todos
    }
    return todos.filter(todo =>{
      return todo.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }

}
