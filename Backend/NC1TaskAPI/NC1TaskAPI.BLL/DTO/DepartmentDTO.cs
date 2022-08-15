using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.BLL.DTO;
public class DepartmentDTO
{
    [Key]
    [Range(0,int.MaxValue)]
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    [Range(0, 100)]
    public int Floor { get; set; }
}
