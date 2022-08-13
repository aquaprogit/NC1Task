using AutoMapper;

using NC1TaskAPI.BLL.DTO;
using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.Profiles;
public class DepartmentProfile : Profile
{
    public DepartmentProfile()
    {
        CreateMap<Department, DisplayDepartmentDTO>().ReverseMap();
        CreateMap<Department, NewDepartmentDTO>().ReverseMap();
        CreateMap<Department, DepartmentDTO>().ReverseMap();
    }
}
