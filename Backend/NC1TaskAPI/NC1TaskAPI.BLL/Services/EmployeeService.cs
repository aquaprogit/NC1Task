using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.BLL.Services;
public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepo _repo;
    private readonly IMapper _mapper;
    public EmployeeService(IEmployeeRepo repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }

    public async Task<List<DisplayEmployeeDTO>> GetAllEmployees()
    {
        return await Task.Run(() => _repo.GetAll().Select(emp => _mapper.Map<DisplayEmployeeDTO>(emp)).ToList());
    }
    public async Task<DisplayEmployeeDTO> GetEmployee(int id)
    {
        return _mapper.Map<DisplayEmployeeDTO>(await _repo.FindAsync(id));
    }
    public async Task AddEmployee(NewEmployeeDTO employee)
    {
        await _repo.AddAsync(_mapper.Map<Employee>(employee));
    }
    public async Task<bool> DeleteEmployee(int id)
    {
        var employee = await _repo.FindAsync(id);
        return employee != null && _repo.Delete(employee) > 0;
    }
    public async Task PutEmployee(EmployeeDTO employee)
    {
        var mapped = _mapper.Map<Employee>(employee);
        var same = _repo.Table.SingleOrDefault(emp => emp.Id == mapped.Id);
        if (same == null)
            await _repo.AddAsync(mapped);
        else
            _repo.Update(mapped);
    }
}
