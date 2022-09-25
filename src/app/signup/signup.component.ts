import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data={
    name:"",
    ward:"",
    address:"",
    voterid:"",
    password:""

  }

  constructor(private api:PanchayatserviceService) { }

  ngOnInit(): void {
  }
  Usignup(){

    this.api.usignup(this.data).subscribe((data)=>{


    })
    alert("Success")

  }

}
