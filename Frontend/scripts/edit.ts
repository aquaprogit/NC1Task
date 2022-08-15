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
        return response.json();
    });
}
var departments: Department[] = [];
var languages = [];
async function loading(): Promise<void> {
    let url_string = window.location.href;
    let url = new URL(url_string);

    await getApi<Department[]>('https://localhost:7080/Department/GetAll/').then(res => {
        departments = res;
        console.log(departments);
    });

    const currentEmployeeId = parseInt(url.searchParams.get("id") ?? "-1");
    console.log('current employee\'s id: ' + currentEmployeeId);
    var currentEmployee = await getEmployeeById(currentEmployeeId);
    let nameField = document.getElementById('name') as HTMLInputElement;
    let surnameField = document.getElementById('surname') as HTMLInputElement;
    let ageField = document.getElementById('age') as HTMLInputElement;
    let genderField = document.getElementById('genderValue') as HTMLSelectElement;
    let departmentName = document.getElementById('departmentName') as HTMLSelectElement;
    let languageName = document.getElementById('languageName') as HTMLSelectElement;

    departments.forEach(element => {
        let option = document.createElement('option');
        option.text = element.name;
        option.value = element.id.toString();
        if (currentEmployee.departmentName == element.name)
            option.selected = true;
        departmentName.appendChild(option);
    });
    nameField.value = currentEmployee.name;
    surnameField.value = currentEmployee.surname;
    ageField.value = currentEmployee.age.toString();
    genderField.selectedIndex = 0;
    console.log();
}