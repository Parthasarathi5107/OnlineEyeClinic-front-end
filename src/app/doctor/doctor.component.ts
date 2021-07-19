import { DoctorResponse } from './../response/doctor-response';
import { DoctorService } from './../service/doctor.service';
import { Doctor } from './../details/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorId: number;
  doctor: DoctorResponse;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe( data=>
      {
        console.log(data);
        this.doctor = data;
        console.log(this.doctor)
      }, error => console.log(error));

    
    
    }

  //   goDetails()
  // {
  //   this.router.navigate(['doctor',this.doctorId,'details']);
  // }

      
  

}
