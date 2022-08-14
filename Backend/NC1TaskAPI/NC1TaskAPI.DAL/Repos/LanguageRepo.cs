using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Base;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.DAL.Repos;
public class LanguageRepo : RepoBase<ProgrammingLanguage>, ILanguageRepo
{
    public LanguageRepo(ApplicationContext context) : base(context) { }
}
