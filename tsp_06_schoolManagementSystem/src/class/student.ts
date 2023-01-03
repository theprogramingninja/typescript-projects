export default class Student{
    studentID:number;
    name: string;
    age:number;
    balance: number;
    courses: Array<string>;
    fee: boolean;
  
    private id_generator = (): number=>{
        // here we will generate id for student id will be unique and consist of digit
        return 10;
    }

    show_status(): Object{
        return [this.studentID, this.name, this.age, this.balance, this.courses, this.fee]
    }

    enroll(courses:string){
        this.courses.push(courses)
     }

    pay_fee(){
        if(this.balance>=500){
            this.balance -= 500
            this.fee = true
            console.log(`You have successfully Pay your Fee.`)
        }else{
            console.log("Your balance is insufficent please try again after recharging your account.")
        }
        
    }
    view_balance(){
        console.log(`Your current balance is ${this.balance}`)
    }
    constructor(name:string, age:number)
    constructor(name:string, age:number){
        this.studentID =  this.id_generator()
        this.name = name ;
        this.balance = Math.floor(Math.random()*1000);
        this.age = age;
        this.courses = [];
        this.fee = false;
      
    }
}
