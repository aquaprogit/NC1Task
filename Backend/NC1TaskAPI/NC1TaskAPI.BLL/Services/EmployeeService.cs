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

    public async Task<NewEmployeeDTO> GetEmployee(int id)
    {
        return _mapper.Map<NewEmployeeDTO>(await _repo.FindAsync(id));
    }
    public async Task AddEmployee(EmployeeDTO employee)
    {
        await _repo.AddAsync(_mapper.Map<Employee>(employee));
    }
}
