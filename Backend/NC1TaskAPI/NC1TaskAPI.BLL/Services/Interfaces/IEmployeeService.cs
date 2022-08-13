using NC1TaskAPI.BLL.DTO;

namespace NC1TaskAPI.BLL.Services.Interfaces;

public interface IEmployeeService
{
    Task AddEmployee(EmployeeDTO employee);
    Task<NewEmployeeDTO> GetEmployee(int id);
}