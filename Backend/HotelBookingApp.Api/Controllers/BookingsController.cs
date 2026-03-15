using HotelBookingApp.Api.Data;
using HotelBookingApp.Api.Models;
using HotelBookingApp.Api.DTOs.Bookings;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HotelBookingApp.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/bookings")]
public class BookingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public BookingsController(AppDbContext context)
    {
        _context = context;
    }

    private string? CurrentEmail => User.FindFirstValue(ClaimTypes.Name);
    private string? CurrentRole => User.FindFirstValue(ClaimTypes.Role);

    [HttpGet]
    public IActionResult GetBookings()
    {
        var role = CurrentRole;
        var email = CurrentEmail;

        IQueryable<Booking> query = _context.Bookings.Where(b => !b.IsCancelled);

        if (role != "Admin")
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null)
                return Unauthorized();

            query = query.Where(b => b.UserId == user.Id);
        }

        var bookings = query.Select(MapToDto).ToList();

        return Ok(bookings);
    }

    [HttpGet("cancelled")]
    public IActionResult GetCancelledBookings()
    {
        var email = CurrentEmail;
        var role = CurrentRole;

        if (role == "Admin")
        {
            var bookings = _context.Bookings
                .Where(b => b.IsCancelled)
                .Select(MapToDto)
                .ToList();

            return Ok(bookings);
        }

        var user = _context.Users.FirstOrDefault(u => u.Email == email);

        if (user == null)
            return Unauthorized();

        var userBookings = _context.Bookings
            .Where(b => b.UserId == user.Id && b.IsCancelled)
            .Select(MapToDto)
            .ToList();

        return Ok(userBookings);
    }

    [HttpPost]
    public IActionResult CreateBooking(CreateBookingDto dto)
    {
        var email = CurrentEmail;
        var user = _context.Users.FirstOrDefault(u => u.Email == email);

        if (user == null)
            return Unauthorized();

        var booking = new Booking
        {
            HotelId = dto.HotelId,
            GuestName = dto.GuestName,
            CheckIn = dto.CheckIn,
            CheckOut = dto.CheckOut,
            Guests = dto.Guests,
            UserId = user.Id
        };

        _context.Bookings.Add(booking);
        _context.SaveChanges();

        var result = MapToDto(booking);

        return CreatedAtAction(nameof(GetBookings), new { id = result.Id }, result);
    }

    [HttpPatch("{id}/cancel")]
    public IActionResult CancelBooking(int id)
    {
        var booking = _context.Bookings.Find(id);

        if (booking == null)
            return NotFound();

        if (booking.IsCancelled)
            return BadRequest("Booking is already cancelled.");

        var email = CurrentEmail;
        var role = CurrentRole;

        if (role != "Admin")
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null)
                return Unauthorized();

            if (booking.UserId != user.Id)
                return Forbid();
        }

        booking.IsCancelled = true;

        _context.SaveChanges();

        return NoContent();
    }

    private static BookingDto MapToDto(Booking b)
    {
        return new BookingDto
        {
            Id = b.Id,
            HotelId = b.HotelId,
            GuestName = b.GuestName,
            CheckIn = b.CheckIn,
            CheckOut = b.CheckOut,
            Guests = b.Guests
        };
    }
}