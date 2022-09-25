import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  data1={

    adminname:"",
    adminaddress:"",
    adminvoterid:"",
    adminposition:"",
    adminpassword:""

  }
  constructor(private aki:PanchayatserviceService) { }

  ngOnInit(): void {
  }

Asignup(){

 this.aki.asignup(this.data1).subscribe((data1)=>{

 }) 
alert("Success")
}

}
