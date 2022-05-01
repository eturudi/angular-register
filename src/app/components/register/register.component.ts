import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'firebase-functions/v1/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  displayMgs :string= '';
  isAcountCreated:boolean=false;


  constructor(private  authService:AuthService) { }

  ngOnInit(): void {
  }

  registerForm =new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl('',[Validators.required]),
   
  
    
  });
  registerSubmited(){
    
      this.authService.registerUser([ 
        this.registerForm.value.firstname,
        this.registerForm.value.lastname,
        this.registerForm.value.email,
        this.registerForm.value.mobile,
        this.registerForm.value.gender,

      ] ).subscribe(res => {
        if(this.Email.value==this.registerForm.value.email){

            this.displayMgs="Account Already Exist. Try"
            this.isAcountCreated=false;
        }
        
        else{
          this.displayMgs='account success !.';
          this.isAcountCreated=true;
        }

        console.log(res);
      })
    
    
  }
  get FirstName (): FormControl{
    return this.registerForm.get('firstname') as FormControl;
  }
  get LastName(): FormControl{
    return this.registerForm.get('lastname') as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }
  get Gender(): FormControl{
    return this.registerForm.get('gender') as FormControl;
  }
 
}
