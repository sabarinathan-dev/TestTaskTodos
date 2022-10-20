import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Todo, TodoForm } from '../../shared/interfaces/todo';
import {COMMON} from '../../shared/consts/constant';
import { Router } from '@angular/router';
import * as toastr from 'toastr';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  priorityData = COMMON.PRIORITY;
  todoDataList: Todo[] = [];
  todosForm : FormGroup   = new FormGroup({
    title:new FormControl ('',Validators.required ),
    priority:new FormControl(0, Validators.required ),
    date:new FormControl('', Validators.required),
    done:new FormControl(false, Validators.required)
  })
  submitted: boolean = false;
  constructor(private service:AppService, private router:Router) {
    toastr.options.positionClass = "toast-bottom-right";
   }

  ngOnInit(): void {
    this.getTodoList();
  }
  
  getTodoList(): void {
    this.service.todos.subscribe({
      next: (todoList: Todo[]): void => {
        this.todoDataList  = todoList;
      }, error : (err): void =>{
        toastr.error(COMMON.SYSTEMISSUE);
      }
    });
  }

  addData(todoDataForm: TodoForm): void{
    this.submitted = true;
    if(this.todosForm.valid) {
      const toDoDatas:Todo = {
         ...todoDataForm,
         date: new Date(todoDataForm.date).valueOf()
      }
      this.todoDataList.push(toDoDatas);
      this.service.todos.next(this.todoDataList);
      toastr.success(COMMON.ADDEDTASK);
      this.router.navigate([''])
    } else {
      toastr.error(COMMON.EMPTYFIELD);
    }
  }

  backData() : void{
    this.router.navigate([''])
  }
  

}
