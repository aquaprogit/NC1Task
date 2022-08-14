using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;

public class Department
{
    [Key]
    public int Id { get; set; }
    [Required]
    [MinLength(2)]
    public string Name { get; set; } = string.Empty;
    [Required]
    [Range(0, int.MaxValue)]
    public int Floor { get; set; }
    public List<Employee> Employees { get; set; } = null!;
}