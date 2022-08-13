using NC1TaskAPI.BLL.Repos.Base;
using NC1TaskAPI.BLL.Repos.Interfaces;
using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.Repos;
public class EmpoyeeRepo : RepoBase<Employee>, IEmployeeRepo
{
    protected EmpoyeeRepo(ApplicationContext context) : base(context) { }
}
