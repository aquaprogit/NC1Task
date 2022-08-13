using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.DTO;
public class EmployeeDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Surname { get; set; } = string.Empty;
    public int Age { get; set; } = 1;
    public Gender Gender { get; set; } = Gender.Male;
}
