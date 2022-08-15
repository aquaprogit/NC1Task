using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.Profiles;
public class LanguageProfile : Profile
{
    public LanguageProfile()
    {
        CreateMap<DisplayLanguageDTO, ProgrammingLanguage>().ReverseMap();
        CreateMap<LanguageDTO, ProgrammingLanguage>().ReverseMap();
    }
}
