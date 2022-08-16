using NC1TaskAPI.BLL.DTO;

namespace NC1TaskAPI.BLL.Services.Interfaces;

public interface IEmployeeService
{
    Task AddEmployee(NewEmployeeDTO employee);
    Task<bool> DeleteEmployee(int id);
    Task<List<DisplayEmployeeDTO>> GetAllEmployees();
    Task<DisplayEmployeeDTO> GetEmployee(int id);
    Task<List<DisplayEmployeeDTO>> GetEmployeesByLanguage(int languageId);
    Task PutEmployee(EmployeeDTO employee);
}