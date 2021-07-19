
 export class Patient{

    userId :number;
	password :string;
	userName :string;
    role :string;
    patientAge :number;
    patientMobile :number;
    patientEmail :string;
    patientDOB :Date;
    address :string;

  

  constructor(
    userId: number, 
    password: string, 
    userName: string, 
    role: string, 
    patientAge: number, 
    patientMobile: number, 
    patientEmail: string, 
    patientDOB: Date, 
    address: string
) {
    this.userId = userId
    this.password = password
    this.userName = userName
    this.role = role
    this.patientAge = patientAge
    this.patientMobile = patientMobile
    this.patientEmail = patientEmail
    this.patientDOB = patientDOB
    this.address = address
  }


 
  
 

}

