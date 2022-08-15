using NC1TaskAPI.BLL.Profiles;
using NC1TaskAPI.DAL.EF;
using NC1TaskAPI.BLL.Services.Interfaces;
using NC1TaskAPI.BLL.Services;
using NC1TaskAPI.DAL.Repos;
using NC1TaskAPI.DAL.Repos.Interfaces;
using System;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => {
    options.AddPolicy("CorsApi",
        builder => builder.WithOrigins("http://localhost:5500", "http://127.0.0.1:5500/")
            .AllowAnyHeader()
            .AllowAnyMethod());
});
builder.Services.AddCors();
//Mappers
builder.Services.AddAutoMapper(typeof(EmployeeProfile));
//DB Context
builder.Services.AddDbContext<ApplicationContext>();

//Repositories
builder.Services.AddScoped<IEmployeeRepo, EmployeeRepo>();
builder.Services.AddScoped<IDepartmentRepo, DepartmentRepo>();
builder.Services.AddScoped<ILanguageRepo, LanguageRepo>();

//Services
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();


//Controllers
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .SetIsOriginAllowed(or => or == "http://127.0.0.1:5500/")
    .AllowAnyMethod()
    .AllowAnyHeader());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("CorsApi");
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
