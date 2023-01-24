export default class Student{
    private studentID:number;
    private name: string;
    private age:number;
    private balance: number;
    private courses:string[];
    private fee: boolean;
  
    private  generateID = (): number=>{
        // here we will generate id for student id will be unique and consist of digit
        return 10;
    }
    
    public showStatus(): string{
        return `Role #:  ${this.studentID},\nName: ${this.name},\nAge: ${this.age}, \nCourses: ${this.courses.join(', ')},\nBalance:  ${this.balance}\nFee: ${this.fee ? 'Paid': 'Due'}`
    }
    public rechargeBalance(balance:number):string{
        this.balance += balance
        return `Your account is succesfully recharge. Your current balance is ${this.balance}`
    }
    public enroll(course:string){
        const item = this.courses.includes(course)
        if (item){
            return `You have already enroll in ${course} course`
        }
        else{
            this.courses.push(course)
            return `You have successfully enrolled in ${course} course`
        }
        
     }

    public viewCourses():string{
        return `Courses: ${this.courses.join(', ')}`
    }
    public payFee():string{
        if(this.balance>=500){
            this.balance -= 500
            this.fee = true
            return`You have successfully Pay your Fee.`
        }else{
            return "Your balance is insufficent please try again after recharging your account."
        }
    }
    public viewBalance(){
        return `Your current balance is ${this.balance}`
    }

    constructor(name:string, age:number)
    
    constructor(name:string, age:number){
        this.studentID =  this.generateID()
        this.name = name ;
        this.balance = Math.floor(Math.random()*1000);
        this.age = age;
        this.courses = [];
        this.fee = false;
      
    }
}
