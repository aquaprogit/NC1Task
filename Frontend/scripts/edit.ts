class Employee {
    id: number = 0;
    name: string = "";
    surname: string = "";
    age: number = 1;
    genderValue: string = "";
    departmentName: string = "";
    languageName: string = "";
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
async function loading(): Promise<void> {
    let url_string = window.location.href;
    let url = new URL(url_string);

    const currentEmployeeId = parseInt(url.searchParams.get("id") ?? "-1");
    console.log('current employee\'s id: ' + currentEmployeeId);
    var currentEmployee = getEmployeeById(currentEmployeeId);
    console.log(currentEmployee);
}