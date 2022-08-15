using NC1TaskAPI.BLL.DTO;

namespace NC1TaskAPI.BLL.Services.Interfaces;
public interface ILanguageService
{
    Task AddLanguage(DisplayLanguageDTO language);
    Task<bool> DeleteLanguage(int id);
    Task<LanguageDTO> GetLanguage(int id);
    Task<List<LanguageDTO>> GetLanguages();
    Task PutLanguage(LanguageDTO language);
}
