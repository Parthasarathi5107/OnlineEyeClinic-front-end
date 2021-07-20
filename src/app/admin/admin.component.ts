import { AdminResponse } from './../response/admin-response';
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

  adminId: number;
  admin: AdminResponse;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.adminId = +params.get("adminId");
      });}

   

}
