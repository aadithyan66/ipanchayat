import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  datan={

  news:""

  }

  constructor(private ali:PanchayatserviceService) { }

  ngOnInit(): void {
  }

  Usernews(){

  this.ali.usernews(this.datan).subscribe((datan)=>{

  })
  alert("Success")
  }

}
