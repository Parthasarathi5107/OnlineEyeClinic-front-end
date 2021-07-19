export class PatientResponse {

     userId:number;
	 patientName:string; 
	 patientAge:number;
	 patientMobile:string;
	 patientEmail:string;
	 patientDOB:Date;
	 address:string;


  constructor(
    userId: number, 
    patientName: string, 
    patientAge: number, 
    patientMobile: string, 
    patientEmail: string, 
    patientDOB: Date, 
    address: string
) {
    this.userId = userId
    this.patientName = patientName
    this.patientAge = patientAge
    this.patientMobile = patientMobile
    this.patientEmail = patientEmail
    this.patientDOB = patientDOB
    this.address = address
  }

}
