using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCBsuinessEntities
{
    public class CustomerAddress
    {

        [JsonProperty(PropertyName = "Address")]
        public string Address { get; set; }

        [JsonProperty(PropertyName = "City")]
        public string City { get; set; }

        [JsonProperty(PropertyName = "Region")]
        public string Region { get; set; }

        [JsonProperty(PropertyName = "PostalCode")]
        public string PostalCode { get; set; }

        [JsonProperty(PropertyName = "Country")]
        public string Country { get; set; }

        [JsonProperty(PropertyName = "Phone")]
        public string Phone { get; set; }

        [JsonProperty(PropertyName = "Fax")]
        public string Fax { get; set; }
    }
}
