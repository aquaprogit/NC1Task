using NC1TaskAPI.BLL.Profiles;
using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.BLL.Services.Interfaces;
using NC1TaskAPI.BLL.Services;
using NC1TaskAPI.DAL.Repos;
using NC1TaskAPI.DAL.Repos.Interfaces;

var builder = WebApplication.CreateBuilder(args);

//Mappers
builder.Services.AddAutoMapper(typeof(EmployeeProfile));
//DB Context
builder.Services.AddDbContext<ApplicationContext>();

//Repositories
builder.Services.AddScoped<IEmployeeRepo, EmployeeRepo>();
builder.Services.AddScoped<IDepartmentRepo, DepartmentRepo>();
builder.Services.AddScoped<IProgrammingLanguageRepo, ProgrammingLanguageRepo>();

//Services
builder.Services.AddScoped<IEmployeeService, EmployeeService>(); 
builder.Services.AddScoped<IDepartmentService, DepartmentService>();


//Controllers
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
