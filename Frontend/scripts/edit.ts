class Employee {
    id: number = 0;
    name: string = "";
    surname: string = "";
    age: number = 1;
    genderValue: string = "";
    departmentName: string = "";
    languageName: string = "";
}
class Department {
    id: number = 0;
    name: string = "";
    floor: number = 0;
}
class Language {
    id: number = 0;
    name: string = "";
}
async function getEmployeeById(id: number): Promise<Employee> {
    let result: Employee = new Employee();
    await getApi<Employee[]>("https://localhost:7080/Employee/Get/" + id.toString()).then(
        (json) => {
            result = Object.assign(new Employee(), json);
            console.log(result);
        }
    );
    return result;
}
async function getApi<T>(url: string): Promise<T> {
    return await fetch(url).then((response) => {
        if (!response.ok) {
            console.log(response);
        }
        else {
            return response.json();
        }
    });
}
async function postData(url: string, data: string): Promise<any> {
    return await fetch(url, {
        method: 'PUT', body: data, headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    }).then((response) => {
        if (!response.ok)
            console.log(response);
        else
            return response.json();
    });
}
var currentEmployee: Employee;
var departments: Department[] = [];
var languages: Language[] = [];
var nameField: HTMLInputElement
var surnameField: HTMLInputElement
var ageField: HTMLInputElement

var genderField: HTMLSelectElement;
var departmentField: HTMLSelectElement;
var languageField: HTMLSelectElement;
async function loading(): Promise<void> {
    let url_string = window.location.href;
    let url = new URL(url_string);


    console.log('current employee\'s id: ' + parseInt(url.searchParams.get("id") ?? "-1"));
    currentEmployee = await getEmployeeById(parseInt(url.searchParams.get("id") ?? "-1"));

    nameField = document.getElementById('name') as HTMLInputElement;
    surnameField = document.getElementById('surname') as HTMLInputElement;
    ageField = document.getElementById('age') as HTMLInputElement;
    genderField = document.getElementById('genderValue') as HTMLSelectElement;
    departmentField = document.getElementById('departmentName') as HTMLSelectElement;
    languageField = document.getElementById('languageName') as HTMLSelectElement;

    await fillDepartments(currentEmployee, departmentField);
    await fillLanguages(currentEmployee, languageField);

    nameField.value = currentEmployee.name;
    surnameField.value = currentEmployee.surname;
    ageField.value = currentEmployee.age.toString();
    genderField.selectedIndex = currentEmployee.genderValue == 'Male' ? 0 : 1;
}

async function sumbitChanges() {
    let data = new FormData();
    data.set('id', currentEmployee.id.toString());
    data.set('name', nameField.value);
    data.set('surname', surnameField.value);
    data.set('age', ageField.value);
    data.set('gender', genderField.selectedIndex.toString());
    data.set('departmentId', departmentField.options[departmentField.selectedIndex].value);
    data.set('languageId', languageField.options[languageField.selectedIndex].value);
    var object = new Map<string, any>();

    alert();

    await postData('https://localhost:7080/Employee/Put/', JSON.stringify(formToJSON(data))).then(res => {
        console.log(res.json());
    });
    data.set('a', "a");
}
function formToJSON(data: FormData) {
    const obj: { [k: string]: string } = {};
    data.forEach((val, key) => {
        obj[key] = val.toString();
    });
    return obj;
}
async function fillLanguages(currentEmployee: Employee, languageField: HTMLSelectElement) {
    languages = await getApi<Language[]>('https://localhost:7080/Language/GetAll/');
    languages.forEach(element => {
        let option = document.createElement('option');
        option.text = element.name;
        option.value = element.id.toString();
        if (currentEmployee.languageName == element.name)
            option.selected = true;
        languageField.appendChild(option);
    });
}

async function fillDepartments(currentEmployee: Employee, departmentField: HTMLSelectElement) {
    departments = await getApi<Department[]>('https://localhost:7080/Department/GetAll/');
    departments.forEach(element => {
        let option = document.createElement('option');
        option.text = element.name;
        option.value = element.id.toString();
        if (currentEmployee.departmentName == element.name)
            option.selected = true;
        departmentField.appendChild(option);
    });
}
