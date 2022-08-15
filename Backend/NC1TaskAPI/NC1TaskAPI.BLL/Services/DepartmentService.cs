using AutoMapper;

using Microsoft.EntityFrameworkCore;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.BLL.Services;
public class DepartmentService : IDepartmentService
{
    private readonly IDepartmentRepo _repo;
    private readonly IMapper _mapper;

    public DepartmentService(IDepartmentRepo repo, IMapper mapper)
    {
        _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }

    public async Task AddDepartment(NewDepartmentDTO department)
    {
        await _repo.AddAsync(_mapper.Map<Department>(department));
    }
    public async Task<DisplayDepartmentDTO?> GetDepartment(int id)
    {
        var source = await _repo.FindAsync(id);
        return _mapper.Map<DisplayDepartmentDTO>(source);
    }
    public async Task<bool> DeleteDepartment(int id)
    {
        var entity = await _repo.FindAsync(id);

        return entity != null && _repo.Delete(entity) > 0;
    }
    public async Task PutDepartment(DepartmentDTO department)
    {
        var same = await _repo.FindAsync(department.Id);
        if (same == null)
        {
            _repo.Add(_mapper.Map<Department>(department));
        }
        else
        {
            _repo.Update(same);
        }
    }
    public async Task<List<DisplayDepartmentDTO>> GetAllDepartment()
    {
        return await Task.Run(() => _repo.Table.Include(dep => dep.Employees).ThenInclude(emp => emp.Language).Select(dep => _mapper.Map<DisplayDepartmentDTO>(dep)).ToList());
    }
}
