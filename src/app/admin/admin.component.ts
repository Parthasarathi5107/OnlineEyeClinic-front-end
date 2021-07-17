<<<<<<< HEAD
import { Admin } from './../details/admin';
import { Test } from './../details/test';
=======

>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a
import { AdminService } from './../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../details/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
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
=======
  adminId: number;
  admin: Admin;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.adminId = +params.get("id");
      });}


      goUpdate()
      {
        this.router.navigate(['admin',this.adminId,'details','update']);
      }
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a

}
