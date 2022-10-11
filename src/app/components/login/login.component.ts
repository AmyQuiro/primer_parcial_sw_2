import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Constants';
import { Utils } from 'src/app/Utils';
import { User } from '../../interfaces/user.interface';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User
  constructor(
    private apiService:ApisService,
    private router: Router
  ) { 
    this.user={
      email:'',
      password:''
    }
  }

  ngOnInit(): void {
  }
  login(){
    this.apiService.login(this.user).subscribe(
      Response=>{
        console.log(Response);
        Utils.set(Constants.ACTUAL_ACCESS_TOKEN, Response.token);
        //Utils.set(Constants.ACTUAL_USER, Response.user.email);
        this.router.navigate(['/upload']);
        alert("Inicio de Sesion");
      }
    )
  }

  goToRegister(){

  }
}
