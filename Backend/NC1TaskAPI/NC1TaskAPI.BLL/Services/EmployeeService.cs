using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AutoMapper;

using Microsoft.EntityFrameworkCore;

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
        return await Task.Run(() => _mapper.Map<IEnumerable<DisplayEmployeeDTO>>(_repo.GetAll()).ToList());
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
        var same = await _repo.FindAsync(employee.Id);
        var entity = _mapper.Map<Employee>(employee);
        if (same == null)
        {
            _repo.Add(entity);
        }
        else
        {
            same.Name = employee.Name;
            same.Surname = employee.Surname;
            same.Age = employee.Age;
            same.Gender = employee.Gender;
            same.DepartmentId = employee.DepartmentId;
            same.LanguageId = employee.LanguageId;
            _repo.Table.Include(emp => emp.Department).Include(emp => emp.Language);
            _repo.Update(same);
        }
    }
    public async Task<List<DisplayEmployeeDTO>> GetEmployeesByLanguage(int languageId)
    {
        return _mapper.Map<IEnumerable<DisplayEmployeeDTO>>((await _repo.GetEmployeesWithLanguage(languageId)).AsEnumerable()).ToList();
    }
}
