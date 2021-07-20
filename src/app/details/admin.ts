
export class Admin {

    userId :number;
	password :string;
	userName :string;
    role :string;
     email :string;
     mobile :string;


  constructor(
    userId: number, 
    password: string, 
    userName: string, 
    role: string, 
    email: string, 
    mobile: string
) {
    this.userId = userId
    this.password = password
    this.userName = userName
    this.role = role
    this.email = email
    this.mobile = mobile
  }
    
}
