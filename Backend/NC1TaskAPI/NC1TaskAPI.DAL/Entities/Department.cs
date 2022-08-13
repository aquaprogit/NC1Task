using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;

public class Department
{
    public Department()
    {
        Id = 0;
        Name = string.Empty;
        Floor = 1;
        Employees = new List<Employee>();
    }

    public Department(string name, int floor)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Floor = floor;
        Employees = new List<Employee>();
    }

    [Key]
    public int Id { get; set; }
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
    [Required]
    [Range(0, int.MaxValue)]
    public int Floor { get; set; }
    public List<Employee> Employees { get; set; }
}