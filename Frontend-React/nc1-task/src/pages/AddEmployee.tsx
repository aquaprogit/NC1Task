import { useEffect, useState } from "react";
import { Department, Language } from "../models/Employee";
import API from "../services/api/API";
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<number | undefined>(undefined);
    const [departmentId, setDepartmentId] = useState<number>(1);
    const [languageId, setLanguageId] = useState<number>(1);

    const navigate = useNavigate();

    const [availableDepartments, setAvailableDepartments] = useState<Department[]>([]);
    const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            const response = await API.get<Department[]>('/department');
            if (response.data)
                setAvailableDepartments(response.data);
        }

        const fetchLanguages = async () => {
            const response = await API.get<Language[]>('/language');
            if (response.data)
                setAvailableLanguages(response.data);
        }
        fetchDepartments();
        fetchLanguages();
    }, []);

    return (
        <>
            <div>
                <h1>Add Employee</h1>
                <form onSubmit={() => {
                    const employee = {
                        name,
                        surname,
                        age,
                        gender,
                        departmentId,
                        languageId
                    };

                    API.post('/employee', employee);
                    navigate('/');
                }}>
                    <div>
                        <label>Name:</label>
                        <input key={'name'} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Surname:</label>
                        <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type='number' value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                    </div>
                    <div>
                        <label>Gender: </label>
                        <select value={gender} onChange={(e) => setGender(parseInt(e.target.value))}>
                            <option value={undefined}><i>None</i></option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Department: </label>
                        <select value={departmentId} onChange={(e) => setDepartmentId(+e.target.value)}>
                            {
                                availableDepartments.map((department) => (
                                    <option key={department.id} value={department.id}>{department.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Language: </label>
                        <select value={languageId} onChange={(e) => setLanguageId(parseInt(e.target.value))}>
                            {
                                availableLanguages.map((language) => (
                                    <option key={language.id} value={language.id}>{language.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Add</button>
                    </div>
                    </form>
            </div>
        </>
    )
};

export default AddEmployee;