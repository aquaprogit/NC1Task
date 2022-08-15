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
    genderValue: string = "";
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
function employeeToTableRow(eml: Employee): HTMLTableRowElement {
    let row = document.createElement('tr');
    let property: keyof typeof eml;
    for (property in eml) {
        if (property == 'id' as Object)
            continue;
        row.appendChild(newTableCellFromValue(eml[property].toString()));
    }
    let buttonEdit = document.createElement('input');
    buttonEdit.type = 'button';
    buttonEdit.value = 'edit';
    row.appendChild(buttonEdit);
    let buttonDelete = document.createElement('input');
    buttonDelete.type = 'button';
    buttonDelete.value = 'delete';
    row.appendChild(buttonDelete);

    return row;
}
function newTableCellFromValue(value: string) {
    let data = document.createElement('td');
    data.innerText = value;
    return data;
}
getEmployees().then((employees) => {
    let table = document.getElementById("content-table") as HTMLTableElement;
    employees.forEach(element => {
        table.appendChild(employeeToTableRow(element));
    });
});

