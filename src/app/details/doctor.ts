
export class Doctor{

    userId :number;

    public get(): number {
        return this.userId;
    }

    public set(userId: number): void {
        this.userId = userId;
    }

	password :string;
	userName :string;
    role :string;
    doctorConsultationTime :string;
	doctorMobile :string;
    doctorEmail :string;
	address :string;





  constructor(
    userId: number, 
    password: string, 
    userName: string, 
    role: string, 
    doctorConsultationTime: string, 
    doctorMobile: string, 
    doctorEmail: string, 
    address: string
) {
    this.userId = userId
    this.password = password
    this.userName = userName
    this.role = role
    this.doctorConsultationTime = doctorConsultationTime
    this.doctorMobile = doctorMobile
    this.doctorEmail = doctorEmail
    this.address = address
  }
    
}
