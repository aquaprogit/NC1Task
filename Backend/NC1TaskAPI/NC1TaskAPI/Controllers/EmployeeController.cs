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
    [HttpDelete("[action]/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        return await _employeeService.DeleteEmployee(id) ? Ok() : NotFound();
    }
    [HttpPut("[action]/")]
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
    [HttpGet("[action]/")]
    public async Task<IActionResult> GetEmployeesByLanguage(int languageId)
    {
        try
        {
            var result = await _employeeService.GetEmployeesByLanguage(languageId);
            return Ok(result);
        }
        catch (Exception)
        {
            return BadRequest(languageId);
        }
    }
}
