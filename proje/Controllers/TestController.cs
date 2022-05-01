using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace proje.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class TestController : ControllerBase
    {


        private readonly IConfiguration _config;
        public TestController(IConfiguration config)
        {
            _config = config;
        }
        [HttpPost("CreateUser")]
        public IActionResult Create() => Ok("Success from create method");

    }
        
    }
