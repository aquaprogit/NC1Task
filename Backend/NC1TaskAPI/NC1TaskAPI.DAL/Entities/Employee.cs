using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;
public class Employee
{

    public Employee()
    {
        Id = 0;
        Name = string.Empty;
        Surname = string.Empty;
        Age = 0;
        Gender = Gender.Male;
        Department = new Department();
    }

    public Employee(string name, string surname, int age, Gender gender, Department department)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Surname = surname ?? throw new ArgumentNullException(nameof(surname));
        Age = age;
        Gender = gender;
        Department = department ?? throw new ArgumentNullException(nameof(department));
    }

    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Name { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Surname { get; set; }

    [Required]
    [Range(14, int.MaxValue)]
    public int Age { get; set; }
    public Gender Gender { get; set; }

    public Department Department { get; set; }
}
public enum Gender
{
    Male,
    Female
}
