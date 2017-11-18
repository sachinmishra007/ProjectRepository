using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MVCProjectExample.UI.Models
{
    public class User
    {

        public int UserId { get; set; }


        [Display(Name = "User Name")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Please enter user name")]
        public string Username { get; set; }

        [Display(Name = "Password")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Please enter Password")]
        public string Password { get; set; }
    }
}