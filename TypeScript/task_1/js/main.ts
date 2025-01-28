interface Teacher {
    readonly firstName: String;
    readonly lastName: String;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: String;
    [propName: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string
    displayName(): string

}

class StudentClass implements StudentClassInterface {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string,) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {

        return this.firstName
    }
}