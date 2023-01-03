class Student {
    studentID;
    name;
    age;
    balance;
    courses;
    fee;
    id_generator = () => {
        // here we will generate id for student id will be unique and consist of digit
        return 10;
    };
    show_status() {
        return [this.studentID, this.name, this.age, this.balance, this.courses, this.fee];
    }
    enroll(courses) {
        this.courses.push(courses);
    }
    pay_fee() {
        if (this.balance >= 500) {
            this.balance -= 500;
            this.fee = true;
            console.log(`You have successfully Pay your Fee.`);
        }
        else {
            console.log("Your balance is insufficent please try again after recharging your account.");
        }
    }
    view_balance() {
        console.log(`Your current balance is ${this.balance}`);
    }
    constructor(name, age) {
        this.studentID = this.id_generator();
        this.name = name;
        this.balance = Math.floor(Math.random() * 1000);
        this.age = age;
        this.courses = [];
        this.fee = false;
    }
}
let std1 = new Student("rida", 32);
std1.view_balance();
export {};
