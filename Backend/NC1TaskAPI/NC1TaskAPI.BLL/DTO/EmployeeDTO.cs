using System.ComponentModel.DataAnnotations;

using NC1TaskAPI.DAL.Entities;

namespace NC1TaskAPI.BLL.DTO;
public class EmployeeDTO
{
    [Key]
    public int Id { get; set; }
    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Surname { get; set; } = string.Empty;

    [Required]
    [Range(14, int.MaxValue)]
    public int Age { get; set; } = 1;
    public Gender Gender { get; set; } = Gender.Male;
}
