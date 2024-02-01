import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { Employee } from "../models/Employee";

const EmployeeTable = ({ employees, onDelete } : { employees: Employee[], onDelete: (employeeId: number) => void }) => {
    return (
        <Table sx={{width: '70%'}} >
        <TableHead>
            <TableRow>
                <TableCell>Full name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>{}</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                employees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{`${employee.name} ${employee.surname}`}</TableCell>
                        <TableCell>{employee.age}</TableCell>
                        <TableCell>{employee.genderValue}</TableCell>
                        <TableCell>{employee.departmentName}</TableCell>
                        <TableCell>{employee.languageName}</TableCell>
                    <TableCell>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Button size='small' variant='outlined' color="primary">Edit</Button>
                        <Button size='small' variant='outlined' color="secondary" onClick={() => onDelete(employee.id)}>Delete</Button>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}

export default EmployeeTable;