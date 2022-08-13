using Microsoft.EntityFrameworkCore;

namespace NC1TaskAPI.DAL.Repos.Base;
public interface IRepo<T> : IDisposable where T : class
{
    DbSet<T> Table { get; }
    int Add(T entity, bool persist = true);
    Task<int> AddAsync(T entity, bool persist = true);

    T? Find(int id);
    Task<T?> FindAsync(int id);

    int AddRange(IEnumerable<T> entities, bool persist = true);
    Task<int> AddRangeAsync(IEnumerable<T> entities, bool persist = true);

    int Update(T entity, bool persist = true);

    int UpdateRange(IEnumerable<T> entities, bool persist = true);

    int Delete(T entity, bool persist = true);

    int DeleteRange(IEnumerable<T> entities, bool persist = true);

    IEnumerable<T> GetAll();

    int SaveChanges();
    Task<int> SaveChangesAsync();
}
