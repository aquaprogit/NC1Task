async function getApi<T>(url: string): Promise<T> {
    return await fetch(url).then((response) => {
        if (!response.ok) {
            console.log(response);
        }
        return response.json();
    });
}
class Employee {
    id: number = 0;
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
const controlToEmployees = new Map<HTMLInputElement, Employee>();

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
    buttonDelete.addEventListener('click', deleteEmployee);
    controlToEmployees.set(buttonDelete, eml);
    row.appendChild(buttonDelete);

    return row;
}
function deleteEmployee(event: Event) {
    if (event != null && event.target != null) {
        let id = controlToEmployees.get(event.target as HTMLInputElement)?.id;
        if (id == undefined)
            return;
        getApi("https://localhost:7080/Employee/Delete/" + id.toString()).then((json) => {
            console.log(json);
        });
    }
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

