import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.scss']
})
export class MatSnackBarComponent implements OnInit {
  public dataToDisplay: any;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.dataToDisplay = this.data;
  }

}
