using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NC1TaskAPI.BLL.DTO;
public class DisplayEmployeeDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Surname { get; set; } = string.Empty;
    public int Age { get; set; }
    public string DepartmentName { get; set; } = string.Empty;
    public string LanguageName { get; set; } = string.Empty;
}
