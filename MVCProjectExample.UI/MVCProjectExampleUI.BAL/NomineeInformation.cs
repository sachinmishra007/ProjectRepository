using MVCProjectExampleUI.BAL.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCProjectExampleUI.BAL
{
    public class NomineeInformation : INomineeDetails
    {
        public List<string> GetNomineeDetails(string _Name)
        {
            return new List<string>() { "Hello Nominee Information Class" };
        }
    }
}
