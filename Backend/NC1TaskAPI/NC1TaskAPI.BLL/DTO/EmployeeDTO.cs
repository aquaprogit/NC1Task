using System.ComponentModel.DataAnnotations;

using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.DTO;
public class EmployeeDTO
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }

    public string Surname { get; set; }

    public int Age { get; set; }
    public int Gender { get; set; }
    public int DepartmentId { get; set; }
    public int LanguageId { get; set; }
}
