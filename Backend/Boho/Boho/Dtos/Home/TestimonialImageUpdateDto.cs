﻿using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class TestimonialImageUpdateDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
