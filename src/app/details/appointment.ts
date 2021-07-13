import { Patient } from './patient';
import { Doctor } from './doctor';
import { Time } from '@angular/common';
export class Appointment {

    appointmentId !:number;
	appointmentDate !:Date;
	appointmentTime !:Time;
	doctor !:Doctor;
	status !:string;
	patient !:Patient;

    // constructor(appointmentId:number,appointmentDate:Date,appointmentTime:Time,doctor:Doctor,status:string,patient:Patient)
    // {
    //     this.appointmentId = appointmentId;
    //     this.appointmentDate = appointmentDate;
    //     this.appointmentTime = appointmentTime;
    //     this.doctor = doctor;
    //     this.status = status; 
    //     this.patient = patient;
    // }
    
}
