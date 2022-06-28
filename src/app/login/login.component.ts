import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedComponent } from '../shared/shared.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private shared = new SharedComponent(this._snackBar)

  constructor(
    private readonly fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  login() {
    if(this.loginForm.get('email')?.value === 'edson.hirano28@gmail.com'
      && this.loginForm.get('password')?.value === 'Abcdoamor1!') {
        this.shared.openSnackBar(2.5, 'Login efetuado com sucesso!');
        return this.router.navigate(['/home']);
    }

    return this.shared.openSnackBar(2.5, 'Login ou senha não conferem, tente novamente!');
  }
}
