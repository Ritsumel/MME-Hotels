using Bogus;
using HotelBookingApp.Api.Models;
using System.Runtime.CompilerServices;

namespace HotelBookingApp.Api.Data;

public static class SeedData
{
    public static void Initialize(AppDbContext context)
    {
        if (context.Users.Any() || context.Hotels.Any())
            return;

        var userFaker = new Faker<User>("sv")
            .RuleFor(u => u.FullName, f => f.Name.FullName())
            .RuleFor(u => u.Email, (f, u) => f.Internet.Email(u.FullName))
            .RuleFor(User => User.PasswordHash, f => "password123")
            .RuleFor(User => User.Role, f =>"User");

        var users = userFaker.Generate(20);

        users.Add(new User
        {
            FullName = "Admin",
            Email = "admin@example.com",
            PasswordHash = "admin123",
            Role = "Admin"
        });

        context.Users.AddRange(users);
        context.SaveChanges();

        var svenskaStäder = new[]
            {
                "Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås",
                "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping",
                "Lund", "Umeå", "Gävle", "Borås", "Södertälje",
                "Eskilstuna", "Halmstad", "Växjö", "Karlstad", "Sundsvall"
            };

        var cities = svenskaStäder.Select(namn => new City
        {
            Name = namn,
            Image = $"https://picsum.photos/seed/{namn}/800/600",
            UrlSlug = namn.ToLower().Replace("å", "a").Replace("ä", "a").Replace("ö", "o")
        }).ToList();

        context.Cities.AddRange(cities);
        context.SaveChanges();

        var hotelFaker = new Faker<Hotel>("sv")
            .RuleFor(h => h.Name, (f, h) =>
            {
                var stad = f.PickRandom(cities);
                h.CityId = stad.Id;
                return stad.Name + " " + f.PickRandom("Hotel", "Resort", "Suites", "Inn", "Lodge");
            })
            .RuleFor(h => h.Description, f => f.PickRandom(
                "Ett modernt hotell med fantastisk utsikt och förstklassig service.",
                "Beläget i hjärtat av staden med spa, pool och gourmetrestaurang.",
                "Lyxigt boende med eleganta rum och personlig service dygnet runt.",
                "Familjevänligt hotell med aktiviteter för både stora och små.",
                "Boutique-hotell med unik karaktär och ombonad atmosfär."
             ))
            .RuleFor(h => h.PricePerNight, f => Math.Round(f.Random.Decimal(500, 4000) / 100) * 100)
            .RuleFor(h => h.Image, f => $"https://picsum.photos/seed/{f.Random.Word()}/800/600")
            .RuleFor(h => h.UrlSlug, (f, h) => h.Name.ToLower().Replace(" ", "-"))
            .RuleFor(h => h.CityId, f => f.PickRandom(cities).Id);

        var hotels = hotelFaker.Generate(20);

        context.Hotels.AddRange(hotels);
        context.SaveChanges();
    }
}
