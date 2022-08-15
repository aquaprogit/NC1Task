using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.Profiles;
public class EmployeeProfile : Profile
{
    public EmployeeProfile()
    {
        CreateMap<NewEmployeeDTO, Employee>();
        CreateMap<Employee, DisplayEmployeeDTO>().ForMember(emp => emp.GenderValue, opt => opt.MapFrom(source => source.Gender.ToString()));    
        CreateMap<Employee, EmployeeDTO>().ReverseMap();
    }
}
