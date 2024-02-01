export interface Employee {
    id: number;
    name: string;
    surname: string;
    age: number;
    genderValue: string;
    departmentName: string;
    languageName: string;
}

export interface Department{
    id: number;
    name: string;
}

export interface Language{
    id: number;
    name: string;
}