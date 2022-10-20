import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { createTodosRoutingModule } from './create-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CreateFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    createTodosRoutingModule,
    
    
    

  ],
  providers: [  ],
})
export class CreateTodosModule { }
