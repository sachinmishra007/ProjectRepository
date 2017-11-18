using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCProjectExample.UI.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public int NoOfEmployee { get; set; }
        public string Location { get; set; }
    }
}