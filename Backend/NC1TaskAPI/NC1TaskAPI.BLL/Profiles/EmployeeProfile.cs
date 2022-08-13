using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.Profiles;
public class EmployeeProfile : Profile
{
    public EmployeeProfile()
    {
        CreateMap<Employee, NewEmployeeDTO>().ReverseMap();
        CreateMap<Employee, DisplayEmployeeDTO>().ReverseMap();
        CreateMap<Employee, EmployeeDTO>().ReverseMap();
    }
}
