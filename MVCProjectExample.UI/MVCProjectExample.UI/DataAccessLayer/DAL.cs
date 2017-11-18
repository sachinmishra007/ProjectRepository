using MVCProjectExample.UI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 

namespace MVCProjectExample.UI.DataAccessLayer
{
    /// <summary>
    /// Code is added to Make content updated on Development_DEV_20145
    /// </summary>
    public class DAL
    {
        public DAL()
        {

        }

        public List<Teacher> GetTeachers()
        {
            return new List<Teacher>()
            {
                 new Teacher { TeacherId = 1, Code = "TT", Name = "Tejas Trivedi" },
                 new Teacher { TeacherId = 2, Code = "JT", Name = "Jignesh Trivedi" },
                 new Teacher { TeacherId = 3, Code = "RT", Name = "Rakesh Trivedi" }
            };
        }

        public List<Student> GetStudent()
        {
            return new List<Student>()
            {
                 new Student { StudentId = 1, Code = "L0001", Name = "Amit Gupta", EnrollmentNo = "201404150001" },
                 new Student { StudentId = 2, Code = "L0002", Name = "Chetan Gujjar", EnrollmentNo = "201404150002" },
                 new Student { StudentId = 3, Code = "L0003", Name = "Bhavin Patel", EnrollmentNo = "201404150003" }
            };
        }

        public List<Department> GetDepartment()
        {
            return new List<Department>()
            {
                new Department { DepartmentId=1,DepartmentName="IT",Location="Mumbai",NoOfEmployee=20 },
                new Department { DepartmentId=2,DepartmentName="Accounts",Location="Hyderabad",NoOfEmployee=22 },
            };
        }
    }
}