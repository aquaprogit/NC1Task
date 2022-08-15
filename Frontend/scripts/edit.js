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
class Department {
    constructor() {
        this.id = 0;
        this.name = "";
        this.floor = 0;
    }
}
class Language {
    constructor() {
        this.id = 0;
        this.name = "";
    }
}
function getEmployeeById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = new Employee();
        yield getApi("https://localhost:7080/Employee/Get/" + id.toString()).then((json) => {
            result = Object.assign(new Employee(), json);
            console.log(result);
        });
        return result;
    });
}
function getApi(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(url).then((response) => {
            if (!response.ok) {
                console.log(response);
            }
            else {
                return response.json();
            }
        });
    });
}
function postData(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(url, {
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
    });
}
var currentEmployee;
var departments = [];
var languages = [];
var nameField;
var surnameField;
var ageField;
var genderField;
var departmentField;
var languageField;
function loading() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let url_string = window.location.href;
        let url = new URL(url_string);
        console.log('current employee\'s id: ' + parseInt((_a = url.searchParams.get("id")) !== null && _a !== void 0 ? _a : "-1"));
        currentEmployee = yield getEmployeeById(parseInt((_b = url.searchParams.get("id")) !== null && _b !== void 0 ? _b : "-1"));
        nameField = document.getElementById('name');
        surnameField = document.getElementById('surname');
        ageField = document.getElementById('age');
        genderField = document.getElementById('genderValue');
        departmentField = document.getElementById('departmentName');
        languageField = document.getElementById('languageName');
        yield fillDepartments(currentEmployee, departmentField);
        yield fillLanguages(currentEmployee, languageField);
        nameField.value = currentEmployee.name;
        surnameField.value = currentEmployee.surname;
        ageField.value = currentEmployee.age.toString();
        genderField.selectedIndex = currentEmployee.genderValue == 'Male' ? 0 : 1;
    });
}
function sumbitChanges() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = new FormData();
        data.set('id', currentEmployee.id.toString());
        data.set('name', nameField.value);
        data.set('surname', surnameField.value);
        data.set('age', ageField.value);
        data.set('gender', genderField.selectedIndex.toString());
        data.set('departmentId', departmentField.options[departmentField.selectedIndex].value);
        data.set('languageId', languageField.options[languageField.selectedIndex].value);
        var object = new Map();
        alert();
        yield postData('https://localhost:7080/Employee/Put/', JSON.stringify(formToJSON(data))).then(res => {
            console.log(res.json());
        });
        data.set('a', "a");
    });
}
function formToJSON(data) {
    const obj = {};
    data.forEach((val, key) => {
        obj[key] = val.toString();
    });
    return obj;
}
function fillLanguages(currentEmployee, languageField) {
    return __awaiter(this, void 0, void 0, function* () {
        languages = yield getApi('https://localhost:7080/Language/GetAll/');
        languages.forEach(element => {
            let option = document.createElement('option');
            option.text = element.name;
            option.value = element.id.toString();
            if (currentEmployee.languageName == element.name)
                option.selected = true;
            languageField.appendChild(option);
        });
    });
}
function fillDepartments(currentEmployee, departmentField) {
    return __awaiter(this, void 0, void 0, function* () {
        departments = yield getApi('https://localhost:7080/Department/GetAll/');
        departments.forEach(element => {
            let option = document.createElement('option');
            option.text = element.name;
            option.value = element.id.toString();
            if (currentEmployee.departmentName == element.name)
                option.selected = true;
            departmentField.appendChild(option);
        });
    });
}
