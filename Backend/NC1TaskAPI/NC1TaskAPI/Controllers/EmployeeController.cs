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

    [HttpGet("[action]/")]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _employeeService.GetAllEmployees());
    }
    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await _employeeService.GetEmployee(id));
    }
    [HttpPost("[action]/")]
    public async Task<IActionResult> AddNew([FromBody] NewEmployeeDTO employee)
    {
        await _employeeService.AddEmployee(employee);
        return Ok();
    }
    [HttpDelete("[action]/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _employeeService.DeleteEmployee(id);
        return Ok();
    }
    [HttpPut("[action]/")]
    public async Task<IActionResult> Put([FromBody] EmployeeDTO employee)
    {
        await _employeeService.PutEmployee(employee);
        return Ok();
    }
}
