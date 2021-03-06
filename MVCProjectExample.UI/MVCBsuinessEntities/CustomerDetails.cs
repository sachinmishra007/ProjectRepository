﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCBsuinessEntities
{
    public class CustomerDetails
    {
        [JsonProperty(PropertyName = "CustomerId")]
        public string CustomerId { get; set; }

        [JsonProperty(PropertyName = "CompanyName")]
        public string CompanyName { get; set; }

        [JsonProperty(PropertyName = "ContactName")]
        public string ContactName { get; set; }

        [JsonProperty(PropertyName = "ContactTitle")]
        public string ContactTitle { get; set; }

        [JsonProperty(PropertyName = "addressDetails")]
        public List<CustomerAddress> addressDetails { get; set; }

        [JsonProperty(PropertyName = "SelectedOption")]
        public bool SelectedOption { get; set; }

        [JsonProperty(PropertyName = "id")]
        public string id { get; set; }

        [JsonProperty(PropertyName = "_self")]
        public string _self { get; set; }
    }
}
