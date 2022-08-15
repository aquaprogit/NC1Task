using Microsoft.EntityFrameworkCore;

using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Base;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.DAL.Repos;
public class EmployeeRepo : RepoBase<Employee>, IEmployeeRepo
{
    public EmployeeRepo(ApplicationContext context) : base(context) { }
    public override IEnumerable<Employee> GetAll()
    {
        return Table.Include(emp => emp.Language).Include(emp => emp.Department);
    }
    public override Task<Employee?> FindAsync(int id)
    {
        return Table.Include(emp => emp.Language).Include(emp => emp.Department).SingleOrDefaultAsync(emp => emp.Id == id);
    }
}
