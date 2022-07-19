import {Pipe, PipeTransform} from "@angular/core";
import {Todo} from "./todo.service";

@Pipe({
  name: "sortedDate"
})

export class TaskSortedDatePipe implements PipeTransform{
  transform(todos: Todo[], date: string = "Все" ): any {
    if (date == "Все"){
      return todos
    } if (date == "Старые"){
      return todos
    } if (date == "Недавние") {
      let massiv = []
      for (let i = 0; i < todos.length; i++){
        massiv.push(todos[i])
      }
      return massiv.reverse()
    }
  }

}
