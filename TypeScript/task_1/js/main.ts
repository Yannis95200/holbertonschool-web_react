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

const printTeacher : printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}