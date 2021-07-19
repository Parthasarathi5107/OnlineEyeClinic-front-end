export class TestResponse {

     testId:number;
	 testName:string;
	 testType:string;
	 testDescription:string;
	 testCost:number;
	 patientId:number;


  constructor(
    testId: number, 
    testName: string, 
    testType: string, 
    testDescription: string, 
    testCost: number, 
    patientId: number
) {
    this.testId = testId
    this.testName = testName
    this.testType = testType
    this.testDescription = testDescription
    this.testCost = testCost
    this.patientId = patientId
  }

}
