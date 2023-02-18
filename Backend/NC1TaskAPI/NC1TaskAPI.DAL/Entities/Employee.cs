using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;
public class Employee
{
    [Key] public int Id { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Surname { get; set; } = string.Empty;

    [Required]
    [Range(14, int.MaxValue)]
    public int Age { get; set; }
    public Gender Gender { get; set; }

    public Department Department { get; set; } = null!;
    public int DepartmentId { get; set; }
    public ProgrammingLanguage Language { get; set; } = null!;
    public int LanguageId { get; set; }
}
public enum Gender
{
    Male,
    Female
}
