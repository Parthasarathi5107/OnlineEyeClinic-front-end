export class AdminResponse {

     userId:number;
	 adminName:string;
	 email:string;
	 mobile:string;


  constructor(
    userId: number, 
    adminName: string, 
    email: string, 
    mobile: string
) {
    this.userId = userId
    this.adminName = adminName
    this.email = email
    this.mobile = mobile
  }

}
