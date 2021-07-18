import { AppointmentService } from 'src/app/service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  doctorId: number;
  doctor: Doctor;
  date:Date;

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
        console.log(this.doctor)
      }, error => console.log(error));

      

    }

    // view(){
    //   this.doctorService.viewByDateAndName(date.,this.doctor.userName).subscribe(data =>{
    //     this.testDetails=data;
    //     this.testDetails.forEach(element => {
    //       if(element.patient.userId == this.patientId){
    //         console.log(data);
    //         this.allTests = data;
    //       }
          
    //     });
        
    //   });
    // }

}
