import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/serviciosHttp/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup = new FormGroup({
    'email': new FormControl(''),
    'password':new FormControl('')
  });
  showPassword:string = "mostrar";
  flagTypePassword: string = "password";
  flagChangeValueInput: boolean = true;
  flagDisabled:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _login: LoginService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  enviarValoresDelFormulario(){
    console.log(this.formLogin.get('email')?.value);
    console.log(this.formLogin.get('password')?.value);
    this.flagDisabled = !this.flagDisabled;

    const body = {
      "email":this.formLogin.get('email')?.value,
      "password":this.formLogin.get('password')?.value
    }
    
    this._login.login(body).subscribe((resp:any)=>{
      console.log(resp);
      this.flagDisabled = !this.flagDisabled;
    });
    
    

  }

  cambiarValor(){    
    if (this.flagChangeValueInput) {
      this.flagTypePassword = "text";
      this.showPassword = "ocultar";
    } else {
      this.flagTypePassword = "password";
      this.showPassword = "mostrar";
    }
    this.flagChangeValueInput = !this.flagChangeValueInput;
  }

}
