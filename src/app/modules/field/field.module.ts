import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FieldCreateComponent } from './field-create/field-create.component';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldUpdateComponent } from './field-update/field-update.component';

@NgModule({
  declarations: [
    FieldCreateComponent,
    FieldListComponent,
    FieldUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  exports: [FieldCreateComponent, FieldListComponent, FieldUpdateComponent],
})
export class FieldModule {}
