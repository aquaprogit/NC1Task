using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.DAL.Entities;
public class ProgrammingLanguage
{
    public ProgrammingLanguage()
    {
        Id = 0;
        Name = string.Empty;
    }
    public ProgrammingLanguage(string name)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
    }

    [Key]
    public int Id { get; set; }
    [Required]
    [MinLength(2)]
    public string Name { get; set; }
}
