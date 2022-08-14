using AutoMapper;

using Microsoft.AspNetCore.Mvc;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services;
using NC1TaskAPI.BLL.Services.Interfaces;

namespace NC1TaskAPI.Controllers;
[ApiController]
[Route("[controller]/")]
public class LanguageController : ControllerBase
{
    private readonly ILanguageService _languageService;

    public LanguageController(ILanguageService languageService)
    {
        _languageService = languageService ?? throw new ArgumentNullException(nameof(languageService));
    }
    [HttpGet("[action]/")]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _languageService.GetLanguages());
    }
    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> Get(int id)
    {
        return Ok(await _languageService.GetLanguage(id));
    }
    [HttpPost("[action]/")]
    public async Task<IActionResult> AddNew([FromBody] DisplayLanguageDTO language)
    {
        await _languageService.AddLanguage(language);
        return Ok();
    }
    [HttpDelete("[action]/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _languageService.DeleteLanguage(id);
        return Ok();
    }
    [HttpPut("[action]/")]
    public async Task<IActionResult> Put([FromBody] LanguageDTO language)
    {
        await _languageService.PutLanguage(language);
        return Ok();
    }
}
