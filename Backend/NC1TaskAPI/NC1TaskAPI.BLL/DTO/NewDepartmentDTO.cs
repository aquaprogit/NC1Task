using System.ComponentModel.DataAnnotations;

namespace NC1TaskAPI.BLL.DTO;
public class NewDepartmentDTO
{
    public string Name { get; set; } = string.Empty;
    [Range(1,100)]
    public int Floor { get; set; } = 1;
}
