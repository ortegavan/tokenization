import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

  form = new UntypedFormGroup({
    email: new UntypedFormControl(),
    password: new UntypedFormControl(),
  });

  entrar(): void {
    if (this.form.valid) {
      this.service
        .entrar(this.form.get('email')?.value, this.form.get('password')?.value)
        .subscribe((response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        });
    }
  }
}
