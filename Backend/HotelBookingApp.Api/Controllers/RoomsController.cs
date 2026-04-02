using HotelBookingApp.Api.Data;
using HotelBookingApp.Api.DTOs.Rooms;
using HotelBookingApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelBookingApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private readonly AppDbContext _context;

    public RoomsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<RoomDto>>> GetRooms()
    {
        var rooms = await _context.Rooms
            .AsNoTracking()
            .Select(r => new RoomDto
            {
                Id = r.Id,
                HotelId = r.HotelId,
                Name = r.Name,
                RoomType = r.RoomType,
                PricePerNight = r.PricePerNight,
                Capacity = r.Capacity,
                Description = r.Description,
                ImageUrl = r.ImageUrl,
                IsAvailable = r.IsAvailable
            })
            .ToListAsync();

        return Ok(rooms);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<RoomDto>> GetRoom(int id)
    {
        var room = await _context.Rooms
            .AsNoTracking()
            .Where(r => r.Id == id)
            .Select(r => new RoomDto
            {
                Id = r.Id,
                HotelId = r.HotelId,
                Name = r.Name,
                RoomType = r.RoomType,
                PricePerNight = r.PricePerNight,
                Capacity = r.Capacity,
                Description = r.Description,
                ImageUrl = r.ImageUrl,
                IsAvailable = r.IsAvailable
            })
            .FirstOrDefaultAsync();

        if (room == null)
            return NotFound("Room not found.");

        return Ok(room);
    }

    [HttpGet("hotel/{hotelId}")]
    public async Task<ActionResult<IEnumerable<RoomDto>>> GetRoomsByHotel(int hotelId)
    {
        var rooms = await _context.Rooms
            .AsNoTracking()
            .Where(r => r.HotelId == hotelId)
            .Select(r => new RoomDto
            {
                Id = r.Id,
                HotelId = r.HotelId,
                Name = r.Name,
                RoomType = r.RoomType,
                PricePerNight = r.PricePerNight,
                Capacity = r.Capacity,
                Description = r.Description,
                ImageUrl = r.ImageUrl,
                IsAvailable = r.IsAvailable
            })
            .ToListAsync();

        return Ok(rooms);
    }

    [HttpPost]
    public async Task<ActionResult<RoomDto>> CreateRoom(CreateRoomDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Name))
            return BadRequest("Room name is required.");

        var hotelExists = await _context.Hotels.AnyAsync(h => h.Id == dto.HotelId);
        if (!hotelExists)
            return BadRequest("HotelId does not exist.");

        var room = new Room
        {
            HotelId = dto.HotelId,
            Name = dto.Name,
            RoomType = dto.RoomType,
            PricePerNight = dto.PricePerNight,
            Capacity = dto.Capacity,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            IsAvailable = dto.IsAvailable
        };

        _context.Rooms.Add(room);
        await _context.SaveChangesAsync();

        var result = new RoomDto
        {
            Id = room.Id,
            HotelId = room.HotelId,
            Name = room.Name,
            RoomType = room.RoomType,
            PricePerNight = room.PricePerNight,
            Capacity = room.Capacity,
            Description = room.Description,
            ImageUrl = room.ImageUrl,
            IsAvailable = room.IsAvailable
        };

        return CreatedAtAction(nameof(GetRoom), new { id = room.Id }, result);
    }
}