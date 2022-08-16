using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Base;

namespace NC1TaskAPI.DAL.Repos.Interfaces;
public interface IEmployeeRepo : IRepo<Employee>
{
    Task<List<Employee>> GetEmployeesWithLanguage(int language);
}
