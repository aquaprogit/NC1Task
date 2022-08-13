using NC1TaskAPI.BLL.DTO;

namespace NC1TaskAPI.BLL.Services.Interfaces;
public interface IDepartmentService
{
    Task AddDepartment(NewDepartmentDTO department);
    Task<bool> DeleteDepartment(int id);
    Task<List<DisplayDepartmentDTO>> GetAllDepartment();
    Task<DisplayDepartmentDTO?> GetDepartment(int id);
    Task PutDepartment(DepartmentDTO department);
}
