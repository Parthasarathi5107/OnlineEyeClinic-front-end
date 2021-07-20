import { AppointmentResponse } from './../../response/appointment-response';
import { DoctorService } from 'src/app/service/doctor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorResponse } from 'src/app/response/doctor-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  doctorId: number;
  doctor: DoctorResponse;
  date:Date;
 appointment : AppointmentResponse[]=[];
  registerForm: FormGroup;

  appointmentDate: FormControl;

  formSubmitted = false;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentDate = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup(
      {
        'appointmentDate': this.appointmentDate,
        
      }
    );

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe(data =>
      {
        console.log(data);
        this.doctor = data;
        console.log(this.doctor)
      }, error => console.log(error));

      

    }

    backToPortal()
    {
      this.router.navigate(['appointment',this.doctorId]);
    }
  
    onSubmit()
    {
      console.log(this.registerForm.value);
        this.viewAppointment();
      
    }

    viewAppointment()
  {
    
    this.doctorService.viewByDateAndName(this.appointmentDate.value,this.doctor.doctorName)
    .subscribe(data => {
      console.log(data)
     this.appointment = data;
    },
    error => console.log(error));
    this.formSubmitted = true;
   
  }


  //   getAllAppointments()
  // {
  //  this.appointmentService.getAllAppointments().subscribe(data=>{
     
  //      this.appointments = data;
  //     this.appointments.forEach(element => {
  //       if(element.patientId ==this.patientId)
  //       {
  //         this.patientAppointments.push(element);
  //       }
  //     });
  //  },
  //  err=>
  //  {
  //    console.log(err.error);
  //  }
   
  //  ); 
  
  // }
}
