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
<<<<<<< HEAD
=======
    //  this.getAllTests;
>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2
  }

 admin : Admin;

  ngOnInit(): void {
    
  }

<<<<<<< HEAD
  update()
  {
    this.adminService.updateAdmin(this.admin).subscribe(data =>{

      console.log(data);
      this.admin = data;
    });

  }

=======
  // getAllTests()
  // {
  //   this.adminService.getAllTest().subscribe(data=>{
  //       this.test = data;
  //   },
  //   err=>
  //   {
  //     console.log(err.error);
  //   }
    
  //   ); 
  // }
>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2
}
