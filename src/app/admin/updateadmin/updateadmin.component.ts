import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/details/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  adminId: number;
  admin: Admin;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.adminId = +params.get("id");
      });
  }
  update()
  {
    this.admin.userId=this.adminId;
        this.admin.role='admin';
    this.adminService.updateAdmin(this.admin).subscribe(data =>{

      console.log(data);
      this.admin = data;
    });
    this.back();
  }

  back()
  {
    this.router.navigate(['admin',this.adminId,'details']);
  }


}
