using Boho.Dtos.About;
using Boho.Dtos.Home;
using Boho.Services.Abstractions;
using Boho.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace Boho.Controllers;
public class HomeController : BaseController
{
    private readonly IHomeService _homeService;

    public HomeController(IHomeService homeService)
    {
        _homeService = homeService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateHomeAbout([FromBody] HomeAboutCreateDto homeAboutCreateDto)
    {
        await _homeService.CreateHomeAboutContentAsync(homeAboutCreateDto);
        return Ok("About content created");
    }
    [HttpGet]
    public async Task<IActionResult> GetHomeAbout()
    {
        return Ok(await _homeService.GetHomeAboutAsync());
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHomeAbout([FromRoute] int id)
    {
        var result = await _homeService.DeleteHomeAboutAsync(id);
        if (result == true)
        {
            return Ok("Deleted");
        }
        return BadRequest("Content not found");
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHomeAbout([FromRoute] int id, [FromBody] HomeAboutUpdateDto homeAboutUpdateDto)
    {
        homeAboutUpdateDto.Id = id;
        var result = await _homeService.UpdateHomeAboutAsync(homeAboutUpdateDto);

        if (result == true)
            return Ok("Updated");
        return BadRequest("Content not found");
    }



    [HttpPost]
    public async Task<IActionResult> CreateHomeGalleryLabel([FromBody] HomeGalleryLabelCreateDto homeGalleryLabelCreateDto)
    {
        await _homeService.CreateHomeGalleryLabelAsync(homeGalleryLabelCreateDto);
        return Ok("Gallery label created");
    }
    [HttpGet]
    public async Task<IActionResult> GetHomeGalleryLabel()
    {
        return Ok(await _homeService.GetHomeGalleryLabelAsync());
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHomeGalleryLabel([FromRoute] int id)
    {
        var result = await _homeService.DeleteHomeGalleryLabelAsync(id);
        if (result == true)
        {
            return Ok("Deleted");
        }
        return BadRequest("Gallery label not found");
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHomeGalleryLabel([FromRoute] int id, [FromBody] HomeGalleryLabelUpdateDto homeGalleryLabelUpdateDto)
    {
        homeGalleryLabelUpdateDto.Id = id;
        var result = await _homeService.UpdateHomeGalleryLabelAsync(homeGalleryLabelUpdateDto);

        if (result == true)
            return Ok("Updated");
        return BadRequest("Gallery label not found");
    }

    [HttpPost]
    public async Task<IActionResult> CreateOpeningHour([FromBody] OpeningHourCreateDto openingHourCreateDto)
    {
        await _homeService.CreateOpeningHourAsync(openingHourCreateDto);
        return Ok("Opening hour created");
    }
    [HttpGet]
    public async Task<IActionResult> GetOpeningHour()
    {
        return Ok(await _homeService.GetOpeningHourAsync());
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteOpeningHour([FromRoute] int id)
    {
        var result = await _homeService.DeleteOpeningHourAsync(id);
        if (result == true)
        {
            return Ok("Deleted");
        }
        return BadRequest("Opening hour not found");
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateOpeningHour([FromRoute] int id, [FromBody] OpeningHourUpdateDto openingHourUpdateDto)
    {
        openingHourUpdateDto.Id = id;
        var result = await _homeService.UpdateOpeningHourAsync(openingHourUpdateDto);

        if (result == true)
            return Ok("Updated");
        return BadRequest("Opening hour not found");
    }
}
