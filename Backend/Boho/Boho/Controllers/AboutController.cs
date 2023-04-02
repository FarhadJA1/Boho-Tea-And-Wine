using Boho.Dtos.About;
using Boho.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace Boho.Controllers;
public class AboutController : BaseController
{
    private readonly IAboutService _aboutService;

    public AboutController(IAboutService aboutService)
    {
        _aboutService = aboutService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAboutContent([FromBody] CreateContentDto createContentDto)
    {
        await _aboutService.CreateContentAsync(createContentDto);
        return Ok("About content created");
    }
    [HttpGet]
    public async Task<IActionResult> GetAboutContent()
    {
        return Ok(await _aboutService.GetAllAboutContentsAsync());
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAboutContent([FromRoute] int id)
    {
        var result = await _aboutService.DeleteAboutContentAsync(id);
        if (result==true)
        {
            return Ok("Deleted");
        }
        return BadRequest("Content not found");
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAboutContent([FromRoute] int id, [FromBody] UpdateAboutContentDto updateAboutContentDto)
    {
        updateAboutContentDto.Id = id;
        var result = await _aboutService.UpdateAboutContentAsync(updateAboutContentDto);

        if (result == true)
            return Ok("Updated");
        return BadRequest("Content not found");
    }

    [HttpPost]
    public async Task<IActionResult> CreateAboutSliderImage([FromBody] CreateSliderImageDto createSliderImageDto)
    {
        await _aboutService.CreateSliderImageAsync(createSliderImageDto);
        return Ok("Slider image created");
    }
    [HttpGet]
    public async Task<IActionResult> GetSliderImage()
    {
        return Ok(await _aboutService.GetAllAboutSliderImagesAsync());
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSliderImage([FromRoute] int id)
    {
        var result = await _aboutService.DeleteAboutContentAsync(id);
        if (result == true)
        {
            return Ok("Deleted");
        }
        return BadRequest("Slider not found");
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSliderImage([FromRoute] int id, [FromBody] UpdateAboutSliderImage updateAboutSliderImage)
    {
        updateAboutSliderImage.Id = id;
        var result = await _aboutService.UpdateAboutSliderImageAsync(updateAboutSliderImage);

        if (result == true)
            return Ok("Updated");
        return BadRequest("Slider not found");
    }
}
