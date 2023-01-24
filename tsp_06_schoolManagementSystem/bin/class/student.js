export default class Student {
    studentID;
    name;
    age;
    balance;
    courses;
    fee;
    generateID = () => {
        // here we will generate id for student id will be unique and consist of digit
        return 10;
    };
    showStatus() {
        return `Role #:  ${this.studentID},\nName: ${this.name},\nAge: ${this.age}, \nCourses: ${this.courses.join(', ')},\nBalance:  ${this.balance}\nFee: ${this.fee ? 'Paid' : 'Due'}`;
    }
    rechargeBalance(balance) {
        this.balance += balance;
        return `Your account is succesfully recharge. Your current balance is ${this.balance}`;
    }
    enroll(courses) {
        this.courses.push(courses);
    }
    viewCourses() {
        return `Courses: ${this.courses.join(', ')}`;
    }
    payFee() {
        if (this.balance >= 500) {
            this.balance -= 500;
            this.fee = true;
            return `You have successfully Pay your Fee.`;
        }
        else {
            return "Your balance is insufficent please try again after recharging your account.";
        }
    }
    viewBalance() {
        return `Your current balance is ${this.balance}`;
    }
    constructor(name, age) {
        this.studentID = this.generateID();
        this.name = name;
        this.balance = Math.floor(Math.random() * 1000);
        this.age = age;
        this.courses = [];
        this.fee = false;
    }
}
