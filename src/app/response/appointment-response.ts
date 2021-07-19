import { Time } from '@angular/common';
export class AppointmentResponse {

     appointmentId:number;
	 appointmentDate:Date;
	 appointmentTime:Time;
	 status:string;
	 doctorId:number;
     patientId:number;

  constructor(
    appointmentId: number, 
    appointmentDate: Date, 
    appointmentTime: Time, 
    status: string, 
    doctorId: number, 
    patientId: number
) {
    this.appointmentId = appointmentId
    this.appointmentDate = appointmentDate
    this.appointmentTime = appointmentTime
    this.status = status
    this.doctorId = doctorId
    this.patientId = patientId
  }
	 
}
