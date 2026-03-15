using Microsoft.EntityFrameworkCore;
using HotelBookingApp.Api.Models;

namespace HotelBookingApp.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Hotel> Hotels { get; set; }
    public DbSet<City> Cities { get; set; }
}