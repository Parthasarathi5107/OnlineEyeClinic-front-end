import { Admin } from './../details/admin';
import { Test } from './../details/test';
import { AdminService } from './../service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService) { 
  }

 admin : Admin;

  ngOnInit(): void {
    
  }

  update()
  {
    this.adminService.updateAdmin(this.admin).subscribe(data =>{

      console.log(data);
      this.admin = data;
    });

  }

}
