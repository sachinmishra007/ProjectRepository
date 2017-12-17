using MVCProjectExample.BAL.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCProjectExample.BAL
{
    public class NomineeCustomerSiblingDetails : INomineeDetails
    {
        public List<string> GetCustomerNomineeDetails()
        {
            return new List<string>() { "Hello Nominee Details Sibling Class" };
        }
    }
}
