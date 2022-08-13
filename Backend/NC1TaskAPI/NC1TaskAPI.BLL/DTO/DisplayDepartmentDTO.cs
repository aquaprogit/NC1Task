﻿namespace NC1TaskAPI.BLL.DTO;
public class DisplayDepartmentDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Floor { get; set; }
    public List<DisplayEmployeeDTO> Employees { get; set; } = new();
}
