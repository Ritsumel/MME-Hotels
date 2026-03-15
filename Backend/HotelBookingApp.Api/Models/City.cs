namespace HotelBookingApp.Api.Models;

public class City
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Image { get; set; } = "";
    public string UrlSlug { get; set; } = "";

    public List<Hotel> Hotels { get; set; } = new();
}