using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCBsuinessEntities
{
    public class Funds  
    {
        [JsonProperty(PropertyName = "FundCode")]
        public string FundCode { get; set; }
        [JsonProperty(PropertyName = "FundName")]
        public string FundName { get; set; }
        [JsonProperty(PropertyName = "AllowedFundPercentageAllocation")]
        public double? AllowedFundPercentageAllocation { get; set; }

        [JsonProperty(PropertyName = "id")]
        public string id{ get; set; }
        [JsonProperty(PropertyName = "id")]
        public string _self { get; set; }
    }
}
