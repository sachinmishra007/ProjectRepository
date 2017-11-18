using MVCProjectExample.UI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCProjectExample.UI.ViewModel
{
    public class CustomViewModel
    {
        public IEnumerable<Teacher> Teacher { get; set; }
        public IEnumerable<Student> Student { get; set; }
    }
}