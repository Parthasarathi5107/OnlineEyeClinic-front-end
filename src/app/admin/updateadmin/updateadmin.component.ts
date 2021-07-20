import { AdminResponse } from './../../response/admin-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/details/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  registerForm: FormGroup;

  userName: FormControl;
  password: FormControl;
  email :FormControl;
  mobile :FormControl;

  adminId: number;
  admin: AdminResponse;
  namePattern='[A-Z][a-z]+[ ]?[a-zA-Z]+';
  mobilePattern='^$|[0-9]{10}';

  formSubmitted = false;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.userName = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.mobile = new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);

    

    this.registerForm = new FormGroup(
      {
        
        'password': this.password,
        'userName': this.userName,
        'mobile': this.mobile,
        'email': this.email,
      }
    );

    this.route.paramMap.subscribe(params =>
      {
        this.adminId = +params.get("adminId");
        console.log(this.adminId)
      });

    // this.adminService.get(this.adminId).subscribe(data =>
    //   {
    //     console.log(data);
    //     this.admin = data;
    //   }, error => console.log(error));
  }

  onSubmit()
  {
    
      this.updateAdmin(this.registerForm.value);
    console.log(this.registerForm.value);
  }

  updateAdmin(admin: Admin)
  {
    admin.userId = this.adminId;
    console.log(admin);
    this.adminService.updateAdmin(admin)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}




