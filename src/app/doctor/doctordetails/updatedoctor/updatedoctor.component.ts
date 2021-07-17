import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  doctorId: number;
  doctor: Doctor;


  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("id");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe(data =>
      {
        console.log(data);
        this.doctor = data;
        
      }, error => console.log(error));
  }

  update()
  {
    this.doctor.userId=this.doctorId;
        this.doctor.role='doctor';
    this.doctorService.updateDoctor(this.doctor).subscribe(data =>{

      console.log(data);
      this.doctor = data;
    });
    this.back();
  }

  back()
  {
    this.router.navigate(['doctor',this.doctorId,'details']);
  }

}
