import { DoctorResponse } from './../../response/doctor-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit {

  doctorId: number;
  doctor: DoctorResponse;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
        console.log(this.doctorId)
      });

    this.doctorService.getDoctor(this.doctorId).subscribe(data =>
      {
        console.log(data);
        this.doctor= data;
      }, error => console.log(error));
  }

  backToPortal()
  {
    this.router.navigate(['doctor',this.doctorId]);
  }

  goUpdate()
  {
    this.router.navigate(['doctor',this.doctorId,'details','update']);
  }

}
