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
            return response.json();
        });
    });
}
function loading() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let url_string = window.location.href;
        let url = new URL(url_string);
        const currentEmployeeId = parseInt((_a = url.searchParams.get("id")) !== null && _a !== void 0 ? _a : "-1");
        console.log('current employee\'s id: ' + currentEmployeeId);
        var currentEmployee = getEmployeeById(currentEmployeeId);
        console.log(currentEmployee);
    });
}
