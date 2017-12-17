using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCProjectExample.BAL.Domain
{
    public interface INomineeDetails
    {
        List<string> GetCustomerNomineeDetails();
    }
}
