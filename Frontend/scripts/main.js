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
                console.log("error");
            }
            return response.json();
        });
    });
}
class Employee {
    constructor() {
        this.name = "";
        this.surname = "";
        this.age = 1;
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
getEmployees().then((_) => {
    console.log("heeheheh");
});
