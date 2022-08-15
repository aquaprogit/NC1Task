async function getApi<T>(url: string): Promise<T> {
    return await fetch(url).then((response) => {
        if (!response.ok) {
            console.log(response);
        }
        return response.json();
    });
}
async function getEmployees(): Promise<Employee[]> {
    let result: Employee[] = [];
    await getApi<Employee[]>("https://localhost:7080/Employee/GetAll").then(
        (json) => {
            result = Object.assign([], json);
            console.log(result);
        }
    );

    return result;
}
async function deleteById(url: string, id: number) {
    return await fetch(url + id.toString(), { method: 'DELETE', }).then((response) => {
        if (!response.ok)
            console.log(response);
        else
            return response.json();
    });
}
const controlToEmployees = new Map<HTMLInputElement, Employee>();

const buttonToEmployee = new Map<HTMLInputElement, Employee>();
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
    buttonDelete.type = 'submit';
    buttonDelete.value = 'delete';
    buttonDelete.addEventListener('click', deleteClick);

    controlToEmployees.set(buttonDelete, eml);
    row.appendChild(buttonDelete);

    return row;
}
async function deleteClick(event: Event) {
    let button = event.target as HTMLInputElement;
    if (button == undefined)
        return;
    await deleteById('https://localhost:7080/Employee/Delete/', controlToEmployees.get(button)?.id ?? -1).then(response => {
        console.log(response.json());
    });

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

