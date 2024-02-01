import { useEffect, useState } from "react";
import { Employee } from "../models/Employee";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import API from "../services/api/API";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    
    const fetchEmployees = async () => {
        setLoading(true);
        const response = await API.get<Employee[]>('/employee');
        if (response.data)
            setEmployees(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            <div>
                <h1>Employees</h1>
                <Link to="/add">Create Employee</Link>
            </div>
        
           <EmployeeTable employees={employees!} onDelete={async(id: number) => {
                await API.delete(`/employee/${id}`);
                await fetchEmployees();
           }} />
        </>
    )
}

export default EmployeesPage;