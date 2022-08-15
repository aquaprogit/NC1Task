using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.BLL.DTO;
public class LanguageDTO
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
