import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';
import { MaterialModule } from '../material/material.module';
import { SharedComponent } from './shared.component';


@NgModule({
  declarations: [MatSnackBarComponent, SharedComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
