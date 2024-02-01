using Microsoft.AspNetCore.Mvc;
using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;

namespace NC1TaskAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class LanguageController : ControllerBase
{
    private readonly ILanguageService _languageService;

    public LanguageController(ILanguageService languageService)
    {
        _languageService = languageService ?? throw new ArgumentNullException(nameof(languageService));
    }
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _languageService.GetLanguages());
    }
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await _languageService.GetLanguage(id));
    }
    [HttpPost]
    public async Task<IActionResult> AddNew([FromBody] DisplayLanguageDTO language)
    {
        await _languageService.AddLanguage(language);
        return Ok();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        return await _languageService.DeleteLanguage(id) ? Ok() : NotFound();
    }
    [HttpPut]
    public async Task<IActionResult> Put([FromBody] LanguageDTO language)
    {
        await _languageService.PutLanguage(language);
        return Ok();
    }
}
