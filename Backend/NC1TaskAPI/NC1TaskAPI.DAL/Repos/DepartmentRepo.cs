using Microsoft.EntityFrameworkCore;

using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Base;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.DAL.Repos;
public class DepartmentRepo : RepoBase<Department>, IDepartmentRepo
{
    public DepartmentRepo(ApplicationContext context) : base(context) { }

    public override Department? Find(int id)
    {
        return Table.Include(dep => dep.Employees).SingleOrDefault(dep => dep.Id == id);
    }
    public override Task<Department?> FindAsync(int id)
    {
        return Table.Include(dep => dep.Employees).ThenInclude(emp => emp.Language).SingleOrDefaultAsync(dep => dep.Id == id);
    }
}
