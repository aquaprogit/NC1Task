import { useParams } from "react-router-dom";
import { Employee } from "../models/Employee";
import API from "../services/api/API";
import { useEffect, useState } from "react";

const EditEmployee = () => {
    const { id } = useParams<{ id: string }>();

    const [employee, setEmployee] = useState<Employee | undefined>(undefined);

    const fetchEmployee = async () => {
        const response = await API.get<Employee>(`/employee/${id}`);
        if (response.data)
            setEmployee(response.data);
        else
            setEmployee(undefined);
    }

    useEffect(() => {
        fetchEmployee();
    }, []);

    return (
        <>
            {
                !!employee ? (
                    <div>
                        <h1>Edit Employee</h1>
                        <form onSubmit={() => {
                            if (!employee){
                                return;
                            }

                            const editedEmployee = {
                                name: employee?.name,
                                surname: employee?.surname,
                                age: employee?.age,
                                gender: employee?.genderValue,
                                departmentId: employee?.,
                                languageId: employee?.languageId

                    </div>
                )
                    :
                    (
                        <div>
                            <h1>Employee not found</h1>
                        </div>
                    )
            }
        </>
    )
}

export default EditEmployee;