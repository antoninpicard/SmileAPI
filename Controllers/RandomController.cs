using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;

namespace RandomAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RandomController : ControllerBase
    {
        private List<string> Phrases = new List<string> { "Phrase 1", "Phrase 2", "Phrase 3" };
        private List<string> Images = new List<string> { "image1.png","image2.png" };

        [HttpGet("randomphrase")]
        public IActionResult GetRandomPhrase()
        {
            var random = new Random();
            int index = random.Next(Phrases.Count);
            return Ok(Phrases[index]);
        }

        [HttpGet("randomimage")]
        public IActionResult GetRandomImage()
        {
            var random = new Random();
            int index = random.Next(Images.Count);
            var imageName = Images[index];
            var imagePath = Path.Combine("Images", imageName);
            var image = System.IO.File.OpenRead(imagePath);
            return File(image, "image/jpeg", imageName); // Renvoie le fichier d'image avec le nom du fichier
        }


    }
}
