export class Friends {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string = "", age: number = 0, email: string = "", bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    about(): void {
        console.log(`${this.name}, is ${this.age} years old. You can email him or her at ${this.email}. BFF? ${this.bff ? "yes" : "no"}`);
        
    }
}