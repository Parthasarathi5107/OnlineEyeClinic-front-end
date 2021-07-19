export class ReportResponse {

     reportId:number;
	 dateOfReport:Date;
	 descriptionOfReport:string;
	 visualAcuity:string;
	 visualAcuityNear:string;
	 visualAcuityDistance:string;
	 testId:number;
	 patientId:number;


  constructor(
    reportId: number, 
    dateOfReport: Date, 
    descriptionOfReport: string, 
    visualAcuity: string, 
    visualAcuityNear: string, 
    visualAcuityDistance: string, 
    testId: number, 
    patientId: number
) {
    this.reportId = reportId
    this.dateOfReport = dateOfReport
    this.descriptionOfReport = descriptionOfReport
    this.visualAcuity = visualAcuity
    this.visualAcuityNear = visualAcuityNear
    this.visualAcuityDistance = visualAcuityDistance
    this.testId = testId
    this.patientId = patientId
  }

}
