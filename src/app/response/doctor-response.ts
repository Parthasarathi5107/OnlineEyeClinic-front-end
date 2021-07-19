export class DoctorResponse {

    userId:number;
	doctorName:string;
	doctorConsultationTime:string;
	doctorMobile:string;
	doctorEmail:string;
	address:string;


  constructor(
    userId: number, 
    doctorName: string, 
    doctorConsultationTime: string, 
    doctorMobile: string, 
    doctorEmail: string, 
    address: string
) {
    this.userId = userId
    this.doctorName = doctorName
    this.doctorConsultationTime = doctorConsultationTime
    this.doctorMobile = doctorMobile
    this.doctorEmail = doctorEmail
    this.address = address
  }

}
