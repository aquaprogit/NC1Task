"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(url).then((response) => {
            if (!response.ok) {
                console.log(response);
            }
            return response.json();
        });
    });
}
class Employee {
    constructor() {
        this.id = 0;
        this.name = "";
        this.surname = "";
        this.age = 1;
        this.genderValue = "";
        this.departmentName = "";
        this.languageName = "";
    }
}
function getEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        yield getApi("https://localhost:7080/Employee/GetAll").then((json) => {
            result = Object.assign([], json);
            console.log(result);
        });
        return result;
    });
}
const controlToEmployees = new Map();
function employeeToTableRow(eml) {
    let row = document.createElement('tr');
    let property;
    for (property in eml) {
        if (property == 'id')
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
function deleteEmployee(event) {
    var _a;
    if (event != null && event.target != null) {
        let id = (_a = controlToEmployees.get(event.target)) === null || _a === void 0 ? void 0 : _a.id;
        if (id == undefined)
            return;
        getApi("https://localhost:7080/Employee/Delete/" + id.toString()).then((json) => {
            console.log(json);
        });
    }
}
function newTableCellFromValue(value) {
    let data = document.createElement('td');
    data.innerText = value;
    return data;
}
getEmployees().then((employees) => {
    let table = document.getElementById("content-table");
    employees.forEach(element => {
        table.appendChild(employeeToTableRow(element));
    });
});
