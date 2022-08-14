using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;

namespace NC1TaskAPI.Controllers;
[ApiController]
[Route("[controller]")]
public class DepartmentController : ControllerBase
{
    private readonly IDepartmentService _departmentService;

    public DepartmentController(IDepartmentService departmentService)
    {
        _departmentService = departmentService ?? throw new ArgumentNullException(nameof(departmentService));
    }
    [HttpPost("[action]/")]
    public async Task<IActionResult> AddNew([FromBody] NewDepartmentDTO department)
    {
        await _departmentService.AddDepartment(department);
        return Ok();
    }
    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var department = await _departmentService.GetDepartment(id);
        return department != null ? Ok(department) : NotFound();
    }
    [HttpGet("[action]/")]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _departmentService.GetAllDepartment());
    }

    [HttpDelete("[action]/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        return await _departmentService.DeleteDepartment(id) ? Ok() : NotFound();
    }
    [HttpPut("[action]/")]
    public async Task<IActionResult> Put([FromBody] DepartmentDTO department)
    {
        await _departmentService.PutDepartment(department);
        return Ok();
    }

}
