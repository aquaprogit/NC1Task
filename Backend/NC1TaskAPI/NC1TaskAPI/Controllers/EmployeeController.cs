using Microsoft.AspNetCore.Cors;
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
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _employeeService.GetAllEmployees());
    }
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await _employeeService.GetEmployee(id));
    }
    [HttpPost]
    public async Task<IActionResult> AddNew([FromBody] NewEmployeeDTO employee)
    {
        try
        {
            await _employeeService.AddEmployee(employee);
            return Ok();
        }
        catch (Exception)
        {
            return BadRequest(employee);
        }
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        return await _employeeService.DeleteEmployee(id) ? Ok() : NotFound();
    }
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] EmployeeDTO employee)
    {
        try
        {
            await _employeeService.PutEmployee(employee);
            return Ok();
        }
        catch (Exception)
        {
            return BadRequest(employee);
        }
    }
}
