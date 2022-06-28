import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(durationInSeconds: number, message: string) {
    this._snackBar.openFromComponent(
      MatSnackBarComponent,
      { duration: 1000 * durationInSeconds,
        data: message,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
      
    )
  }

}
