async function getApi<T>(url: string): Promise<T> {
    return await fetch(url).then((response) => {
        if (!response.ok) {
            console.log("error");
        }
        return response.json();
    });
}
class Employee {
    name: string = "";
    surname: string = "";
    age: number = 1;
    departmentName: string = "";
    languageName: string = "";
}
async function getEmployees() {
    let result: Employee[] = [];
    await getApi<Employee[]>("https://localhost:7080/Employee/GetAll").then(
        (json) => {
            result = Object.assign([], json);
            console.log(result);
        }
    );

    return result;
}
getEmployees().then((_) => {
    console.log("heeheheh");
})