using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.BLL.Services.Interfaces;
using NC1TaskAPI.DAL.Entities;
using NC1TaskAPI.DAL.Repos.Interfaces;

namespace NC1TaskAPI.BLL.Services;
public class LanguageService : ILanguageService
{
    private readonly ILanguageRepo _repo;
    private readonly IMapper _mapper;

    public LanguageService(ILanguageRepo repo, IMapper mapper)
    {
        _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }

    public async Task<List<LanguageDTO>> GetLanguages()
    {
        return await Task.Run(() => _mapper.Map<IEnumerable<LanguageDTO>>(_repo.GetAll()).ToList());
    }
    public async Task<LanguageDTO> GetLanguage(int id)
    {
        return _mapper.Map<LanguageDTO>(await _repo.FindAsync(id));
    }
    public async Task AddLanguage(DisplayLanguageDTO language)
    {
        await _repo.AddAsync(_mapper.Map<ProgrammingLanguage>(language));
    }
    public async Task<bool> DeleteLanguage(int id)
    {
        var language = await _repo.FindAsync(id);
        return language != null && _repo.Delete(language) > 0;
    }
    public async Task PutLanguage(LanguageDTO language)
    {
        var mapped = _mapper.Map<ProgrammingLanguage>(language);
        var same = _repo.Table.SingleOrDefault(lang => lang.Id == mapped.Id);
        if (same == null)
            await _repo.AddAsync(mapped);
        else
            _repo.Update(mapped);
    }
}
