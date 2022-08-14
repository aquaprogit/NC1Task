using NC1TaskAPI.BLL.DTO;

namespace NC1TaskAPI.BLL.Services.Interfaces;
public interface ILanguageService
{
    Task AddLanguage(DisplayLanguageDTO language);
    Task<bool> DeleteLanguage(int id);
    Task<DisplayLanguageDTO> GetLanguage(int id);
    Task<List<DisplayLanguageDTO>> GetLanguages();
    Task PutLanguage(LanguageDTO language);
}
