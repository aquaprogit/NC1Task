using Microsoft.EntityFrameworkCore;

using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.DAL.EF;
public class ApplicationContext : DbContext
{
    public virtual DbSet<Employee> Employees { get; set; }
    public virtual DbSet<Department> Departments { get; set; }
    public virtual DbSet<ProgrammingLanguage> Languages { get; set; }

    protected ApplicationContext(DbContextOptions options) : base(options) { }

    public ApplicationContext()
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(local);Database=artsofte;Trusted_Connection=True;TrustServerCertificate=True\r\n");
    }
}
