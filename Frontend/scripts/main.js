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
function deleteById(url, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(url + id.toString(), { method: 'DELETE' }).then((response) => {
            if (!response.ok)
                console.log(response);
            else
                return response.json();
        });
    });
}
const controlToEmployees = new Map();
const editToEmployees = new Map();
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
    buttonEdit.addEventListener('click', editClick);
    row.appendChild(buttonEdit);
    let buttonDelete = document.createElement('input');
    buttonDelete.type = 'submit';
    buttonDelete.value = 'delete';
    buttonDelete.addEventListener('click', deleteClick);
    controlToEmployees.set(buttonDelete, eml);
    editToEmployees.set(buttonEdit, eml);
    row.appendChild(buttonDelete);
    return row;
}
function editClick(event) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let button = event.target;
        let employeeId = (_b = (_a = editToEmployees.get(button)) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1;
        window.location.href = "../edit/index.html?id=" + employeeId;
    });
}
function deleteClick(event) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let button = event.target;
        if (button == undefined)
            return;
        yield deleteById('https://localhost:7080/Employee/Delete/', (_b = (_a = controlToEmployees.get(button)) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1).then(response => {
            console.log(response.json());
        });
    });
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
