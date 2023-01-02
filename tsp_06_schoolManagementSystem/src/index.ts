class Student{
    studentID:number;
    name: string;
    age:number;
    balance: number;
    fee: boolean;
    courses: Array<string>;
    
    show_status(): Object{
        return [this.studentID, this.name, this.age, this.balance]
    }
    enroll(courses:Array<string>){
       this.courses  = courses
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

    private id_generator = (): number=>{
        // here we will generate id for student id will be unique and consist of digit
        return 10;
    }

    constructor(name:string, age:number, balance:number ,courses:Array<string>){
        this.studentID =  this.id_generator()
        this.name = name ;
        this.age = age;
        this.fee = false;
        this.balance = balance;
        this.courses = courses;

    }
}


// enroll courses  