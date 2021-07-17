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

<<<<<<< HEAD
  constructor(private doctorService : DoctorService) { }
=======
  doctorId: number;
  doctor: Doctor;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private router: Router) { }
>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("id");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe( data=>
      {
        console.log(data);
        this.doctor = data;
        console.log(this.doctor)
      }, error => console.log(error));

    
    
    }

    goDetails()
  {
    this.router.navigate(['doctor',this.doctorId,'details']);
  }

<<<<<<< HEAD
  doctor !:Doctor[];


  getAllDoctors()
  {
   this.doctorService.getDoctorList().subscribe(data=>{
       this.doctor = data;
   },
   err=>
   {
     console.log(err.error);
   }
   
   ); 
  
  }
=======
      
  

>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2
}
