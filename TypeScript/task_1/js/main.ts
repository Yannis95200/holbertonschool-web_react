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
