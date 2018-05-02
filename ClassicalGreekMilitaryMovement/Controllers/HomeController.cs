using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClassicalGreekMilitaryMovement.Models;

namespace ClassicalGreekMilitaryMovement.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    
        [HttpPost]
        public IActionResult Calculate(int armySize )
        {
            return View();
        }
    }

    

}
