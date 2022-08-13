using Microsoft.AspNetCore.Mvc;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;

namespace NC1TaskAPI.Controllers;
[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;
    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await _employeeService.GetEmployee(id));
    }
    [HttpPost("[action]/")]
    public async Task<IActionResult> AddNew([FromBody] NewEmployeeDTO employee)
    {
        //await _employeeService.AddEmployee(employee);
        return Ok();
    }
}
