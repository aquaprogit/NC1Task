using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;
public class ProgrammingLanguage
{
    [Key]
    public int Id { get; set; }
    [Required]
    [MinLength(2)]
    public string Name { get; set; } = string.Empty;
    public List<Employee> Employees { get; set; } = new();
}
