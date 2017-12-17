using MVCProjectExample.BAL.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCProjectExample.BAL
{
    public class NomineeDetails : INomineeDetails
    {
        List<string> INomineeDetails.GetCustomerNomineeDetails()
        {
            return new List<string>() { "Hello Nominee Details Class" };
        }
    }
}
